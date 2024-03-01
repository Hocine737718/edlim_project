<template>
    <div class="error">
        <span class="error_back">
            <div class="error_content">
                <div class="error_box">
                    <img class="error_img" src="@/assets/img/In Progress.png" alt="Error">
                </div>
                <div class="error_box">
                    <p class="error_text">
                        Page en construction, revenez bientôt pour découvrir nos nouveautés !
                    </p>
                </div>
            </div>
        </span>
    </div>
</template>
<script>
import '@/assets/css/Error/error.css'
import '@/assets/css/Error/media_error.css'
export default {
    name:'ErrorView'
}
</script>