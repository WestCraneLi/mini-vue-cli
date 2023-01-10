const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/chunk-[contenthash].js',
    clean: true,
  },
  resolve: {
    // 路径别名
    alias: {
      '@': path.resolve('./src'),
      assets: '~/assets',
      tools: '~/tools',
    },
    // 引入文件时省略后缀
    extensions: ['.js', '.ts', '.less', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.(css|s[cs]ss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: 'asset',
        parser: {
          // 转base64的条件
          dataUrlCondition: {
            maxSize: 10 * 1024, // 25kb
          },
        },
        generator: {
          // 打包到 dist/image 文件下
          filename: 'images/[contenthash][ext][query]',
        },
      },
      {
        // 匹配js后缀文件
        test: /\.js$/,
        // 排除node_modules中的js
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/chunk-[contenthash].css',
      ignoreOrder: true,
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    port: 8080,
    open: true,
  },
};
