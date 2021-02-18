export default {
  renderer: 'mis-main',
  title: 'Copy按钮',
  initData: {
    name: 'shuzhong song',
    email: 'sshuzhong@outlook.com',
    phone: '15510351839',
    province: '北京',
    age: '2',
  },
  body: {
    renderer: 'mis-action',
    text: 'Copy按钮',
    size: 'mini',
    actionType: 'mis-copy',
    content: 'https://www.baidu.com?name=${name}',
  },
};
