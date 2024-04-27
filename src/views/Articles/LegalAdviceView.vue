<template>
    <div class="article legal_advice">
        <div class="article_header" id="article_header">
            <div class="article_title" v-if="this.$i18n.locale != 'AR'">
                <div>
                    <span style="--i:1">C</span>
                    <span style="--i:2">O</span>
                    <span style="--i:3">N</span>
                    <span style="--i:4">S</span>
                    <span style="--i:5">E</span>
                    <span style="--i:6">I</span>
                    <span style="--i:7">L</span>
                    <span style="--i:7">&nbsp;</span>                     
                    <span style="--i:8">J</span> 
                    <span style="--i:9">U</span> 
                    <span style="--i:10">R</span> 
                    <span style="--i:11">I</span> 
                    <span style="--i:12">D</span>
                    <span style="--i:13">I</span>
                    <span style="--i:14">Q</span>
                    <span style="--i:15">U</span>                   
                    <span style="--i:16">E</span>    
                </div>
                <div>
                    &
                </div>
                <div>
                    <span style="--i:20">R</span> 
                    <span style="--i:21">E</span> 
                    <span style="--i:22">C</span> 
                    <span style="--i:23">O</span>
                    <span style="--i:24">U</span>
                    <span style="--i:25">V</span>
                    <span style="--i:26">R</span>                   
                    <span style="--i:27">E</span>    
                    <span style="--i:28">M</span>  
                    <span style="--i:29">E</span>  
                    <span style="--i:30">N</span>  
                    <span style="--i:31">T</span>  
                </div>
            </div>
            <div class="article_title" v-if="this.$i18n.locale == 'AR'">
                {{ $t('Conseil Juridique & Recouvrement') }}
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_img">
                <img src="@/assets/img/Articles/legal-advice.png" alt="">
            </div>
            <div class="article_content" id="article_content">
                <p>&nbsp;&nbsp;<i class="ri-shining-fill"></i>&nbsp;{{$t('Grace à notre expertise dans le domaine des jurisprudences. Nous vous offrons :')}}</p>
                <ul class="article_list">
                    <li style="--j:1">{{$t('Conseil et orientation')}}</li>
                    <li style="--j:2">{{$t('Rédaction des plaintes, des requêtes et des mises en demeures.')}}</li>
                    <li style="--j:3">{{$t('Rédactions des Ordonnances et des demandes aux profits des différentes administrations.')}}</li>
                    <li style="--j:4">{{$t('Gestion des litiges.')}}</li>
                    <li style="--j:5">{{$t('Rédaction de tous types des contrats.')}}</li> 
                    <li style="--j:6">{{$t('Nous assurerons le volet de recouvrement des créances pour les entreprises.')}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import ScrollReveal from 'scrollreveal';
import '@/assets/css/Article/article.css';
import '@/assets/css/Article/media_article.css';
import $ from 'jquery';
export default {
    name:"AdminRhView",

    mounted(){
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400
        })
        sr.reveal(`.article_img`);
        sr.reveal(`.article_content`);
        if(this.$i18n.locale == 'AR'){
            $('#article_header').addClass("rtl");
            $('#article_content').addClass("rtl");
        }
        else{
            $('#article_header').removeClass("rtl");
            $('#article_content').removeClass("rtl");
        }
    }
}
</script>