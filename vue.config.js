const path = require('path');
const glob = require('glob');
const fs = require('fs');
const manifestPlugin = require('webpack-manifest-plugin');
const HtmlRemoveWhitespacePlugin = require('html-remove-whitespace-plugin');
const dev = process.env.NODE_ENV !== 'production';
const publicPath = '';
const pages = {};
const rewrites = [];

glob.sync('./src/pages/*.js').forEach(entry => {
  const filename = entry.replace(/(.*\/)*([^.]+).*/gi, '$2');
  rewrites.push({
    from: new RegExp('^/' + filename),
    to: `/pages/${filename}.html`,
  });
  pages[filename] = {
    entry,
    template: path.join(__dirname, '/src/template.html'),
    favicon: path.join(__dirname, '/src/assets/imgs/favicon.png'),
    filename: `${filename}.html`,
    minify: {
      minimize: true,
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
      alias: {
        'element-ui': path.resolve(process.cwd(), 'node_modules', 'element-ui'),
        'core-js': path.resolve(process.cwd(), 'node_modules', 'core-js'),
        'vue-router': path.resolve(process.cwd(), 'node_modules', 'vue-router'),
        vue: path.resolve(process.cwd(), 'node_modules', 'vue'),
      },
    },
    plugins: [new HtmlRemoveWhitespacePlugin()],
  },
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
        target: 'http://localhost:1026',
        changeOrigin: true,
      },
    },
  },
};
