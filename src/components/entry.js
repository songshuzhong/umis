import Vue from 'vue';

const requireComponent = require.context('./umis', true, /[\w-]+\.vue$/);
const misComponents = [];

requireComponent.keys().forEach(filePath => {
  const componentConfig = requireComponent(filePath);
  let componentName = filePath.replace(/(.*\/)*([^.]+).*/gi, '$2');
  misComponents.push(`mis-${componentName}`);

  componentName = componentName
    .split('-')
    .map(kebab => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    .join('');

  Vue.component(
    `Mis${componentName}`,
    componentConfig.default || componentConfig
  );
});

Vue.prototype.$misComponents = misComponents;
