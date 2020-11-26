const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
  'GET /api/schema/tabs': async ctx => {
    await sleep(500);

    ctx.restify({
      msg: 'success',
      code: 1000,
      data: {
        renderer: 'mis-tabs',
        type: 'border-card',
        stretch: true,
        activeName: 'querycrud',
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
                          size: '40%',
                          label: '编辑',
                          direction: 'ltr',
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
          {
            label: '查询 CRUD',
            name: 'querycrud',
            icon: 'el-icon-search',
            body: [
              {
                renderer: 'mis-form',
                name: 'linkageForm',
                target: 'querytable',
                inline: true,
                silentLoading: true,
                initApi: {
                  method: 'get',
                  url: '/api/card/123456',
                },
                controls: [
                  {
                    renderer: 'mis-input',
                    name: 'name',
                    placeholder: ' 按姓名过滤',
                  },
                  {
                    renderer: 'mis-select',
                    name: 'sex',
                    placeholder: '按性别过滤',
                    options: [
                      {
                        value: '0',
                        text: '女',
                      },
                      {
                        value: '1',
                        text: '男',
                      },
                    ],
                  },
                  {
                    renderer: 'mis-button',
                    name: 'submit',
                    text: '搜索',
                  },
                ],
              },
              {
                renderer: 'mis-table',
                name: 'querytable',
                maxHeight: 600,
                initApi: {
                  url: '/api/pagelist?name=${name}&&sex=${sex}',
                  method: 'get',
                },
                initData: {
                  name: '',
                  sex: '',
                },
                columns: [
                  {
                    name: 'name',
                    label: '姓名',
                    fixed: 'left',
                  },
                  {
                    name: 'pageIndex',
                    label: '当前页',
                  },
                  {
                    name: 'province',
                    label: ' 省份',
                  },
                  {
                    name: 'city',
                    label: '市区',
                  },
                  {
                    name: 'date',
                    label: '日期',
                  },
                  {
                    name: 'address',
                    label: '地址',
                  },
                  {
                    name: 'zip',
                    label: '邮编',
                  },
                ],
              },
            ],
          },
          {
            label: '布局',
            name: 'grid',
            icon: 'el-icon-search',
            body: {
              renderer: 'mis-layout',
              direction: 'vertical',
              body: [
                {
                  renderer: 'mis-header',
                  classname: 'umis-layout__container__header',
                  body: [
                    {
                      renderer: 'mis-html',
                      html: 'Header',
                    },
                  ],
                },
                {
                  renderer: 'mis-layout',
                  direction: 'horizontal',
                  body: [
                    {
                      renderer: 'mis-aside',
                      classname: 'umis-layout__container__drawer',
                      body: [
                        {
                          renderer: 'mis-html',
                          html: 'mis-aside',
                        },
                      ],
                    },
                    {
                      renderer: 'mis-main',
                      body: [
                        {
                          renderer: 'mis-html',
                          html: 'mis-main',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    });
  },
};
