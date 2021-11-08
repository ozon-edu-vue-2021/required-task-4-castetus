import Vue from 'vue';
import App from './App.vue';
// import { elWidth } from './mixins.js';

Vue.config.productionTip = false;

new Vue({
  // mixins: [elWidth],
  render: (h) => h(App),
}).$mount('#app');
