import { createApp } from 'vue';
import App from './App.vue';
import router from "./router/index";

const app = new Vue({ router, ...App })
createApp(app).mount('#app')
