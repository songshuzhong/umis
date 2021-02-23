<template>
  <div class="sc-delivery-schedule">
    <div class="sc-delivery-schedule__content">
      <aside class="sc-delivery-schedule__frame">
        <div class="sc-delivery-schedule__category">
          星期/时间
        </div>
        <div
          v-for="week in 7"
          :key="week"
          class="sc-delivery-schedule__week"
          @click="onWeekClick(week - 1)"
        >
          星期{{ weeks[week - 1] }}
        </div>
      </aside>
      <div class="sc-delivery-schedule__body">
        <div class="sc-delivery-schedule__time">
          <div class="sc-delivery-schedule__time__noon">
            00:00 - 11:00
          </div>
          <div class="sc-delivery-schedule__time__noon">
            12:00 - 23:00
          </div>
        </div>
        <table class="sc-delivery-schedule__body__table">
          <thead>
            <tr>
              <th
                v-for="hour in 24"
                :key="hour"
                :label="createTips(0, hour - 1)"
                class="sc-delivery-schedule__cell"
                @click="onTheadClick(hour - 1)"
              >
                {{ hour - 1 }}
              </th>
            </tr>
          </thead>
          <tbody @mouseleave="onMouseLeave">
            <tr v-for="week in 7" :key="week">
              <td
                v-for="hour in 24"
                :key="hour"
                :ref="`scheduleCell${week}-${hour}`"
                class="sc-delivery-schedule__cell"
                :data-week="week - 1"
                :data-hour="hour - 1"
                :class="isActive(collector, week - 1, hour - 1) ? 'active' : ''"
                :label="createTips(week, hour - 1)"
                @click="onCellClick"
                @mousedown="onCellDown"
                @mousemove="onCellHover"
                @mouseup="onCellUp"
              />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="sc-delivery-schedule__tools">
      <div class="sc-delivery-schedule--active">
        已选
      </div>
      <div class="sc-delivery-schedule--unactive">
        未选
      </div>
      <div class="sc-delivery-schedule--tip">
        可拖动鼠标选择时间段
      </div>
      <div class="sc-delivery-schedule--clear" @click="onClearClick">
        清空
      </div>
    </div>
  </div>
</template>
<script>
import clonedeep from 'lodash.clonedeep';
import './index.scss';
export default {
  name: 'DeliverySchedule',
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      startX: 0,
      startY: 0,
      isClick: false,
      isDragging: false,
      collector: this.value || [],
      weeks: ['一', '二', '三', '四', '五', '六', '日'],
    };
  },
  watch: {
    value: {
      handler(val) {
        if (val && val.length === 7) {
          this.collector = val;
        }
      },
      immediate: true,
    },
    collector: {
      handler(val) {
        let value = val.flat();
        value.length === 0 ? (value = []) : (value = val);
        this.$emit('update:value', value);
      },
    },
  },
  mounted() {
    this.scheduleCell = document.querySelectorAll(
      '.sc-delivery-schedule__cell'
    );
  },
  methods: {
    isActive(collector, week, hour) {
      return collector[week] && collector[week].includes(hour);
    },
    isCovered(event, cell) {
      const x = event.target.offsetLeft;
      const y = event.target.offsetTop;
      const minX = Math.min(x, this.startX);
      const maxX = Math.max(x, this.startX);
      const minY = Math.min(y, this.startY);
      const maxY = Math.max(y, this.startY);

      return (
        cell.offsetLeft >= minX &&
        cell.offsetLeft <= maxX &&
        cell.offsetTop >= minY &&
        cell.offsetTop <= maxY
      );
    },
    createTips(week, hour) {
      const weeky = week ? `星期${this.weeks[week - 1]}` : '';
      let left = hour;
      let right = hour + 1;
      if (left <= 9) {
        left = '0' + left;
      }

      if (right <= 9) {
        right = '0' + right;
      }

      return `${weeky} ${left}:00 - ${right}:00`;
    },
    onClearClick() {
      this.collector = this.initCollector();
    },
    onCellClick(event) {
      if (this.isClick) {
        const collector = clonedeep(this.collector);
        const week = Number(event.target.dataset.week);
        const hour = Number(event.target.dataset.hour);

        this.reflushCollector(collector, week, hour);
        this.collector = collector;
      }
    },
    onCellDown(event) {
      this.isClick = true;
      this.isDragging = true;
      this.startX = event.target.offsetLeft;
      this.startY = event.target.offsetTop;
    },
    onCellHover(event) {
      this.isClick = false;
      if (this.isDragging) {
        this.scheduleCell.forEach(cell => {
          if (this.isCovered(event, cell)) {
            cell.classList.add('on-hover');
          } else {
            cell.classList.remove('on-hover');
          }
        });
      }
    },
    onMouseLeave() {
      const collector = clonedeep(this.collector) || [];
      let isChanged = false;
      this.isDragging = false;
      this.scheduleCell.forEach(cell => {
        if (cell.classList.contains('on-hover')) {
          const week = Number(cell.dataset.week);
          const hour = Number(cell.dataset.hour);

          this.reflushCollector(collector, week, hour);
          cell.classList.remove('on-hover');
          isChanged = true;
        }
      });

      isChanged && (this.collector = collector);
    },
    onCellUp(event) {
      const collector = clonedeep(this.collector);

      this.scheduleCell.forEach(cell => {
        cell.classList.remove('on-hover');

        if (!this.isClick && this.isDragging && this.isCovered(event, cell)) {
          const week = Number(cell.dataset.week);
          const hour = Number(cell.dataset.hour);

          this.reflushCollector(collector, week, hour);
        }
      });
      this.collector = collector;
      this.isDragging = false;
    },
    onTheadClick(hour) {
      const collector = clonedeep(this.collector);
      for (let i = 0; i < 7; i++) {
        if (!collector[i]) {
          collector[i] = [hour];
        } else if (collector[i].indexOf(hour) === -1) {
          collector[i].push(hour);
        }
      }
      this.collector = collector;
    },
    onWeekClick(week) {
      const collector = clonedeep(this.collector);
      const hours = [];
      for (let i = 0; i < 24; i++) {
        hours.push(i);
      }
      collector[week] = hours;
      for (let i = 0; i < 7; i++) {
        if (week !== i && typeof collector[i] === 'undefined') {
          collector[i] = [];
        }
      }
      this.collector = collector;
    },
    reflushCollector(collector, week, hour) {
      if (!collector[week]) {
        collector[week] = [hour];
      } else if (collector[week] && !collector[week].includes(hour)) {
        collector[week].push(hour);
      } else if (collector[week] && collector[week].includes(hour)) {
        collector[week] = collector[week].filter(item => item !== hour);
        if (!collector[week].length) {
          collector[week] = [];
        }
      }
      for (let i = 0; i < 7; i++) {
        if (!collector[i]) {
          collector[i] = [];
        }
      }
    },
    initCollector() {
      const collector = [];
      for (let i = 0; i < 7; i++) {
        collector[i] = [];
      }
      return collector;
    },
  },
};
</script>
