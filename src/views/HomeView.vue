<template>
  <div class="home">
    <Slider/>
    <About/>
  </div>
</template>

<script>
import Slider from '@/components/Home/SliderCmp.vue'
//import Services from '@/components/Home/Services/ServicesCmp.vue'
import About from '@/components/Home/AboutCmp.vue'
import '@/assets/css/Home/home.css'
import '@/assets/css/Home/media_home.css'
export default {
  name: 'HomeView',
  components: {
    Slider,
    About,
    //Services
  }
}
</script>
