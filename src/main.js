import { add } from './tools/add.js';
import './styles/index.css';
import Vue from 'vue';
import App from './App.vue';

new Vue({
  render: h => h(App),
}).$mount('#app');
console.log(add(1, 2));
console.log('我是main.js');
