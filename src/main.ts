import { createApp } from 'vue';

const app = createApp(App);
// i18n
import { i18n } from './locales/i18n';
import App from './App.vue';
import router from './plugins/router';
import http from './plugins/http';
import { createI18n } from 'vue-i18n';
import ElementPlus from 'element-plus';
app.use(ElementPlus);

import './assets/css/main.css';
const locale = createI18n(i18n);
app.use(locale);
app.use(router);
app.config.globalProperties.i18n = locale;
app.use(http);

app.mount('#app');
