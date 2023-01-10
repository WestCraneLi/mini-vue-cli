// 开发环境

const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    open: true,
    hot: true,
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    // 定义全局变量
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_DEV: JSON.stringify('development'),
          // 这里可以定义你的环境变量
          // VUE_APP_URL: JSON.stringify('https://xxx.com')
        },
      },
    }),
    new ESLintPlugin({
      // 运行的时候自动帮你修复错误
      fix: true,
    }),
    new StylelintWebpackPlugin({
      context: 'src',
      // Stylelint的配置文件读取
      configFile: path.resolve(__dirname, '../stylelint.config.js'),
      // 检查的文件范围
      files: ['**/*.scss'],
    }),
  ],
});
