<template>
  <el-container>
    <el-header>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
    </el-header>
    <el-container>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">测试项目组一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import {
  Container as ElContainer,
  Aside as ElAside,
  Header as ElHeader,
  Main as ElMain,
  Dropdown as ElDropdown,
  DropdownMenu as ElDropdownMenu,
  DropdownItem as ElDropdownItem,
  Table as ElTable,
  TableColumn as ElTableColumn,
  MenuItemGroup as ElMenuItemGroup,
  Submenu as ElSubmenu,
  Menu as ElMenu,
  MenuItem as ElMenuItem,
  RadioGroup as ElRadioGroup,
  RadioButton as ElRadioButton,
} from 'element-ui';

export default {
  components: {
    ElContainer,
    ElAside,
    ElHeader,
    ElMain,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElTable,
    ElTableColumn,
    ElMenuItem,
    ElMenuItemGroup,
    ElSubmenu,
    ElMenu,
    ElRadioGroup,
    ElRadioButton,
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    };
    return {
      isCollapse: true,
      tableData: Array(10).fill(item),
    };
  },
};
</script>
