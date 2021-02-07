const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
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
        'js-beautify': path.resolve(
          process.cwd(),
          'node_modules',
          'js-beautify'
        ),
        'vue3-echarts': path.resolve(
          process.cwd(),
          'node_modules',
          'vue3-echarts'
        ),
        vue: path.resolve(process.cwd(), 'node_modules', 'vue'),
      },
    },
    /*plugins: [
      new AutoDllPlugin({
        inject: true,
        filename: '[name]_[hash].js',
        path: './dll',
        entry: {
          vendor: [
            'vue',
            'vue-router',
            'element-plus',
            'core-js',
            'vue3-echarts',
            'js-beautify',
          ],
        },
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
          resources: './src/assets/styles/base/index.scss',
        })
        .end();
    });
    if (process.env.use_analyzer) {
      config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin);
    }
    config.resolve.alias
      .set('~utils', path.join(__dirname, 'src/utils'))
      .set('~assets', path.join(__dirname, 'src/assets'))
      .set('~modules', path.join(__dirname, 'src/modules'))
      .set('~components', path.join(__dirname, 'src/components'));
  },
  devServer: {
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
