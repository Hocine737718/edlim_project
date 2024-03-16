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
                            EDLIM, our assistance for your problems.
                        </div>
                        <div class="slider_second_title">
                            Competence - Accessibility - Support - Resolutions
                        </div>
                        <a href="/en/about-us" class="slider_button">
                            Explore Us
                        </a>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slider_article article3">
                    <div class="slider_titles">
                        <div class="slider_first_title">
                            EDLIM, your partner for the growth of your business.
                        </div>
                        <div class="slider_second_title">
                            We offer administrative, legal, audit assistance...
                        </div>
                        <a href="/en/about-us" class="slider_button">
                            See More
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