const json = [
  {
    renderer: 'mis-layout',
    classname: 'umis-layout__container',
    initApi: {
      url: 'http://dev.bendi.ad.weibo.com:3000/api/list/123/500',
      method: 'post',
    },
    body: [
      {
        renderer: 'mis-aside',
        collapse: true,
        classname: 'umis-layout__container__aside',
        body: [
          {
            renderer: 'mis-menu',
            name: 'menu',
            title: {
              renderer: 'mis-html',
              html:
                '<div style="height: 56px; color: white; text-align: center; line-height: 56px; font-size: 20px"><i class="el-icon-s-promotion" /><span style="margin-left: 3px">UMIS</span></div>',
            },
            mode: 'vertical',
            defaultActive: 'option1',
            backgroundColor: '#545c64',
            textColor: '#fff',
            activeTextColor: '#ffd04b',
            classname: 'umis-layout__container__aside__menu',
            body: [
              {
                renderer: 'mis-submenu',
                name: 'submenu',
                icon: 'el-icon-menu',
                title: '菜单',
                body: [
                  {
                    renderer: 'mis-menu-item',
                    name: 'option1',
                    label: '显隐性联动',
                  },
                  {
                    renderer: 'mis-menu-item',
                    name: 'option2',
                    label: '可用性联动',
                  },
                  {
                    renderer: 'mis-menu-item',
                    name: 'option3',
                    label: '表单验证',
                  },
                  {
                    renderer: 'mis-menu-item',
                    name: 'group1option1',
                    label: '栅栏',
                  },
                  {
                    renderer: 'mis-menu-item',
                    name: 'group1option2',
                    label: '卡片列表',
                  },
                ],
              },
              {
                renderer: 'mis-submenu',
                name: 'components',
                icon: 'el-icon-notebook-1',
                title: '属性',
                body: [],
              },
            ],
          },
        ],
      },
      {
        renderer: 'mis-layout',
        direction: 'vertical',
        body: [
          {
            renderer: 'mis-header',
            classname: 'umis-layout__container__header',
            body: [
              {
                renderer: 'mis-drawer',
                name: 'isEditor',
                showClose: true,
                size: '60%',
                classname: 'umis-layout__container__drawer',
                title: {
                  renderer: 'mis-html',
                  html:
                    '<h1 style="text-align: left; color: white;">编辑Schema</h1>',
                },
                label: '编辑',
                body: [
                  {
                    renderer: 'mis-editor',
                    name: 'editor',
                    footer: [
                      {
                        renderer: 'mis-button',
                        hasAfter: false,
                        text: '保存',
                      },
                      {
                        renderer: 'mis-button',
                        hasAfter: true,
                        text: '保存并关闭',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            renderer: 'mis-main',
            body: [
              {
                renderer: 'mis-form',
                name: 'form1',
                api: 'http://dev.bendi.ad.weibo.com:3000/api/mis',
                visibleOn: 'menu == "option1"',
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
              {
                renderer: 'mis-form',
                name: 'form2',
                visibleOn: 'menu == "option2"',
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
              {
                renderer: 'mis-form',
                name: 'form3',
                visibleOn: 'menu == "option3"',
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
              {
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
              {
                renderer: 'mis-cards',
                name: 'cards1',
                initApi: '/api/pagelist/1/17',
                span: 6,
                gutter: 20,
                shadow: 'hover',
                bodyStyle: { padding: '0' },
                classname: 'mis-card-margin',
                visibleOn: 'menu == "group1option2"',
                header: '<h4><%=name%></h4>',
                footer: [
                  {
                    renderer: 'mis-action',
                    text: '弹一个窗',
                    actionType: 'mis-dialog',
                    body: {
                      renderer: 'mis-dialog',
                      title: 'this is mis-action',
                      appendToBody: true,
                      body: {
                        renderer: 'mis-action',
                        text: '再弹一个窗',
                        actionType: 'mis-dialog',
                        body: {
                          renderer: 'mis-dialog',
                          title: 'this is mis-action',
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
            ],
          },
        ],
      },
    ],
  },
];

export default json;
