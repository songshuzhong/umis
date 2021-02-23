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
    text: '跳转到百度',
    size: 'mini',
    actionType: 'mis-redirect',
    redirect: 'http://www.baidu.com',
  },
};
