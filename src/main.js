import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style.css'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import '@vuepic/vue-datepicker/dist/main.css'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faDollarSign, faWallet, faMoneyBillTransfer, faArrowTrendDown, faArrowTrendUp,
  faChartPie, faPenToSquare, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faDollarSign, faWallet, faMoneyBillTransfer, faArrowTrendDown, faArrowTrendUp,
  faChartPie, faPenToSquare, faAlignLeft);

createApp(App)
  .use(router)
  .component('VueDatePicker', VueDatePicker)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
