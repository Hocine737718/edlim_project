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
                            EDLIM, notre aide pour vos problèmes.
                        </div>
                        <div class="slider_second_title">
                            Compétence - Accessibilité - Soutien - Résolutions
                        </div>
                        <a href="/qui-somme-nous" class="slider_button">
                            Explorez-nous
                        </a>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slider_article article2">
                    <div class="slider_buttons">
                        <a class="slider_button" href="/audit">Audit gratuit</a>
                        <a class="slider_button" href="/devis">Demandez un devis</a>                    
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slider_article article3">
                    <div class="slider_titles">
                        <div class="slider_first_title">
                            EDLIM, votre partenaire pour la croissance de votre entreprise.
                        </div>
                        <div class="slider_second_title">
                            Assistance Administrative - Assistance Juridique - Audit de Conformité & de Performace
                        </div>
                        <a href="/qui-somme-nous" class="slider_button">
                            LIRE PLUS
                        </a>
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