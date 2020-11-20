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
            renderer: 'mis-static',
          },
          {
            renderer: 'mis-input',
            name: 'adress',
            label: '地址',
            value: 'mis',
            tip: '请填写地址',
            rules: [{ required: true, message: '地址不能为空' }],
          },
          {
            renderer: 'mis-checkbox',
            name: 'food',
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
            renderer: 'mis-datepicker',
            name: 'date',
            label: '日期',
            tip: '请选择派送日期',
            hiddenOn: 'data.select2.length > 1',
            transition: 'el-zoom-in-top',
          },
          {
            renderer: 'mis-select',
            name: 'select2',
            label: '口味',
            disabledOn: 'data.switchs === false',
            tip: '请选择口味',
            options: [
              {
                value: 'sweet',
                text: '鲜甜味',
              },
              {
                value: 'spicy',
                text: '麻辣味',
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
            transition: 'el-zoom-in-center',
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
              gutter: 20,
              shadow: 'hover',
              bodyStyle: { padding: '0' },
              classname: 'mis-card-margin',
              header:
                '<div style="font-size: 14px"><%=data.name%></div style="font-size: 14px">',
              body: {
                renderer: 'mis-html',
                html:
                  '<div style="font-size: 10px"><p>id：<%=data.id%></p><p>名称：<%=data.name%></p><p>地址：<%=data.address%></p><p>形状：<%=data.shape%></p></div>',
              },
              footer: [
                {
                  renderer: 'mis-action',
                  text: '编辑',
                  type: 'text',
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
                {
                  renderer: 'mis-action',
                  text: '删除',
                  type: 'text',
                  actionType: 'mis-ajax',
                  actionApi: {
                    url: '/api/mis',
                    method: 'post',
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
                            confirmTitle: '你离开吗？',
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
                        confirmTitle: '你确定复制吗？',
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
                              '<div style="text-align: left; color: white;">编辑Schema</div>',
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
                            renderer: 'mis-service',
                            initApi: {
                              url: '/api/pagelist',
                              method: 'get',
                              params: {
                                name: '${name}',
                                address: '${address}',
                              },
                            },
                            body: {
                              renderer: 'mis-html',
                              html:
                                '<div><%=data.name%><%=data.date%><%=data.address%></div>',
                            },
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
        activeName: 'switchlink',
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
                renderer: 'mis-divider',
                text: '分割割割割割割割割割割线',
              },
              {
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
                  shadow: 'hover',
                  body: [
                    {
                      renderer: 'mis-mapping',
                      value: 1,
                      map: {
                        '0': "<span class='el-icon-wind-power'> 大风</span>",
                        '1': "<span class='el-icon-light-rain'> 雨天</span>",
                        '2': "<span class='el-icon-sunny'> 晴天</span>",
                        '3':
                          "<span class='el-icon-cloudy-and-sunny'> 多云</span>",
                        '4': "<span class='el-icon-lightning'>雷雨</span>",
                        '5': '其他：${type}',
                      },
                    },
                    {
                      renderer: 'mis-mapping',
                      value: 1,
                      map: {
                        '0': '开心',
                        '1': '沮丧',
                        '2': '兴奋',
                        '3': '难过',
                        '4': '发呆',
                        '5': '莫名其妙',
                      },
                    },
                  ],
                },
              },
            ],
          },
          {
            name: 'carousellink',
            label: '轮播图联动',
            icon: 'el-icon-data-board',
            body: [
              {
                renderer: 'mis-carousel',
                type: 'card',
                body: [
                  {
                    renderer: 'mis-image',
                    fit: 'contain',
                    src:
                      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                  },
                  {
                    renderer: 'mis-html',
                    html:
                      '<div style="width: 100%; height: 300px; background: #e3e3e3; text-align: center; line-height: 300px;">carousel data1</div>',
                  },
                  {
                    renderer: 'mis-service',
                    interval: 5000,
                    slientLoading: true,
                    initApi: {
                      method: 'get',
                      url: '/api/card/123456',
                    },
                    body: [
                      {
                        renderer: 'mis-number',
                        name: 'percentage',
                        target: 'progresstest',
                      },
                      {
                        renderer: 'mis-progress',
                        name: 'progresstest',
                        status: 'exception',
                        textInside: true,
                      },
                    ],
                  },
                  {
                    renderer: 'mis-image',
                    fit: 'contain',
                    src:
                      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                  },
                  {
                    renderer: 'mis-html',
                    html:
                      '<div style="width: 100%; height: 300px; background: #99a9bf; text-align: center; line-height: 300px;">carousel data3</div>',
                  },
                ],
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
                initApi: {
                  method: 'get',
                  url: '/api/card/123456',
                },
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
            keepAlive: false,
            body: {
              renderer: 'mis-service',
              interval: 5000,
              slientLoading: true,
              initApi: {
                method: 'get',
                url: '/api/card/123456',
              },
              body: [
                {
                  renderer: 'mis-number',
                  name: 'percentage',
                  target: 'progresstest',
                },
                {
                  renderer: 'mis-divider',
                  text: '分割割割割割割割割割割线',
                },
                {
                  renderer: 'mis-progress',
                  name: 'progresstest',
                  status: 'exception',
                  textInside: true,
                },
              ],
            },
          },
          {
            name: 'animationlink',
            label: '动画联动',
            icon: 'el-icon-loading',
            body: [
              {
                renderer: 'mis-switch',
                name: 'animation',
                activeText: '出现',
                inActiveText: '消失',
                value: false,
                target: 'animationtest',
              },
              {
                renderer: 'mis-divider',
                text: '分割割割割割割割割割割线',
              },
              {
                renderer: 'mis-service',
                initApi: {
                  method: 'get',
                  url: '/api/card/123456',
                },
                body: {
                  renderer: 'mis-card',
                  name: 'animationtest',
                  visibleOn: 'data.animation === true',
                  transition: 'el-zoom-in-top',
                  body: {
                    renderer: 'mis-image',
                    src:
                      'https://songshuzhong.github.io/visualizer/static/img/html5.png',
                  },
                },
              },
            ],
          },
          {
            name: 'collapselink',
            label: '手风琴联动',
            icon: 'el-icon-bank-card',
            body: {
              renderer: 'mis-collapse',
              value: 'item1',
              body: [
                {
                  renderer: 'mis-html',
                  title: '一致性 Consistency',
                  name: 'item1',
                  html:
                    '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。',
                },
                {
                  renderer: 'mis-html',
                  title: '反馈 Feedback',
                  name: 'item2',
                  html:
                    '页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。',
                },
                {
                  renderer: 'mis-html',
                  title: '效率 Efficiency',
                  name: 'item3',
                  html: '简化流程：设计简洁直观的操作流程；',
                },
              ],
            },
          },
        ],
      },
    });
  },
};
