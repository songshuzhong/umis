import template from 'lodash.template';

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

export { getRenderedTpl, onExpressionEval };
