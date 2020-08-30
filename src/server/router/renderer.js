const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
  'GET /api/schema/visible': async ctx => {
    ctx.restify({
      code: 1000,
      msg: 'success',
      data: {
        renderer: 'mis-form',
        name: 'form1',
        api: 'http://dev.bendi.ad.weibo.com:3000/api/mis',
        controls: [
          {
            renderer: 'mis-input',
            name: 'input',
            label: '地址',
            value: 'mis',
            visibleOn: 'switchs == true',
          },
          {
            renderer: 'mis-checkbox',
            name: 'checkbox',
            label: '主食',
            visibleOn: 'switchs == false',
            options: [
              {
                value: '1',
                text: '龙须面',
              },
              {
                value: '2',
                text: '北京烤鸭',
              },
            ],
          },
          {
            renderer: 'mis-radio',
            name: 'radio',
            label: '餐具',
            options: [
              {
                value: '1',
                text: '需要',
              },
              {
                value: '2',
                text: '不需要',
              },
            ],
          },
          {
            renderer: 'mis-switch',
            name: 'switchs',
            label: '配送',
            value: false,
          },
          {
            renderer: 'mis-button',
            text: '按钮',
          },
        ],
      },
    });
  },
  'GET /api/schema/reactive': async ctx => {
    ctx.restify({
      msg: 'success',
      code: 1000,
      data: {
        renderer: 'mis-form',
        name: 'form2',
        controls: [
          {
            renderer: 'mis-datepicker',
            name: 'date',
            label: '日期',
          },
          {
            renderer: 'mis-select',
            name: 'select2',
            label: '选择框',
            disabledOn: 'switchs2 == false',
            options: [
              {
                value: '选项1',
                text: '黄金糕',
              },
              {
                value: '选项2',
                text: '双皮奶',
              },
            ],
          },
          {
            renderer: 'mis-switch',
            name: 'switchs2',
            label: '配送',
            value: false,
          },
        ],
      },
    });
  },
  'GET /api/schema/cards': async ctx => {
    await sleep(500);

    ctx.restify({
      msg: 'success',
      code: 1000,
      data: {
        renderer: 'mis-cards',
        name: 'cards1',
        initApi: {
          url: '/api/pagelist/1/17',
          method: 'get',
        },
        span: 6,
        gutter: 20,
        shadow: 'hover',
        bodyStyle: { padding: '0' },
        classname: 'mis-card-margin',
        header: '<h4><%=name%></h4>',
        body: {
          renderer: 'mis-html',
          html:
            '<h5>id：<%=id%></h5><h5>名称：<%=name%></h5><h5>地址：<%=src%></h5><h5>形状：<%=shape%></h5>',
        },
        footer: [
          {
            renderer: 'mis-action',
            text: '弹一个窗',
            actionType: 'mis-dialog',
            body: {
              renderer: 'mis-dialog',
              title: '我是可以无限弹窗的哦',
              appendToBody: true,
              body: {
                renderer: 'mis-action',
                text: '点击查看详情',
                actionType: 'mis-dialog',
                body: {
                  renderer: 'mis-dialog',
                  title: '卡片详情',
                  appendToBody: true,
                  body: {
                    renderer: 'mis-html',
                    html:
                      '<h1>id：<%=id%></h1><h1>名称：<%=name%></h1><h1>地址：<%=src%></h1><h1>形状：<%=shape%></h1>',
                  },
                },
              },
            },
          },
        ],
      },
    });
  },
  'GET /api/schema/grid': async ctx => {
    await sleep(500);

    ctx.restify({
      msg: 'success',
      code: 1000,
      data: {
        name: 'grid',
        renderer: 'mis-grid',
        gutter: 20,
        classname: 'mis-card-margin',
        visibleOn: 'menu == "group1option1"',
        body: [
          {
            renderer: 'mis-alert',
            span: 24,
            title: '24格',
            description: '这是一个占24格的Alert',
            closeText: '知道了',
            showIcon: true,
            type: 'success',
          },
          {
            renderer: 'mis-alert',
            span: 12,
            title: '12格',
            description: '这是一个占12格的Alert',
            showIcon: true,
            type: 'error',
          },
          {
            renderer: 'mis-alert',
            span: 12,
            title: '12格',
            description: '这是一个占12格的Alert',
            showIcon: true,
            type: 'error',
          },
          {
            renderer: 'mis-alert',
            span: 24,
            title: '24格',
            description: '这是一个占24格的Alert',
            closeText: '知道了',
            showIcon: true,
            type: 'info',
          },
          {
            renderer: 'mis-alert',
            span: 6,
            title: '6格',
            description: '这是一个占6格的Alert',
            closeText: '知道了',
            showIcon: true,
            type: 'warning',
          },
          {
            renderer: 'mis-alert',
            span: 6,
            title: '6格',
            description: '这是一个占6格的Alert',
            closeText: '知道了',
            showIcon: true,
            type: 'error',
          },
          {
            renderer: 'mis-alert',
            span: 6,
            title: '6格',
            description: '这是一个占6格的Alert',
            closeText: '知道了',
            showIcon: true,
            type: 'info',
          },
          {
            renderer: 'mis-alert',
            span: 6,
            title: '6格',
            description: '这是一个占6格的Alert',
            closeText: '知道了',
            showIcon: true,
          },
        ],
      },
    });
  },
  'GET /api/schema/validator': async ctx => {
    await sleep(500);

    ctx.restify({
      msg: 'success',
      code: 1000,
      data: {
        renderer: 'mis-form',
        name: 'form3',
        controls: [
          {
            renderer: 'mis-input',
            name: 'email3',
            label: '邮箱',
            value: '',
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
            name: 'age3',
            label: '年龄',
            value: '',
            rules: [{ required: true, message: '年龄不能为空' }],
          },
          {
            renderer: 'mis-button',
            text: '按钮',
          },
        ],
      },
    });
  },
};
