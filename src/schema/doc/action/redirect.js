export default {
  renderer: 'mis-main',
  title: 'Redirect按钮',
  initData: {
    name: 'shuzhong song',
    email: 'sshuzhong@outlook.com',
    phone: '15510351839',
    province: '北京',
    age: '2',
  },
  body: {
    renderer: 'mis-action',
    text: '设置',
    size: 'mini',
    actionType: 'mis-redirect',
    redirect: 'www.baidu.com',
  },
};
