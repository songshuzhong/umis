export default {
  renderer: 'mis-main',
  title: 'Ajax按钮',
  initData: {
    name: 'shuzhong song',
    email: 'sshuzhong@outlook.com',
    phone: '15510351839',
    province: '北京',
    age: '2',
  },
  body: {
    renderer: 'mis-action',
    text: 'Ajax按钮',
    size: 'mini',
    actionType: 'mis-ajax',
    actionApi: {
      url: '/api/user?uid=${uid}',
      method: 'delete',
    },
  },
};
