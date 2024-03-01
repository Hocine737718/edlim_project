<template>
    <div class="article web_development">
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
                    <span style="--i:13">D</span>                
                    <span style="--i:14">E</span>
                    <span style="--i:15">S</span>
                    <span style="--i:15">&nbsp;</span>
                </div>
                <div>
                    <span style="--i:16">S</span> 
                    <span style="--i:17">I</span> 
                    <span style="--i:18">T</span> 
                    <span style="--i:19">E</span> 
                    <span style="--i:18">S</span>
                    <span style="--i:19">&nbsp;</span> 
                    <span style="--i:20">W</span> 
                    <span style="--i:21">E</span>    
                    <span style="--i:22">B</span>               
                </div>

            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_img">
                <img src="@/assets/img/Articles/web.png" alt="">
            </div>
            <div class="article_content">
                <p>&nbsp;&nbsp;<i class="ri-asterisk"></i>&nbsp;Nous offrons :</p>
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