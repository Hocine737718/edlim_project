<template>
  <Navbar v-if="!this.$route.path.includes('/en')"/>
  <NavbarEn v-else/>
  <router-view/>
  <!--SignUp/-->
  <Footer v-if="!this.$route.path.includes('/en')"/>
  <FooterEn v-else/>
  <ScrollUp/>
</template>

<script>
import Navbar from '@/components/Navbar/NavbarCmp.vue';
import NavbarEn from '@/components/EN/Navbar/NavbarCmp.vue';
//import SignUp from '@/components/SignUpCmp.vue'
import Footer from '@/components/Footer/FooterCmp.vue';
import FooterEn from '@/components/EN/Footer/FooterCmp.vue';
import ScrollUp from '@/components/ScrollUpCmp.vue';
import 'remixicon/fonts/remixicon.css';

import '@/assets/css/_global.css';
export default {
  components:{
    Navbar
    ,NavbarEn
    //,SignUp
    ,Footer
    ,FooterEn
    ,ScrollUp
  }
  /*,
    beforeMount(){
      this.$store.dispatch('get_offers');
      this.$store.dispatch('add_visitor');
    }
  */
}
</script>
