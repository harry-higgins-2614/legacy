import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import DetectOutsideClick from './directives/DetectOutsideClick';

createApp(App).directive('outside-click', DetectOutsideClick).mount('#app');
