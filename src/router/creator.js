import path from 'path';
import MisSchema from '../../../umis-factory/src/components/container/schema';

const docSchemas = require.context('../schema/doc/', true, /[\w-]+\.js$/);
let routesList;

export default {
  menus: [],
  docMenuCreator(basename = '') {
    const dirnames = {};
    docSchemas.keys().forEach(filePath => {
      const dirname = path.dirname(filePath).replace('./', '');
      if (!dirnames[dirname]) {
        dirnames[dirname] = [];
      } else {
        const schemaFile = docSchemas(filePath);
        const jsonSchema = schemaFile.default || {};
        dirnames[dirname].push({
          renderer: 'mis-card',
          classname: 'umis-website__simple-demo',
          body: jsonSchema,
          footer: {
            renderer: 'mis-editor',
            schema: jsonSchema,
            classname: 'umis-website__code-viwer',
          },
        });
      }
    });
    for (const docItemName in dirnames) {
      if (dirnames.hasOwnProperty(docItemName)) {
        routesList[routesList.length - 1].body.push({
          renderer: 'mis-menu-item',
          name: docItemName,
          title: dirnames[docItemName].title || docItemName,
        });
        this.menus.push({
          path: `${basename}/${docItemName}`,
          component: MisSchema,
          props: {
            schema: dirnames[docItemName],
            canSchemaUpdate: false,
            iProtal: false,
          },
          meta: {
            title: docItemName,
          },
        });
      }
    }
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
