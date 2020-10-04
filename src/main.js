import Vue from 'vue';
import App from './App.vue';

import 'normalize.css';
import "fontsource-rubik";
import "fontsource-rubik/500.css";

export const eventBus = new Vue;

import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
  load: {
    region: 'TJ',
    language: 'ru ',
    key: 'AIzaSyBHGQaQf_hp1vJhQK16euGBA0X45XUGhmU',
    libraries: 'places,drawing,visualization',
  }
})

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
