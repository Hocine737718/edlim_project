<template>
    <div class="offers">
        <div class="offers_header">
            <div class="offers_title">
                <div>
                    <span style="--i:1">O</span>
                    <span style="--i:2">F</span>
                    <span style="--i:3">F</span>
                    <span style="--i:4">R</span>
                    <span style="--i:5">E</span>
                    <span style="--i:6">S</span>
                    <span>&nbsp;</span>
                    <span style="--i:7">D</span>
                    <span style="--i:7">'</span>
                    <span>&nbsp;</span>
                    <span style="--i:8">E</span>
                    <span style="--i:9">M</span>
                    <span style="--i:10">P</span>
                    <span style="--i:11">L</span>
                    <span style="--i:12">O</span>
                    <span style="--i:13">I</span>
                </div>
            </div>
        </div>
        <OffersTableCmp :lines="lines" :columns="columns"/>
    </div>
</template>
<script>
import OffersTableCmp from '@/components/Offers/OffersTableCmp.vue';
import '@/assets/css/Offers/offers.css';
import '@/assets/css/Offers/media_offers.css';

export default {
    name:'JobOffrsView',
    components:{OffersTableCmp},
    data(){
        return {
            columns:[ 
                { title: 'ID', field: 'id' },
                { title: 'Titre', field: 'title' },
                { title: 'Clics', field: 'clicks' }
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