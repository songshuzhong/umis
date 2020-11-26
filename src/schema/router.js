const json = [
  {
    renderer: 'mis-menu-submenu',
    name: 'submenu',
    icon: 'el-icon-menu',
    title: '测试项目组一',
    body: [
      {
        renderer: 'mis-menu-item-group',
        title: '组件分组一',
        body: [
          {
            renderer: 'mis-menu-item',
            name: 'visible',
            label: '显隐性联动',
            schemaUrl: '/api/schema/visible',
          },
          {
            renderer: 'mis-menu-item',
            name: 'validator',
            label: '表单验证',
            schemaUrl: '/api/schema/validator',
          },
          {
            renderer: 'mis-menu-item',
            name: 'grid',
            label: '栅栏',
            schemaUrl: '/api/schema/grid',
          },
          {
            renderer: 'mis-menu-item',
            name: 'tabs',
            label: '选项卡',
            schemaUrl: '/api/schema/tabs',
          },
          {
            renderer: 'mis-menu-item',
            name: 'linkage',
            label: ' 组件联动',
            schemaUrl: '/api/schema/linkage',
          },
        ],
      },
    ],
  },
];

export default json;
