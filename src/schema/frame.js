const json = [
  {
    renderer: 'mis-layout',
    classname: 'umis-website__container',
    body: [
      {
        renderer: 'mis-wrapper',
        classname: 'umis-website__nav-fixed',
        body: {
          renderer: 'mis-menu',
          name: 'umis-website-nav',
          router: true,
          mode: 'vertical',
          backgroundColor: '#3a3f51',
          textColor: '#fff',
          activeTextColor: '#ffd04b',
          defaultActive: 'users-crud',
          target: 'umis-website__nav-poppet',
          title: {
            renderer: 'mis-html',
            html: '<div class="umis-website__header__logo">UMIS</div>',
          },
          body: [],
        },
      },
      {
        renderer: 'mis-aside',
        name: 'umis-website__nav-poppet',
        classname: 'umis-website__nav-poppet',
        initData: {
          width: 200,
        },
      },
      {
        renderer: 'mis-layout',
        direction: 'vertical',
        body: [
          {
            renderer: 'mis-wrapper',
            body: [
              {
                renderer: 'mis-affix',
                zIndex: 1000,
                body: {
                  renderer: 'mis-header',
                  classname: 'umis-website__header',
                  body: [
                    {
                      renderer: 'mis-switch',
                      name: 'collapse',
                      target: 'umis-website-nav',
                    },
                    {
                      renderer: 'mis-action',
                      text: '编辑器',
                      type: 'text',
                      actionType: 'mis-drawer',
                      body: {
                        name: 'isEditor',
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
