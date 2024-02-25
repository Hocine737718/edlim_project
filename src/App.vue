<template>
  <Navbar/>
  <router-view/>
</template>

<script>
import 'remixicon/fonts/remixicon.css'
import '@/assets/css/_global.css'
import Navbar from '@/components/Navbar/NavbarCmp.vue';
export default {
  components:{Navbar},
  /*beforeMount(){
    this.$store.dispatch('get_offers');
  }*/
}
</script>
