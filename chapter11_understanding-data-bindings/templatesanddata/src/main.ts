import Vue from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
// Vue.filter('currency', (value: number, places?: number): string => {
//   return new Intl.NumberFormat(
//     'en-US',
//     {
//       style: 'currency',
//       currency: 'USD',
//       minimumFractionDigits: places || 2,
//       maximumFractionDigits: places || 2
//     }
//   ).format(value);
// });

new Vue({
  render: (h) => h(App),
}).$mount('#app');
