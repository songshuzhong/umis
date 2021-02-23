export default {
  renderer: 'mis-main',
  title: 'dialog按钮',
  initData: {
    name: 'shuzhong song',
    email: 'sshuzhong@outlook.com',
    phone: '15510351839',
    province: '北京',
    age: '2',
  },
  body: {
    renderer: 'mis-action',
    text: '对话框',
    size: 'mini',
    actionType: 'mis-dialog',
    body: {
      body: {
        renderer: 'mis-html',
        html: 'drawer',
      },
    },
  },
};
