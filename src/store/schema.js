const json = [
  {
    renderer: 'mis-layout',
    classname: 'umis-layout__container',
    body: [
      {
        renderer: 'mis-aside',
        collapse: true,
        classname: 'umis-layout__container__aside',
        body: [
          {
            renderer: 'mis-menu',
            name: 'menu',
            label: '菜单',
            icon: 'el-icon-location',
            mode: 'vertical',
            defaultActive: 'option1',
            backgroundColor: '#545c64',
            textColor: '#fff',
            activeTextColor: '#ffd04b',
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
                title: {
                  renderer: 'mis-html',
                  html: '<h1 style="color: red">编辑Schema</h1>',
                },
                label: '编辑',
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
                header: '<h2><%=name%></h2>',
                footer: [
                  {
                    renderer: 'mis-dialog',
                    body: [
                      {
                        renderer: 'mis-html',
                        html: '<h2><%=name%></h2>',
                      },
                    ],
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
