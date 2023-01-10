// .eslintrc.js

module.exports = {
  // 不往父级查找
  root: true,
  // 环境配置
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  // 拓展规则
  extends: 'airbnb-base',
  // 自定义规则，会覆盖一部分拓展规则
  // 具体这些参数代表什么规则，可以去eslint官网看
  rules: {
    'no-console': 'warn',
    semi: 'off',
    'eol-last': 'off',
    'no-new': 'off',
    'arrow-parens': 'off',
    'import/no-extraneous-dependencies': 'off',
    'comma-danger': 'off',
    'no-useless-escape': 'off',
    'prettier/prettier': 'error',
    'linebreak-style': ['error','window']
  },
  // 语言风格
  parserOptions: {
    // 支持import
    sourceType: 'module',
  },
  // 拓展插件
  plugins: ['prettier'],
};
