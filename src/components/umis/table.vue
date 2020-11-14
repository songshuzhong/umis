<template>
  <div class="umis-crud__container">
    <el-table
      v-loading="iApiLoading"
      :data="iList"
      :height="height"
      :stripe="stripe"
      :border="border"
      :size="size"
      :fit="fit"
      :max-height="maxHeight"
      :show-header="showHeader"
      :highlight-current-row="highlightCurrentRow"
    >
      <template v-for="(column, index) in columns" :key="index">
        <el-table-column
          v-if="column.body"
          :path="`/${path}/${index}/${column.name}`"
          :prop="column.name || ''"
          :label="column.label"
          :width="column.width"
        >
          <template slot-scope="scope">
            <mis-component
              v-for="(item, jndex) in column.body"
              :key="jndex"
              :path="`/${path}/${index}/${item.renderer}`"
              :mis-name="item.renderer"
              :header="getHeader(item)"
              :body="getBody(item)"
              :footer="getFooter(item)"
              :props="getFattingProps(item, scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :path="`/${path}/${index}/${column.name}`"
          :prop="column.name || ''"
          :label="column.label"
          :fixed="column.fixed"
          :width="column.width"
        />
      </template>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next, total, sizes, jumper"
      :total="iTotal"
      :page-size="iPageSize"
      :current-page="iPageIndex"
      :page-sizes="[10, 20, 30, 40]"
      @size-change="handleSizeChanged"
      @current-change="handlePageChanged"
    />
  </div>
</template>

<script>
import ElTable from 'element-ui/lib/table';
import ElTableColumn from 'element-ui/lib/table-column';
import ElPagination from 'element-ui/lib/pagination';

import initApi from '../mixin/initApi';
import derivedProp from '../mixin/derivedProp';
import linkage from '../mixin/linkage';

export default {
  name: 'MisTable',
  components: {
    ElTable,
    ElTableColumn,
    ElPagination,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    height: {
      type: Number,
      required: false,
    },
    maxHeight: {
      type: Number,
      required: false,
    },
    stripe: {
      type: Boolean,
      required: false,
      default: true,
    },
    border: {
      type: Boolean,
      required: false,
    },
    fit: {
      type: Boolean,
      required: false,
      default: true,
    },
    showHeader: {
      type: Boolean,
      required: false,
      default: true,
    },
    highlightCurrentRow: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  mixins: [initApi, derivedProp, linkage],
};
</script>
