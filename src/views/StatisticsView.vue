<template>
    <div class="statistics">
        <div class="statistics_box">
            <div class="statistics_header">
                EDLIM EN CHIFFERES
            </div>
            <div class="statistics_body">
                <p>Conformément aux principes et aux engagements de confidentialité que notre cabinet a souscrits envers nos clients, nous sommes tenus de garantir leur anonymat.</p>   
                <References id="stats-refs"/>
            </div>
        </div>
        <div class="statistics_box">
            <div class="statistics_header">
                LES SERVICES DE EDLIM
            </div>
            <div class="statistics_body">
                <Numbers id="stats-nums"/>
            </div>
        </div>
    </div>
</template>
<script>
import References from '@/components/Statistics/ReferencesCmp.vue';
import Numbers from '@/components/Statistics/NumbersCmp.vue';
import '@/assets/css/Statistics/statistics.css';
import '@/assets/css/Statistics/media_statistics.css';
import '@/assets/css/Statistics/keyframes_statistics.css'
export default {
    name:'StatisticsView',
    components: {
        References, Numbers
    },
}

</script>