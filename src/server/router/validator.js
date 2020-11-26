const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
  'GET /api/schema/validator': async ctx => {
    await sleep(500);

    ctx.restify({
      msg: 'success',
      code: 1000,
      data: {
        renderer: 'mis-form',
        name: 'form3',
        api: 'http://dev.bendi.ad.weibo.com:3000/api/save',
        controls: [
          {
            renderer: 'mis-static',
          },
          {
            renderer: 'mis-input',
            name: 'name',
            label: '姓名',
            tip: '姓名',
            rules: [{ required: true, message: '联系人不能为空' }],
          },
          {
            renderer: 'mis-input',
            name: 'email',
            label: '邮箱',
            tip: '邮箱地址，字母数字下划线',
            rules: [
              {
                required: true,
                message: '请输入邮箱地址',
                trigger: 'blur',
              },
              {
                type: 'email',
                message: '请输入正确的邮箱地址',
                trigger: ['blur', 'change'],
              },
            ],
          },
          {
            renderer: 'mis-input',
            name: 'address',
            label: ' 住址',
            tip: '举办一场空前的活动',
            rules: [
              {
                required: true,
                message: '活动名称是必填项',
                trigger: 'change',
              },
            ],
          },
          {
            renderer: 'mis-select',
            name: 'profession',
            label: '角色',
            tip: '活动范围在全宇宙',
            options: [
              {
                text: '前端',
                value: 'fe',
              },
              {
                text: '后端',
                value: 'rd',
              },
              {
                text: '产品',
                value: 'pm',
              },
              {
                text: '测试',
                value: 'qa',
              },
            ],
            rules: [
              {
                required: true,
                message: '身份是必填项',
                trigger: 'change',
              },
            ],
          },
          {
            renderer: 'mis-datepicker',
            label: '入职日期',
            name: 'joinedDate',
            tip: '入职日期',
            rules: [
              {
                required: true,
                message: '入职日期是必填项',
                trigger: 'change',
              },
            ],
          },
          {
            renderer: 'mis-switch',
            label: '校招',
            tip: '是否校招',
            name: 'enrollment',
          },
          {
            renderer: 'mis-input',
            name: 'school',
            label: '校招院校',
            tip: '校招院校',
            visibleOn: 'data.enrollment === true',
            rules: [
              {
                required: true,
                message: '请输入校招院校名称',
                trigger: 'blur',
              },
            ],
          },
          {
            renderer: 'mis-button',
            text: '保存数据',
          },
        ],
      },
    });
  },
};
