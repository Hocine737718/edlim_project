<template>
    <div class="offers">
        <div class="offers_header" id="offers_header">
            <div class="offers_title"  v-if="this.$i18n.locale != 'AR'">
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
            <div class="offers_title" v-if="this.$i18n.locale == 'AR'">
                {{ $t('Offres d\'emploi') }}
            </div>
        </div>
        <OffersTableCmp :lines="lines" :columns="columns"/>
    </div>
</template>
<script>
import OffersTableCmp from '@/components/Offers/OffersTableCmp.vue';
import '@/assets/css/Offers/offers.css';
import '@/assets/css/Offers/media_offers.css';
import $ from 'jquery';
export default {
    name:'JobOffrsView',
    components:{OffersTableCmp},
    data(){
        return {
            columns:[ 
                { title: this.$t('ID'), field: 'id' },
                { title: this.$t('Titre'), field: 'title' },
                { title: this.$t('Clics'), field: 'clicks' }
            ]
        }        
    },
    computed:{
        lines(){
            return this.$store.state.offers;
        }
    },
    mounted(){
        if(this.$i18n.locale == 'AR'){
             $('#offers_content').addClass("rtl");
             $('#offers_header').addClass("rtl");
        }
        else{
            $('#offers_content').removeClass("rtl");
            $('#offers_header').removeClass("rtl");
        }        
    }
}
</script>