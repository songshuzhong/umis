const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
  'GET /api/schema/linkage': async ctx => {
    await sleep(500);

    ctx.restify({
      msg: 'success',
      code: 1000,
      data: {
        renderer: 'mis-tabs',
        stretch: true,
        activeName: 'form2formlink',
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
                target: 'linkageTarget?keywords=${keywords}',
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
          {
            name: 'stepslink',
            label: '步骤条联动',
            icon: 'el-icon-date',
            body: [
              {
                renderer: 'mis-number',
                name: 'active',
                target: 'stepstest',
              },
              {
                renderer: 'mis-divider',
              },
              {
                renderer: 'mis-steps',
                name: 'stepstest',
                active: 1,
                body: [
                  {
                    title: '步骤1',
                    icon: 'el-icon-edit',
                  },
                  {
                    title: '步骤2',
                    icon: 'el-icon-upload',
                  },
                  {
                    title: '步骤3',
                    icon: 'el-icon-picture',
                  },
                ],
              },
            ],
          },
          {
            name: 'form2formlink',
            label: '表单-表单联动',
            icon: 'el-icon-share',
            body: [
              {
                renderer: 'mis-form',
                name: 'form2formSource',
                target: 'form2formTarget?list=${*}',
                inline: true,
                controls: [
                  {
                    renderer: 'mis-input',
                    name: 'username',
                    label: ' 姓名',
                  },
                  {
                    renderer: 'mis-input',
                    name: 'age',
                    label: '  年龄',
                  },
                  {
                    renderer: 'mis-button',
                    name: 'submit',
                    text: '添加',
                  },
                ],
              },
              {
                renderer: 'mis-form',
                name: 'form2formTarget',
                controls: [
                  {
                    renderer: 'mis-combo',
                    label: '列表',
                    name: 'list',
                    controls: [
                      {
                        renderer: 'mis-html',
                        html: '<span><%=data.username%></span>',
                      },
                      {
                        renderer: 'mis-html',
                        html: '<span><%=data.age%></span>',
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
};
