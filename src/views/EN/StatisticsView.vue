<template>
    <div class="statistics">
        <div class="statistics_box">
            <div class="statistics_header">
                EDLIM IN FIGURES
            </div>
            <div class="statistics_body">
                <p>In accordance with the principles and confidentiality commitments our firm has undertaken with our clients, we are obliged to ensure their anonymity.</p>   
                <References id="stats-refs"/>
            </div>
        </div>
        <div class="statistics_box">
            <div class="statistics_header">
                THE SERVICES OF EDLIM
            </div>
            <div class="statistics_body">
                <Numbers id="stats-nums"/>
            </div>
        </div>
    </div>
</template>
<script>
import References from '@/components/EN/Statistics/ReferencesCmp.vue';
import Numbers from '@/components/EN/Statistics/NumbersCmp.vue';
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