import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CanvasJSStockChart from '@canvasjs/vue-stockcharts';
import axios from 'axios';
import Swal from 'sweetalert2';

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

createApp(App).use(store).use(router).use(CanvasJSStockChart).mount('#app')
