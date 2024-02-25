import { createStore } from 'vuex'
//import {useAxios} from '@/assets/js/global.js';
//import axios from 'axios';
//import Swal from 'sweetalert2';

export default createStore({
  state: {
    //baseURL: "http://localhost/server/edlim_project/_php",
    baseURL: "https://gms-php.000webhostapp.com/_php",
    offers:[],
    line_business_stats:[],
    services_stats:[]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
