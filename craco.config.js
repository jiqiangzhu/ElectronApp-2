const CracoLessPlugin = require('craco-less');
const path = require('path');
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
  webpack: {
    alias: {
      '@localUtils': pathResolve('src/utils'),
      '@': pathResolve('src'),
      '~': pathResolve('.'),
      '@redux': pathResolve('src/redux'),
    },
  },
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', style: true }],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
    ],
  },
  devServer: {
    port: '3001',
    progress: true, //打包进度
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#00CED1',
              '@body-background': 'transparent',
              '@layout-body-background': 'transparent',
              '@layout-header-background': 'transparent',
              '@layout-footer-background': 'transparent',
              '@component-background': 'transparent',
              '@text-color': '#FFFFFF',
              '@menu-item-active-bg': '#4B6E8F',
              '@tooltip-bg': '#87d068',
              '@modal-footer-bg': 'rgb(69, 71, 71)',
              '@list-item-padding': '15',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],

  devtool: 'eval-source-map',
  // "homepage": "./"
};
