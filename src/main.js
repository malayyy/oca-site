import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head'

import App from './App.vue'
import router from './router'
import BasicButton from './components/Buttons/BasicButton/BasicButton.vue';
import SectionTitle from './components/SectionTitle/SectionTitle.vue';
import InfoCard from './components/Cards/InfoCard.vue';

import './styles/main.css';

const app = createApp(App);
const head = createHead()

app.use(createPinia());
app.use(router);
app.use(head);

app.component('BasicButton', BasicButton);
app.component('SectionTitle', SectionTitle);
app.component('InfoCard', InfoCard);

app.mount('#app');

