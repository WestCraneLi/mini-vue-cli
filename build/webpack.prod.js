const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const webpack = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',
  devtool: 'nosources-source-map',
  plugins: [
    // 定义全局变量
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_DEV: JSON.stringify('prodction'),
          // 这里可以定义你的环境变量
          // VUE_APP_URL: JSON.stringify('https://xxx.com')
        },
      },
    }),
    // gzip
    new CompressionPlugin({
      algorithm: 'gzip',
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // 去重压缩css
      new TerserPlugin({
        // 压缩JS代码
        terserOptions: {
          compress: {
            drop_console: true, // 去除console
          },
        },
      }), // 压缩JavaScript
      new BundleAnalyzerPlugin(),
    ],
  },
});
