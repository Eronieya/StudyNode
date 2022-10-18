import * as Vue from "vue";
import {
  router
} from '../route/index.js';
import App from './App.vue';

const app = Vue.createApp(App);
app.use(router);
app.mount('#app');