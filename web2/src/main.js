import Vue from 'vue';
import moment from 'moment';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.filter('formatDate', (value) => (value ? moment(String(value)).fromNow() : undefined));
Vue.filter('formatMinutes', (value) => (value ? moment.duration(parseInt(value, 10), 'minutes').humanize() : undefined));

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
