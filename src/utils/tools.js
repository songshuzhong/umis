import { template } from 'lodash';

const getRenderedTpl = (tpl, data) => {
  const compiled = template(tpl);
  const html = compiled(data);

  return html;
};

const onExpressionEval = (expression, data) => {
  const fn = new Function('data', `with(data) { return !!(${expression}) }`);
  try {
    return fn.call(data, data);
  } catch (e) {
    return false;
  }
};

const isArray = array => {
  return Object.prototype.toString.call(array) === '[object Array]';
};

export { getRenderedTpl, onExpressionEval, isArray };
