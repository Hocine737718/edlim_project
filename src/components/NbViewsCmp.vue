<template>
    <a href="#" class="scrollup nb-views"> 
        <div>
            <i class="ri-eye-line scrollup_icon"></i>
            <span class="scrollup_icon"> {{ this.$store.state.nb_views }}</span>
        </div>
    </a>
</template>

<script>
import '@/assets/css/ScrollUp/scrollup.css'
export default {
    name:"NbViewsCmp",
    // beforeMount(){
    // },
}
</script>