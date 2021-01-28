const json = [
  {
    renderer: 'mis-layout',
    classname: 'umis-website__container',
    body: [
      {
        renderer: 'mis-wrapper',
        classname: 'umis-website__nav-poppet',
        body: [
          {
            renderer: 'mis-wrapper',
            classname: 'umis-website__nav-wrapper',
            body: {
              renderer: 'mis-affix',
              body: {
                renderer: 'mis-menu',
                name: 'menu',
                router: true,
                collapse: false,
                mode: 'vertical',
                backgroundColor: '#3a3f51',
                textColor: '#fff',
                activeTextColor: '#ffd04b',
                defaultActive: 'users-crud',
                uniqueOpened: true,
                title: {
                  renderer: 'mis-html',
                  html:
                    '<div style="height: 59px; border-bottom: 1px solid #dcdfe6; color: white; text-align: center; line-height: 59px; font-size: 20px">UMIS</div>',
                },
                body: [],
              },
            },
          },
          {
            renderer: 'mis-wrapper',
            classname: 'umis-website__nav-poppet',
          },
        ],
      },
      {
        renderer: 'mis-layout',
        direction: 'vertical',
        body: [
          {
            renderer: 'mis-wrapper',
            body: [
              {
                renderer: 'mis-wrapper',
                classname: 'umis-website__header',
              },
              {
                renderer: 'mis-affix',
                body: {
                  renderer: 'mis-header',
                  classname: 'umis-website__header',
                  body: [
                    {
                      renderer: 'mis-switch',
                      name: 'collapse',
                      target: 'menu',
                      value: false,
                    },
                    {
                      renderer: 'mis-action',
                      text: '编辑器',
                      type: 'text',
                      actionType: 'mis-drawer',
                      body: {
                        name: 'isEditor',
                        showClose: true,
                        size: '80%',
                        label: '编辑',
                        classname: 'umis-website__drawer',
                        header: {
                          renderer: 'mis-html',
                          html:
                            '<div style="text-align: left; color: white;">编辑Schema</div>',
                        },
                        body: [
                          {
                            renderer: 'mis-editor',
                            name: 'editor',
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
          {
            renderer: 'mis-main',
            routerView: true,
            classname: 'umis-website__main',
            body: [],
          },
        ],
      },
    ],
  },
];

export default json;
