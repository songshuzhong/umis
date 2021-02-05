export default {
  renderer: 'mis-layout',
  classname: 'umis-website__container',
  name: 'umis-website__container',
  initData: {
    preview: false,
  },
  body: [
    {
      renderer: 'mis-wrapper',
      visibleOn: 'data.preview === false',
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
      visibleOn: 'data.preview === false',
    },
    {
      renderer: 'mis-layout',
      direction: 'vertical',
      body: [
        {
          renderer: 'mis-wrapper',
          visibleOn: 'data.preview === false',
          body: {
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
                  renderer: 'mis-switch',
                  name: 'preview',
                  target: 'umis-website__container',
                  hiddenOn: '1 === 1',
                },
                {
                  renderer: 'mis-action',
                  actionType: 'actions',
                  actions: [
                    {
                      renderer: 'mis-action',
                      type: 'icon',
                      icon: 'el-icon-view',
                      remoteComponent: 'preview',
                    },
                    {
                      renderer: 'mis-action',
                      type: 'icon',
                      icon: 'el-icon-edit',
                      actionType: 'mis-drawer',
                      body: {
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
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          },
        },
        {
          renderer: 'mis-wrapper',
          visibleOn: 'data.preview === true',
          classname: 'umis-website__goto-edit',
          body: {
            renderer: 'mis-action',
            remoteComponent: 'preview',
            type: 'icon',
            icon: 'el-icon-s-home',
          },
        },
        {
          renderer: 'mis-main',
          routerView: true,
          classname: 'umis-website__main',
        },
      ],
    },
  ],
};
