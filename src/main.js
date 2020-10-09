import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './_router/routes'

import Admin from './layouts/Admin-layout';
import Customer from './layouts/Customer-layout';
// register jw pagination component globally
import JwPagination from 'jw-vue-pagination';

Vue.component('admin-layout', Admin);
Vue.component('customer-layout', Customer);
Vue.component('jw-pagination', JwPagination);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
