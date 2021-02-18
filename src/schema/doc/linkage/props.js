export default {
  renderer: 'mis-table',
  hasPageInfo: false,
  columns: [
    {
      label: '属性名',
      name: 'name',
    },
    {
      label: '类型',
      name: 'type',
    },
    {
      label: '默认值',
      name: 'default',
    },
    {
      label: '可选值',
      name: 'options',
    },
    {
      label: '说明',
      name: 'desc',
    },
  ],
  initRows: [
    {
      name: 'size',
      type: 'string',
      desc: '尺寸',
      default: '-',
      options: 'medium / small / mini',
    },
    {
      name: 'type',
      type: 'string',
      desc: ' 类型',
      default: '-',
      options: 'primary / success / warning / danger / info / text',
    },
    {
      name: 'plain',
      type: 'boolean',
      desc: '是否朴素按钮',
      default: 'false',
      options: 'true / false',
    },
    {
      name: 'round',
      type: 'boolean',
      desc: '是否圆角按钮',
      default: 'false',
      options: 'true / false',
    },
    {
      name: ' circle',
      type: 'boolean',
      desc: '是否圆形按钮',
      default: 'false',
      options: 'true / false',
    },
    {
      name: 'loading',
      type: 'boolean',
      desc: '是否加载中状态',
      default: 'false',
      options: 'true / false',
    },
    {
      name: 'disabled',
      type: 'boolean',
      desc: '是否禁用状态',
      default: 'false',
      options: 'true / false',
    },
    {
      name: ' icon',
      type: 'string',
      desc: '图标类名',
      default: '-',
      options: '',
    },
  ],
};
