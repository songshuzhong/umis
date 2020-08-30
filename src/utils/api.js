import qs from 'qs';
import axios from 'axios';
import notification from 'element-ui/lib/notification';

const isCancel = axios.isCancel;
let apiFailSilent = false;
let apiMessageDuration = 5000;
let apiMessageOffset = 0;

function setApiFailSilent(isSilent) {
  apiFailSilent = isSilent;
}
function setApiMessageDuration(duration) {
  if (duration) {
    apiMessageDuration = duration;
  }
}
function setApiMessageOffset(offset) {
  apiMessageOffset = offset;
}
function getApiMessageDuration() {
  return apiMessageDuration;
}
function getApiMessageOffset() {
  return apiMessageOffset;
}

function getDefaultConfigs() {
  return {
    timeout: 10000,
    paramsSerializer: function(params) {
      return qs.stringify(params);
    },
    headers: {
      post: {
        'Content-Type': 'application/json',
      },
    },
  };
}
function showError(msg, apiName) {
  let errorMsg = '';
  if (apiName) {
    let errorSource = apiName + '错误';
    if (errorMsg) {
      errorMsg = errorSource + '，' + errorMsg;
    } else {
      errorMsg = errorSource;
    }
  }

  notification({
    title: msg,
    message: errorMsg || msg,
    type: 'error',
    dangerouslyUseHTMLString: true,
    duration: apiMessageDuration,
    offset: apiMessageOffset,
  });
}

function getErrorInfo(error) {
  let url = '';
  if (error.config) {
    url = error.config.url;
    if (error.config.params) {
      url += '?' + error.config.paramsSerializer(error.config.params);
    }
    if (!isExternalUrl(url)) {
      url = window.location.protocol + constructUrl(window.location.host, url);
    }
  }

  return {
    url: url,
    config: error.config,
  };
}

function successInterceptor(response, silent, apiName) {
  if (
    response &&
    response.data &&
    (response.data.code === 10000 ||
      response.data.code === 1000 ||
      response.data.code === 0)
  ) {
    return response.data;
  }
  if (!silent) {
    if (
      response &&
      response.data &&
      response.data.error &&
      Array.isArray(response.data.error) &&
      !response.data.message &&
      !response.data.error_message
    ) {
      const errors = [];
      response.data.error.forEach(error => {
        errors.push(error.error_message || error.message);
      });
      showError(errors.join('<br>'), apiName);
      return Promise.reject(response);
    }
    if (
      response &&
      response.data &&
      (response.data.message || response.data.error_message)
    ) {
      showError(response.data.error_message || response.data.message, apiName);
    } else {
      showError('接口错误，请重试', apiName);
    }
  }
  return Promise.reject(response);
}

function errorInterceptor(error, silent, apiName) {
  if (!silent) {
    if (error.response && error.response.status === 500) {
      showError('系统超时，请重试', apiName);
    } else if (
      error.code === 'ECONNABORTED' ||
      (error.response && error.response.status === 408)
    ) {
      showError('连接失败，请检查您的网络状况', apiName);
    } else {
      showError('网络超时，请重试', apiName);
    }
  }
  return Promise.reject(error);
}

function factory(baseUrl, configs, silent, noInterceptor) {
  let isSilent = silent;
  if (typeof silent === 'undefined') {
    isSilent = apiFailSilent;
  }
  const mergedConfigs = Object.assign({}, getDefaultConfigs(), configs || {});
  if (baseUrl) {
    mergedConfigs.baseURL = baseUrl;
  }
  if (!mergedConfigs.params) {
    mergedConfigs.params = {};
  }
  const instance = axios.create(mergedConfigs);

  if (noInterceptor) {
    return instance;
  }
  instance.interceptors.request.use(
    config => {
      if (!config.params) {
        config.params = {};
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    response => {
      return successInterceptor(response, isSilent, mergedConfigs.apiName);
    },
    error => {
      return errorInterceptor(error, isSilent, mergedConfigs.apiName);
    }
  );
  return instance;
}

let umisApi = null;
export default {
  factory: factory,
  cancelToken: axios.CancelToken,
  isCancel,
  slientApi() {
    if (!umisApi) {
      umisApi = factory(
        '/',
        {
          withCredentials: true,
        },
        true
      );
    }
    return umisApi;
  },
};
