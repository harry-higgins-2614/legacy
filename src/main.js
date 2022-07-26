import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import DetectOutsideClick from './directives/DetectOutsideClick';
import { createPinia } from 'pinia';

const pinia = createPinia()

createApp(App)
.directive('outside-click', DetectOutsideClick)
.use(pinia)
.mount('#app');
