const json = [
  {
    renderer: 'mis-layout',
    classname: 'umis-layout__container',
    iSchemaUpdate: false,
    body: [
      {
        renderer: 'mis-menu',
        name: 'menu',
        router: true,
        collapse: false,
        mode: 'vertical',
        defaultActive: 'option1',
        backgroundColor: '#545c64',
        textColor: '#fff',
        activeTextColor: '#ffd04b',
        classname: 'umis-layout__container__aside__menu',
        title: {
          renderer: 'mis-html',
          html:
            '<div style="height: 56px; color: white; text-align: center; line-height: 56px; font-size: 20px"><i class="el-icon-s-promotion" /><span style="margin-left: 3px">UMIS</span></div>',
        },
        body: [
          {
            renderer: 'mis-submenu',
            name: 'submenu',
            icon: 'el-icon-menu',
            title: '组件',
            index: 'submenu',
            body: [
              {
                renderer: 'mis-menu-item-group',
                body: [
                  {
                    renderer: 'mis-menu-item',
                    index: 'visible',
                    name: 'visible',
                    label: '显隐性联动',
                  },
                  {
                    renderer: 'mis-menu-item',
                    index: 'reactive',
                    name: 'reactive',
                    label: '可用性联动',
                  },
                  {
                    renderer: 'mis-menu-item',
                    index: 'validator',
                    name: 'validator',
                    label: '表单验证',
                  },
                  {
                    renderer: 'mis-menu-item',
                    index: 'grid',
                    name: 'grid',
                    label: '栅栏',
                  },
                  {
                    renderer: 'mis-menu-item',
                    name: 'cards',
                    index: 'cards',
                    label: '卡片列表',
                  },
                  {
                    renderer: 'mis-menu-item',
                    name: 'tabs',
                    index: 'tabs',
                    label: '选项卡',
                  },
                  {
                    renderer: 'mis-menu-item',
                    name: 'linkage',
                    index: 'linkage',
                    label: ' 组件联动',
                  },
                ],
              },
            ],
          },
          {
            renderer: 'mis-submenu',
            name: 'components',
            index: 'components',
            icon: 'el-icon-notebook-1',
            title: '文档',
            body: [],
          },
          {
            renderer: 'mis-submenu',
            icon: 'el-icon-setting',
            title: '系统',
            body: [
              {
                renderer: 'mis-menu-item-group',
                body: [
                  {
                    renderer: 'mis-menu-item',
                    index: 'setting',
                    name: 'setting',
                    label: '全局配置',
                  },
                  {
                    renderer: 'mis-menu-item',
                    index: 'authority',
                    name: 'authority',
                    label: '权限配置',
                  },
                ],
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
                label: '编辑',
                classname: 'umis-layout__container__drawer',
                header: {
                  renderer: 'mis-html',
                  html:
                    '<h1 style="text-align: left; color: white;">编辑Schema</h1>',
                },
                body: [
                  {
                    renderer: 'mis-monaco',
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
            routerView: true,
            body: [],
          },
        ],
      },
    ],
  },
];

export default json;
