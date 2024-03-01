<template>
    <div class="article accounting">
        <div class="article_header">
            <div class="article_title">
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
                    <span style="--i:1">T</span>
                    <span style="--i:2">R</span>
                    <span style="--i:3">A</span>
                    <span style="--i:4">I</span>
                    <span style="--i:5">T</span>
                    <span style="--i:6">E</span>
                    <span style="--i:7">M</span>
                    <span style="--i:8">E</span>
                    <span style="--i:9">N</span>
                    <span style="--i:10">T</span> 
                    <span style="--i:4">&nbsp;</span>
                    <span style="--i:1">D</span>
                    <span style="--i:2">E</span>
                    <span style="--i:3">S</span>
                    <span style="--i:4">&nbsp;</span>
                    <span style="--i:5">D</span>
                    <span style="--i:6">E</span>
                    <span style="--i:7">C</span>
                    <span style="--i:8">L</span>
                    <span style="--i:9">A</span>
                    <span style="--i:10">R</span>
                    <span style="--i:10">A</span>   
                    <span style="--i:10">T</span>                    
                    <span style="--i:10">I</span>  
                    <span style="--i:10">O</span>  
                    <span style="--i:10">N</span>  
                    <span style="--i:10">S</span>  
                </div>
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_img">
                <img src="../../assets/img/Articles/accounting.png" alt="">
            </div>
            <div class="article_content">
                <p>&nbsp;&nbsp;<i class="ri-play-fill"></i>&nbsp;Notre équipe d’expert dynamique, basée sur leurs longues années d’expériences dans les différents cabinets de comptabilités, voudra prendre le volet le plus lourds pour les entreprises afin de prévoir leurs santés financières :</p>
                <ul class="article_list">
                    <li style="--j:1">Audit.</li>
                    <li style="--j:2">Nous assurerons les déclarations de Jibayatic ’s les G50 mensuelles.</li>
                    <li style="--j:3">Les déclarations annuelles des salaires DAS,301BIS/G29.</li>
                    <li style="--j:4">La saisie des opérations caisses et banques et les états de rapprochement.</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import ScrollReveal from 'scrollreveal';
import '@/assets/css/Article/article.css';
import '@/assets/css/Article/media_article.css';
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
    }
}
</script>