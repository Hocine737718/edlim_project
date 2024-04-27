<template>
    <div class="error">
        <span class="error_back">
            <div class="error_content" id="error_content">
                <div class="error_box">
                    <img class="error_img" src="@/assets/img/In Progress.png" alt="Error">
                </div>
                <div class="error_box">
                    <p class="error_text">
                        {{$t('Page en construction, revenez bientôt pour découvrir nos nouveautés !')}}
                    </p>
                </div>
            </div>
        </span>
    </div>
</template>
<script>
import '@/assets/css/Error/error.css'
import '@/assets/css/Error/media_error.css'
import $ from 'jquery';
export default {
    name:'ErrorView',
    mounted(){
        if(this.$i18n.locale == 'AR'){
             $('#error_content').addClass("rtl");
        }
        else{
            $('#error_content').removeClass("rtl");
        }        
    }
}
</script>