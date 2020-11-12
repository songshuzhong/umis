const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
  'GET /': async ctx => {
    await ctx.render('index');
  },
  'GET /api/schema/visible': async ctx => {
    ctx.restify({
      code: 1000,
      msg: 'success',
      data: {
        renderer: 'mis-form',
        name: 'form1',
        api: 'http://localhost:3000/api/mis',
        controls: [
          {
            renderer: 'mis-input',
            name: 'input',
            label: '地址',
            value: 'mis',
            tip: '请填写地址',
            rules: [{ required: true, message: '地址不能为空' }],
          },
          {
            renderer: 'mis-checkbox',
            name: 'checkbox',
            type: 'button',
            label: '主食',
            value: ['1'],
            tip: '请选择主食',
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
            value: '1',
            tip: '需要餐具',
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
            tip: '开关',
          },
          {
            renderer: 'mis-combo',
            label: '联合 map',
            name: 'combomap',
            tip: '单个 联合 map',
            visibleOn: 'data.switchs === false',
            value: {
              combomap1: 111,
              combomap2: 222,
            },
            controls: [
              {
                renderer: 'mis-input',
                name: 'combomap1',
                label: '联合1',
                rules: [
                  {
                    required: true,
                    trigger: 'blur',
                    message: '单个 联合 map不能为空',
                  },
                ],
              },
              {
                renderer: 'mis-input',
                name: 'combomap2',
                label: '联合2',
                rules: [
                  {
                    required: true,
                    trigger: 'blur',
                    message: '单个 联合 map不能为空',
                  },
                ],
              },
            ],
          },
          {
            renderer: 'mis-combo',
            label: '联合list',
            name: 'combo',
            multiple: true,
            tip: '多个 combo 组合',
            value: [
              { combo1: 111, combo2: 222 },
              { combo1: 113, combo2: 223 },
            ],
            controls: [
              {
                renderer: 'mis-input',
                name: 'combo1',
                label: '联合属性1',
                rules: [{ required: true, message: '联合属性1不能为空' }],
              },
              {
                renderer: 'mis-input',
                name: 'combo2',
                label: '联合属性2',
                rules: [{ required: true, message: '联合属性2不能为空' }],
              },
            ],
          },
          {
            renderer: 'mis-upload',
            name: 'uploadtext',
            label: '上传文件',
            action: 'https://jsonplaceholder.typicode.com/posts',
            tip: '只能上传jpg/png文件，且不超过500kb',
          },
          {
            renderer: 'mis-button',
            text: '提交',
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
        api: 'http://dev.bendi.ad.weibo.com:3000/api/mis',
        controls: [
          {
            renderer: 'mis-html',
            html:
              '<h5>联系人：<%=data.sponser%></h5><h5>邮箱：<%=data.email3%></h5><h5>活动名称：<%=data.activename%></h5><h5>活动区域：<%=JSON.stringify(data.activearea)%></h5><h5>活动时间：<%=data.activetime%></h5>',
          },
          {
            renderer: 'mis-input',
            name: 'sponser',
            label: '联系人',
            tip: '联系姓名',
            value: '',
            rules: [{ required: true, message: '联系人不能为空' }],
          },
          {
            renderer: 'mis-input',
            name: 'email3',
            label: '邮箱',
            tip: '邮箱地址，字母数字下划线',
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
            name: 'activename',
            label: '活动名称',
            tip: '举办一场空前的活动',
            value: '',
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
            name: 'activearea',
            label: '活动区域',
            tip: '活动范围在全宇宙',
            value: '',
            visibleOn: 'delivery === true',
            options: [
              {
                text: '区域一',
                value: 'one',
              },
              {
                text: '区域二',
                value: 'two',
              },
            ],
            rules: [
              {
                required: true,
                message: '活动名称是必填项',
                trigger: 'change',
              },
            ],
          },
          {
            renderer: 'mis-datepicker',
            label: '活动时间',
            name: 'activetime',
            tip: '活动时间在32世纪初',
            value: '',
            rules: [
              {
                required: true,
                message: '活动名称是必填项',
                trigger: 'change',
              },
            ],
          },
          {
            renderer: 'mis-switch',
            label: '即时配送',
            tip: '快递邮寄',
            value: false,
            name: 'delivery',
          },
          {
            renderer: 'mis-button',
            text: '按钮',
          },
        ],
      },
    });
  },
  'GET /api/schema/tabs': async ctx => {
    await sleep(500);

    ctx.restify({
      msg: 'success',
      code: 1000,
      data: {
        renderer: 'mis-tabs',
        type: 'border-card',
        stretch: true,
        activeName: 'tabform',
        body: [
          {
            name: 'tabform',
            label: '卡片 CRUD',
            icon: 'el-icon-menu',
            body: {
              renderer: 'mis-cards',
              name: 'cards1',
              initApi: {
                url: '/api/pagelist',
                method: 'get',
              },
              span: 6,
              gutter: 20,
              shadow: 'hover',
              bodyStyle: { padding: '0' },
              classname: 'mis-card-margin',
              header: '<h4><%=data.name%></h4>',
              body: {
                renderer: 'mis-html',
                html:
                  '<h5>id：<%=data.id%></h5><h5>名称：<%=data.name%></h5><h5>地址：<%=data.address%></h5><h5>形状：<%=data.shape%></h5>',
              },
              footer: [
                {
                  renderer: 'mis-action',
                  text: '弹一个窗',
                  actionType: 'mis-dialog',
                  body: {
                    title: '我是可以无限弹窗的哦',
                    modal: false,
                    body: [
                      {
                        renderer: 'mis-image',
                        src:
                          'https://songshuzhong.github.io/visualizer/static/img/html5.png',
                      },
                    ],
                    footer: {
                      renderer: 'mis-action',
                      text: '点击查看详情',
                      actionType: 'mis-dialog',
                      body: {
                        title: '卡片详情',
                        modal: false,
                        appendToBody: true,
                        body: [
                          {
                            renderer: 'mis-html',
                            html:
                              '<h1>id：<%=data.id%></h1><h1>名称：<%=data.name%></h1><h1>地址：<%=data.address%></h1><h1>形状：<%=data.shape%></h1>',
                          },
                          {
                            renderer: 'mis-action',
                            text: '点击查看详情',
                            actionType: 'mis-dialog',
                            body: {
                              title: '又一个 dialog',
                              appendBody: true,
                              modal: false,
                              body: {
                                renderer: 'mis-html',
                                html: '<h1>又一个 dialog</h1>',
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            label: '表格CRUD',
            icon: 'el-icon-s-grid',
            body: [
              {
                renderer: 'mis-table',
                name: 'html',
                maxHeight: 600,
                initApi: {
                  url: '/api/pagelist',
                  method: 'get',
                },
                columns: [
                  {
                    name: 'name',
                    label: '姓名',
                    fixed: 'left',
                    width: 120,
                  },
                  {
                    name: 'pageIndex',
                    label: '当前页',
                    width: 120,
                  },
                  {
                    name: 'province',
                    label: ' 省份',
                    width: 120,
                  },
                  {
                    name: 'city',
                    label: '市区',
                    width: 120,
                  },
                  {
                    name: 'date',
                    label: '日期',
                    width: 120,
                  },
                  {
                    name: 'address',
                    label: '地址',
                    width: 120,
                  },
                  {
                    name: 'zip',
                    label: '邮编',
                    width: 120,
                  },
                  {
                    label: 'dropdown',
                    width: 120,
                    body: [
                      {
                        renderer: 'mis-dropdown',
                        text: '更多',
                        body: [
                          {
                            renderer: 'mis-action',
                            text: '百度一下',
                            size: 'mini',
                            actionType: 'mis-url',
                            type: 'text',
                            url: 'https://www.baidu.com?name=${name}',
                            blank: true,
                          },
                          {
                            renderer: 'mis-action',
                            text: 'ajax',
                            reload: 'html',
                            size: 'mini',
                            actionType: 'mis-ajax',
                            type: 'text',
                            actionApi: {
                              url: '/api/mis',
                              method: 'post',
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: 'action操作集合',
                    body: [
                      {
                        renderer: 'mis-action',
                        text: 'ajax',
                        reload: 'html',
                        size: 'mini',
                        actionType: 'mis-ajax',
                        actionApi: {
                          url: '/api/mis',
                          method: 'post',
                        },
                      },
                      {
                        renderer: 'mis-action',
                        text: '百度一下',
                        size: 'mini',
                        actionType: 'mis-url',
                        url: 'https://www.baidu.com?name=${name}',
                        blank: true,
                      },
                      {
                        renderer: 'mis-action',
                        text: '粘贴板',
                        size: 'mini',
                        actionType: 'mis-copy',
                        content: 'https://www.baidu.com?name=${name}',
                      },
                      {
                        renderer: 'mis-action',
                        text: '路由跳转',
                        size: 'mini',
                        actionType: 'mis-redirect',
                        url: '/visible',
                      },
                      {
                        renderer: 'mis-action',
                        text: '抽屉',
                        size: 'mini',
                        actionType: 'mis-drawer',
                        body: {
                          name: 'isEditor',
                          showClose: true,
                          size: '60%',
                          label: '编辑',
                          header: {
                            renderer: 'mis-html',
                            html:
                              '<h1 style="text-align: left; color: white;">编辑Schema</h1>',
                          },
                          body: [
                            {
                              renderer: 'mis-form',
                              name: 'form3',
                              api: 'http://localhost:3000/api/mis',
                              controls: [
                                {
                                  renderer: 'mis-input',
                                  name: 'name',
                                  label: '姓名',
                                },
                                {
                                  renderer: 'mis-input',
                                  name: 'address',
                                  label: '地址',
                                },
                                {
                                  renderer: 'mis-datepicker',
                                  name: 'date',
                                  label: '日期',
                                },
                                {
                                  renderer: 'mis-button',
                                  text: '更新',
                                },
                              ],
                            },
                          ],
                        },
                      },
                      {
                        renderer: 'mis-action',
                        text: '对话框',
                        size: 'mini',
                        actionType: 'mis-dialog',
                        body: {
                          title: '详情信息',
                          appendBody: true,
                          modal: false,
                          body: {
                            renderer: 'mis-html',
                            html:
                              '<h1><%=data.name%><%=data.date%><%=data.address%></h1>',
                          },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    });
  },
  'GET /api/schema/linkage': async ctx => {
    await sleep(500);

    ctx.restify({
      msg: 'success',
      code: 1000,
      data: {
        renderer: 'mis-tabs',
        stretch: true,
        activeName: 'formlink',
        body: [
          {
            name: 'switchlink',
            label: '开关-时间线联动',
            icon: 'el-icon-turn-off',
            body: [
              {
                renderer: 'mis-switch',
                name: 'reverse',
                activeText: '时间线倒序',
                inActiveText: '时间线正序',
                value: false,
                target: 'timeline',
              },
              {
                renderer: 'mis-card',
                body: {
                  renderer: 'mis-timeline',
                  name: 'timeline',
                  size: 'large',
                  type: 'primary',
                  initApi: {
                    url: '/api/pagelist',
                    method: 'get',
                  },
                  body: {
                    renderer: 'mis-card',
                    body: {
                      renderer: 'mis-html',
                      html: '<h1>支持使用图标</h1>',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'formlink',
            label: '表单-html联动',
            icon: 'el-icon-date',
            body: [
              {
                renderer: 'mis-form',
                name: 'linkageForm',
                target: 'linkageTarget',
                inline: true,
                controls: [
                  {
                    renderer: 'mis-input',
                    name: 'keywords',
                    label: '关键字',
                  },
                  {
                    renderer: 'mis-button',
                    name: 'submit',
                    text: '搜索',
                  },
                ],
              },
              {
                name: 'linkageTarget',
                renderer: 'mis-html',
                html:
                  '<h1>您输入的搜索关键词是：<span style="color: red;"><%=data.keywords ? data.keywords : ""%></span></h1>',
              },
            ],
          },
          {
            name: 'numberlink',
            label: '计数器联动',
            icon: 'el-icon-odometer',
            body: [
              {
                renderer: 'mis-number',
                name: 'percentage',
                target: 'progresstest',
              },
              {
                renderer: 'mis-progress',
                name: 'progresstest',
              },
            ],
          },
        ],
      },
    });
  },
};
