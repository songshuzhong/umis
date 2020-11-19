import template from 'lodash.template';

const getRenderedTpl = (tpl, data = {}) => {
  const compiled = template(tpl);
  const html = compiled({ data });

  return html;
};

const getCompiledUrl = (tpl, data = {}) => {
  const compiled = template(tpl);
  const str = compiled(data);

  return str;
};

const getCompiledParams = (params, data = {}, method) => {
  let compiledParams = {};

  if (params) {
    const compiled = template(JSON.stringify(params));
    compiledParams = JSON.parse(compiled(data));
  }

  return compiledParams;
};

const onExpressionEval = (expression, data) => {
  const fn = new Function('data', `with(data) { return !!(${expression}) }`);
  try {
    return fn.call(data, data);
  } catch (e) {
    return false;
  }
};

const json2FormData = (isFormData, data, invisibleField = [], target) => {
  let formData;
  if (isFormData && !target) {
    formData = new FormData();
    for (let name in data) {
      if (data.hasOwnProperty(name) && !invisibleField.includes(name))
        formData.append(name, data[name]);
    }
  } else {
    formData = {};
    for (let name in data) {
      if (data.hasOwnProperty(name) && !invisibleField.includes(name))
        formData[name] = data[name];
    }
  }
  return formData;
};

const saveInitFormType = (ctx, isFormData) => {
  ctx.$umisConfig.isFormData = isFormData;
};

const saveInitStyle = (ctx, style) => {
  try {
    let ele = document.getElementById('umis-setting-style');

    if (!ele) {
      ele = document.createElement('style');
      ele.id = 'umis-setting-style';
      document.head.appendChild(ele);
    }
    ele.innerHTML = style;
    ctx.$notice({
      type: 'success',
      title: '通知',
      message: '保存成功！',
    });
  } catch (e) {
    ctx.$notice({
      type: 'error',
      title: '警告',
      message: e.toString(),
    });
  }
};

export {
  getRenderedTpl,
  getCompiledUrl,
  getCompiledParams,
  onExpressionEval,
  json2FormData,
  saveInitStyle,
  saveInitFormType,
};
