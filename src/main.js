import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import ImageKit from 'imagekitio-vue';
Vue.use(ImageKit, {
  urlEndpoint: 'https://ik.imagekit.io/zdsjjv7awt0/',
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
