# umis

## 项目简介

visualize 可视化布局系统封装了丰富的 Bootstrap3UI 控件和 ECharts 图表集。开发者在该系统下可直接通过鼠标拖拽的方式构建 web 页面，也可以进入编辑区对代码进行编辑以实现页面的自定义展示。

## 项目结构如下

> a vue + elementui + webpack project

```
├─config
├─node_modules
├─server
│  ├─db
│  ├─router
│  ├─service
│  └─utils
├─static
│  ├─bower_components
│  ├─cs
│  ├─img
│  └─js
└─views
```

## 启动手册

```bash
# install dependencies
npm install
bower install

# serve with hot reload at localhost:8080
nodemon --debug --inspect ./server/app.js

# build for production with minification
node ./server/app.js
```

## 更新日志

```
 Version v0.0.1
 User sshuzhong@outlook.com
 ------------------------------------------------------------
 Date         Author          Version            Description
 ------------------------------------------------------------
 2018年8月9日 songshuzhong    v0.0.1            修复组件通信
```
