<template>
  <div class="home">
    <Slider/>
    <About/>
    <Services/>
  </div>
</template>

<script>
import Slider from '@/components/EN/Home/SliderCmp.vue';
import Services from '@/components/EN/Home/Services/ServicesCmp.vue';
import About from '@/components/EN/Home/AboutCmp.vue';
import '@/assets/css/Home/home.css';
export default {
  name: 'HomeView',
  components: {
    Slider,
    About,
    Services
  }
}
</script>
