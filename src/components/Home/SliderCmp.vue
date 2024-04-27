<template>
    <div class="home_slider" id="home_slider">
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            navigation
            :pagination="{ clickable: true }"
            loop=true
            grabCursor=true
            :autoplay="{delay: 3000, disableOnInteraction: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide>
                <div class="slider_article article1">
                    <div class="slider_titles">
                        <div class="slider_first_title">
                            {{$t('EDLIM, notre aide pour vos problèmes.')}}
                        </div>
                        <div class="slider_second_title">
                            {{$t('Compétence - Accessibilité - Soutien - Résolutions')}}
                        </div>
                        <RouterLink to="/qui-somme-nous" class="slider_button">
                            {{$t('Explorez-nous')}}
                        </RouterLink>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slider_article article3">
                    <div class="slider_titles">
                        <div class="slider_first_title">
                            {{$t('EDLIM, votre partenaire pour la croissance de votre entreprise.')}}
                        </div>
                        <div class="slider_second_title">
                            {{$t('Nous offrons des assistances administratives, jurdiques, audit ...')}}
                        </div>
                        <RouterLink to="/qui-somme-nous" class="slider_button">
                            {{$t('Lire Plus')}}
                        </RouterLink>
                    </div>
                </div>
            </swiper-slide>            
            ...
        </swiper> 
    </div>   
</template>

<script>
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@/assets/css/Home/Slider/slider.css'
import '@/assets/css/Home/Slider/media_slider.css'
import '@/assets/css/Home/Slider/keyframes_slider.css'
export default {
    name:'SliderCmp',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y],
      };
    }
}
</script>