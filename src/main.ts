// global styles
import './styles.scss';

import './declarations';

import Vue from 'vue';
import App from './App.vue';

const v = new Vue({
  el: '#app',
  render: (h: any) => h(App)
})
