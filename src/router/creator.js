import MisSchema from '../../../umis-factory/src/components/container/schema';

const docSchemas = require.context('../schema/doc/', true, /[\w-]+\.js$/);
let routesList;

export default {
  menus: [],
  docMenuCreator(basename = '') {
    docSchemas.keys().forEach(filePath => {
      const schemaFile = docSchemas(filePath);
      const jsonSchema = schemaFile.default || {};
      let docItemName = filePath.replace(/(.*\/)*([^.]+).*/gi, '$2');
      routesList[routesList.length - 1].body.push({
        renderer: 'mis-menu-item',
        name: docItemName,
        title: jsonSchema.title || docItemName,
      });
      this.menus.push({
        path: `${basename}/${docItemName}`,
        component: MisSchema,
        props: {
          schema: jsonSchema,
          canSchemaUpdate: false,
          iProtal: false,
        },
        meta: {
          title: docItemName,
        },
      });
    });
    return this;
  },
  initRoute(item, basename) {
    return {
      path: `${basename}/${item.name}`,
      component: MisSchema,
      props: {
        url: item.schemaUrl,
      },
      meta: {
        title: item.title,
      },
    };
  },
  initDocMenu() {
    routesList.push({
      renderer: 'mis-menu-submenu',
      name: 'docs',
      title: '文档手册',
      icon: 'el-icon-takeaway-box',
      body: [],
    });
    return this;
  },
  dynamicMenuCreator(routes, basename = '') {
    routes.forEach(menu => {
      if (menu.renderer === 'mis-menu-submenu') {
        menu.body.forEach(submenu => {
          if (submenu.renderer === 'mis-menu-item-group') {
            submenu.body.forEach(group => {
              if (group.renderer === 'mis-menu-item' && group.schemaUrl) {
                const route = this.initRoute(group, basename);
                this.menus.unshift(route);
              } else if (
                submenu.renderer === 'mis-menu-item' &&
                submenu.schemaUrl
              ) {
                const route = this.initRoute(submenu, basename);
                this.menus.unshift(route);
              }
            });
          } else if (
            submenu.renderer === 'mis-menu-item' &&
            submenu.schemaUrl
          ) {
            const route = this.initRoute(submenu, basename);
            this.menus.unshift(route);
          }
        });
      } else if (menu.renderer === 'mis-menu-item' && menu.schemaUrl) {
        const route = this.initRoute(menu, basename);
        this.menus.unshift(route);
      }
    });
    routesList = routes;
    return this;
  },
};
