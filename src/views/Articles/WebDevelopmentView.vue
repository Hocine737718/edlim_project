<template>
    <div class="article">
        <div class="article_header">
            <div class="article_title">
                <div>
                    <span style="--i:1">C</span>
                    <span style="--i:2">O</span>
                    <span style="--i:3">N</span>
                    <span style="--i:4">C</span>
                    <span style="--i:5">E</span>
                    <span style="--i:6">P</span>
                    <span style="--i:7">T</span>
                    <span style="--i:8">I</span>
                    <span style="--i:9">O</span>
                    <span style="--i:10">N</span> 
                    <span style="--i:10">&nbsp;</span>                     
                </div>
                <div>
                    <span style="--i:12">W</span> 
                    <span style="--i:13">E</span> 
                    <span style="--i:14">B</span>                 
                </div>

            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_img">
                <img src="../../assets/img/Articles/HR.jpg" alt="">
            </div>
            <div class="article_content">
                <h2>Introduction :</h2>
                <p>&nbsp;&nbsp;&nbsp;Nous offrons :</p>
                <ul class="article_list">
                    <li style="--j:1">Création des sites web et personnalisation des adresses des domaines.</li>
                    <li style="--j:2">Hébergement des sites web dans les plateformes étrangères.</li>
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