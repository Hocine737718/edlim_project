<template>
    <div class="offers">
        <div class="offers_header">
            <div class="offers_title">
                <div>
                    <span style="--i:1">J</span>
                    <span style="--i:2">O</span>
                    <span style="--i:3">B</span>
                    <span>&nbsp;</span>
                    <span style="--i:4">O</span>
                    <span style="--i:5">F</span>
                    <span style="--i:6">F</span>
                    <span style="--i:7">E</span>
                    <span style="--i:8">R</span>
                    <span style="--i:9">S</span>
                </div>
            </div>
        </div>
        <OffersTableCmp :lines="lines" :columns="columns"/>
    </div>
</template>
<script>
import OffersTableCmp from '@/components/EN/Offers/OffersTableCmp.vue';
import '@/assets/css/Offers/offers.css';
import '@/assets/css/Offers/media_offers.css';

export default {
    name:'JobOffrsView',
    components:{OffersTableCmp},
    data(){
        return {
            columns:[ 
                { title: 'ID', field: 'id' },
                { title: 'Title', field: 'title_eng' },
                { title: 'Clicks', field: 'clicks' }
            ]
        }        
    },
    computed:{
        lines(){
            return this.$store.state.offers;
        }
    }
}
</script>