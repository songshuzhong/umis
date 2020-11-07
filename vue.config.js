const path = require('path');
const glob = require('glob');
const fs = require('fs');
const manifestPlugin = require('webpack-manifest-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const elementExternals = require('./elementUIDependencies');
const dev = process.env.NODE_ENV !== 'production';
const publicPath = '';
const pages = {};
const rewrites = [];
const externals = {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue',
  },
  axios: 'axios',
  'vue-router': 'VueRouter',
  'element-ui': 'ELEMENT',
};

/*elementExternals.components.forEach(function(key) {
  externals[`element-ui/lib/${key}`] = `element-ui/lib/${key}`;
});*/

glob.sync('./src/pages/*.js').forEach(entry => {
  const filename = entry.replace(/(.*\/)*([^.]+).*/gi, '$2');
  rewrites.push({
    from: new RegExp('^/' + filename),
    to: `/pages/${filename}.html`,
  });
  let pageConfig;
  try {
    let fileContent = fs.readFileSync(
      `./src/modules/${filename}/index.json`,
      'utf-8'
    );
    pageConfig = JSON.parse(fileContent);
  } catch (e) {
    pageConfig = {};
  }
  pages[filename] = {
    entry,
    template: path.join(__dirname, '/src/template.html'),
    filename: `${filename}.html`,
    title: pageConfig.title || '',
    metas: pageConfig.metas || {},
    styles: dev ? [] : pageConfig.styles || [],
    scripts: dev ? [] : pageConfig.scripts || [],
    skeleton: pageConfig.skeleton || '',
    skeletonStyle: pageConfig.skeletonStyle || '',
    initData: JSON.stringify(pageConfig.initData || {}),
    favicon: pageConfig.icon || '',
    debug: dev
      ? `
       <script src="//cdn.bootcss.com/eruda/1.1.3/eruda.min.js"></script>
       <script>eruda.init();window.isDebug=true;</script>                `
      : '',
    minify: dev
      ? {}
      : {
          minifyJS: true,
          minifyCSS: true,
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
        },
  };
});

module.exports = {
  pages,
  publicPath: dev ? '' : publicPath,
  productionSourceMap: true,
  configureWebpack: {
    output: {
      filename: 'js/[name].[hash:6].js',
      chunkFilename: 'js/chunks/[name].[hash:6].js',
    },
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],
    },
    // externals: dev ? {} : externals,
    plugins: [new MonacoWebpackPlugin()],
  },
  transpileDependencies: ['vue-echarts', 'resize-detector'],
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: './src/assets/styles/index.scss',
        })
        .end();
    });

    config.plugin('manifest').use(manifestPlugin, [
      {
        fileName: 'manifest.json',
        publicPath: '/',
      },
    ]);
    config.resolve.alias
      .set('~utils', path.join(__dirname, 'src/utils'))
      .set('~assets', path.join(__dirname, 'src/assets'))
      .set('~modules', path.join(__dirname, 'src/modules'))
      .set('~components', path.join(__dirname, 'src/components'));
  },
  devServer: {
    hot: true,
    port: 8980,
    disableHostCheck: true,
    historyApiFallback: {
      rewrites: rewrites,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
};
