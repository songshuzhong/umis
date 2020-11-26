const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
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
};
