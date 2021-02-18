import path from 'path';
import MisSchema from '../../../umis-factory/src/components/container/schema';

const docSchemas = require.context('../schema/doc/', true, /[\w-]+\.js$/);
let routesList;

export default {
  menus: [],
  docMenuCreator(basename = '') {
    const dirnames = {};
    let dirname;
    docSchemas.keys().forEach(filePath => {
      dirname = path.dirname(filePath).replace('./', '');
      if (!dirnames[dirname]) {
        dirnames[dirname] = [];
      }
      if (!filePath.includes('props.js')) {
        const schemaFile = docSchemas(filePath);
        const jsonSchema = schemaFile.default || {};
        dirnames[dirname].push({
          renderer: 'mis-card',
          classname: 'umis-website__simple-demo',
          body: jsonSchema,
          footer: {
            renderer: 'mis-editor',
            classname: 'umis-website__code-viwer',
            schema: jsonSchema,
          },
        });
      }
    });
    for (const docItemName in dirnames) {
      if (dirnames.hasOwnProperty(docItemName)) {
        dirname = `./${docItemName}/props.js`;
        if (docSchemas(dirname).default) {
          dirnames[docItemName].push(docSchemas(dirname).default);
        }
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
