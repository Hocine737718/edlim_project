<template>
    <div class="article accounting">
        <div class="article_header" id="article_header">
            <div class="article_title" v-if="this.$i18n.locale != 'AR'">
                <div>
                    <span style="--i:1">C</span>
                    <span style="--i:2">O</span>
                    <span style="--i:3">M</span>
                    <span style="--i:4">P</span>
                    <span style="--i:5">T</span>
                    <span style="--i:6">A</span>
                    <span style="--i:7">B</span>
                    <span style="--i:8">I</span>
                    <span style="--i:9">L</span>
                    <span style="--i:10">I</span> 
                    <span style="--i:11">T</span> 
                    <span style="--i:12">É</span> 
                    <span style="--i:12">&nbsp;</span>                     
                </div>
                <div>
                    &
                </div>
                <div>
                    <span style="--i:15">T</span>
                    <span style="--i:16">R</span>
                    <span style="--i:17">A</span>
                    <span style="--i:18">I</span>
                    <span style="--i:19">T</span>
                    <span style="--i:20">E</span>
                    <span style="--i:21">M</span>
                    <span style="--i:22">E</span>
                    <span style="--i:23">N</span>
                    <span style="--i:24">T</span> 
                    <span style="--i:24">&nbsp;</span>
                    <span style="--i:25">D</span>
                    <span style="--i:26">E</span>
                    <span style="--i:27">S</span>
                    <span style="--i:28">&nbsp;</span>
                    <span style="--i:29">D</span>
                    <span style="--i:30">E</span>
                    <span style="--i:31">C</span>
                    <span style="--i:32">L</span>
                    <span style="--i:33">A</span>
                    <span style="--i:34">R</span>
                    <span style="--i:35">A</span>   
                    <span style="--i:36">T</span>                    
                    <span style="--i:37">I</span>  
                    <span style="--i:38">O</span>  
                    <span style="--i:39">N</span>  
                    <span style="--i:40">S</span>  
                </div>
            </div>
            <div class="article_title" v-if="this.$i18n.locale == 'AR'">
                {{ $t('Comptabilité & traitement des déclarations') }}
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_img">
                <img src="@/assets/img/Articles/accounting.png" alt="">
            </div>
            <div class="article_content" id="article_content">
                <p>&nbsp;&nbsp;<i class="ri-play-fill"></i>&nbsp;{{$t('Notre équipe d’expert dynamique, basée sur leurs longues années d’expériences dans les différents cabinets de comptabilités, voudra prendre le volet le plus lourds pour les entreprises afin de prévoir leurs santés financières :')}}</p>
                <ul class="article_list">
                    <li style="--j:1">{{$t('Audit.')}}</li>
                    <li style="--j:2">{{$t('Nous assurerons les déclarations de Jibayatic ’s les G50 mensuelles.')}}</li>
                    <li style="--j:3">{{$t('Les déclarations annuelles des salaires DAS,301BIS/G29.')}}</li>
                    <li style="--j:4">{{$t('La saisie des opérations caisses et banques et les états de rapprochement.')}}</li>
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
             $('#article_content').addClass("rtl");
             $('#article_header').addClass("rtl");
        }
        else{
            $('#article_content').removeClass("rtl");
            $('#article_header').removeClass("rtl");
        }
    }
}
</script>