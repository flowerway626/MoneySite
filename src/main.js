import { createApp } from 'vue'
import App from './App.vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import './style.css'
import '@vuepic/vue-datepicker/dist/main.css'


createApp(App).component('VueDatePicker', VueDatePicker).mount('#app')
