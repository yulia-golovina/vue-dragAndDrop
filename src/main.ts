import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css';
import 'primeicons/primeicons.css';

import App from './App.vue';

const app = createApp(App);

app.use(createPinia());
app.use(PrimeVue);
app.mount('#app');
