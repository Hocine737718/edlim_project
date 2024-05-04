<template>
  <Navbar v-if="!this.$route.path.includes('/en')"/>
  <NavbarEn v-else/>
  <router-view/>
  <!--SignUp/-->
  <Footer v-if="!this.$route.path.includes('/en')"/>
  <FooterEn v-else/>
  <NbViewsCmp/>
  <ScrollUp/>
</template>

<script>
import Navbar from '@/components/Navbar/NavbarCmp.vue';
import NavbarEn from '@/components/EN/Navbar/NavbarCmp.vue';
//import SignUp from '@/components/SignUpCmp.vue'
import Footer from '@/components/Footer/FooterCmp.vue';
import FooterEn from '@/components/EN/Footer/FooterCmp.vue';
import ScrollUp from '@/components/ScrollUpCmp.vue';
import NbViewsCmp from '@/components/NbViewsCmp.vue';
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
    ,NbViewsCmp
  },
  beforeMount(){
    Date.prototype.addHours = function(h) {
      this.setTime(this.getTime() + (h*60*60*1000));
      return this;
    }

    const now=Date.now().toString();
    let date=new Date();
    date.addHours(1);
    date=date.toISOString().replace("T"," ").replace("Z","");

    if(!localStorage.getItem("edlim_last_access")){
      localStorage.setItem("edlim_last_access", now);
      // alert(date)
      this.$store.dispatch('add_visitors',date); 
    }
    else
    {
      let duration=(now-localStorage.getItem("edlim_last_access"))/1000/60;
      if(duration>10)
      {
        localStorage.removeItem("edlim_last_access");
        localStorage.setItem("edlim_last_access", now);
        this.$store.dispatch('add_visitors',date); 
      }
    }

    this.$store.dispatch('get_nb_views');

    // window.addEventListener('beforeunload', function (e) { 
    //   e.preventDefault(); 
    //   localStorage.removeItem("edlim_last_access");
    // });
    // this.$store.dispatch('get_offers');
  }
}
</script>
