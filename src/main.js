import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CanvasJSStockChart from '@canvasjs/vue-stockcharts';
import axios from 'axios';
import Swal from 'sweetalert2';
import { createI18n } from 'vue-i18n'
// import FR from './locale/fr.json'
import AR from './lang/ar.json'
import '@/assets/css/Swal/swal.css';


axios.interceptors.request.use((config) => {
    Swal.fire({
      html: '<div class="loading"></div>',
      showConfirmButton: false,
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });
    return config;
});
axios.interceptors.response.use(
    (response) => {
      Swal.close();
      return response;
    },
    (error) => {
      Swal.close();
      return Promise.reject(error);
    }
);

const i18n = createI18n({
  locale: document.cookie.split('=')[1],
  messages: {
      // FR:FR,
      AR:AR
  },
  legacy: false 
})

createApp(App).use(store).use(router).use(CanvasJSStockChart).use(i18n).mount('#app')
