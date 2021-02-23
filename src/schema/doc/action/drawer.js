export default {
  renderer: 'mis-main',
  title: 'drawer按钮',
  initData: {
    name: 'shuzhong song',
    email: 'sshuzhong@outlook.com',
    phone: '15510351839',
    province: '北京',
    age: '2',
  },
  body: {
    renderer: 'mis-action',
    text: '抽屉',
    size: 'mini',
    actionType: 'mis-drawer',
    body: {
      showClose: true,
      size: '60%',
      label: '编辑',
      header: {
        renderer: 'mis-html',
        html: '抽屉嵌套表单',
      },
      body: {
        renderer: 'mis-form',
        name: 'form3',
        api: {
          url: '/api/user?id=${uid}',
          method: 'put',
        },
        controls: [
          {
            renderer: 'mis-input',
            name: 'name',
            label: '姓名',
          },
          {
            renderer: 'mis-input',
            name: 'province',
            label: '地址',
          },
        ],
      },
      footer: [
        {
          renderer: 'mis-action',
          actionType: 'mis-reset',
          remoteComponent: 'form3',
          text: '重置',
        },
        {
          renderer: 'mis-action',
          actionType: 'mis-submit',
          remoteComponent: 'form3',
          text: '更新',
        },
      ],
    },
  },
};
