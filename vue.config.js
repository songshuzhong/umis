const path = require('path');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const AutoDllPlugin = require('autodll-webpack-plugin');
const dev = process.env.NODE_ENV !== 'production';
const publicPath = '';

module.exports = {
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
        'element-plus': path.resolve(
          process.cwd(),
          'node_modules',
          'element-plus'
        ),
        'core-js': path.resolve(process.cwd(), 'node_modules', 'core-js'),
        'vue-router': path.resolve(process.cwd(), 'node_modules', 'vue-router'),
        vue: path.resolve(process.cwd(), 'node_modules', 'vue'),
      },
    },
    plugins: [
      new AutoDllPlugin({
        inject: true,
        debug: true,
        filename: '[name]_[hash].js',
        path: './public/dll',
        entry: {
          vendor: ['vue', 'vue-router', 'element-plus', 'core-js'],
        },
      }),
    ],
    /*plugins: [
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require('./public/vendor/vendor-manifest.json'),
      }),
      new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: path.resolve(__dirname, './public/vendor/!*.js'),
        // dll 引用路径
        publicPath: './vendor',
        // dll最终输出的目录
        outputPath: './vendor',
      }),
    ],*/
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
    proxy: {
      '/api': {
        target: 'http://localhost:1026',
        changeOrigin: true,
      },
    },
  },
};
