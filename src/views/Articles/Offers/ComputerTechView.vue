<template>
    <div class="article computer_tech">
        <div class="article_header">
            <div class="article_title">
                <div>
                    <span style="--i:1">T</span>
                    <span style="--i:2">E</span>
                    <span style="--i:3">C</span>
                    <span style="--i:4">H</span>
                    <span style="--i:5">N</span>
                    <span style="--i:6">I</span>
                    <span style="--i:7">C</span>
                    <span style="--i:8">I</span>
                    <span style="--i:9">E</span>
                    <span style="--i:10">N</span> 
                    <span style="--i:10">&nbsp;</span>          
                    <span style="--i:11">S</span>
                    <span style="--i:12">U</span>
                    <span style="--i:13">P</span>
                    <span style="--i:14">É</span>
                    <span style="--i:15">R</span>
                    <span style="--i:16">I</span>
                    <span style="--i:17">E</span>
                    <span style="--i:18">U</span>
                    <span style="--i:19">R</span>
                    <span style="--i:20">&nbsp;</span>              
                </div>
                <div>
                    EN                
                </div>
                <div>
                    <span style="--i:23">I</span>
                    <span style="--i:24">N</span>
                    <span style="--i:25">F</span>
                    <span style="--i:26">O</span>
                    <span style="--i:27">R</span>
                    <span style="--i:28">M</span>
                    <span style="--i:29">A</span>
                    <span style="--i:30">T</span>
                    <span style="--i:31">I</span>
                    <span style="--i:32">Q</span> 
                    <span style="--i:33">U</span>          
                    <span style="--i:34">E</span>
                    <span style="--i:34">&nbsp;</span>              
                </div>
            </div>
            <div class="article_nav">
                <a class="article_nav_item" href="/offres-emploi">Liste des offres</a>
            </div>
        </div> 
        <div class="article_body" id="article_body">
            <div class="article_img">
                <img src="@/assets/img/Articles/web.png" alt="">
            </div>
            <div class="article_content">
                <p>&nbsp;&nbsp;<i class="ri-play-fill"></i>&nbsp;Mission :</p>
                <ul class="article_list">
                    <li>Installation, configuration et maintenance du matériel informatique et logiciels.</li>
                    <li>Gestion et maintenance des réseaux informatiques.</li>
                    <li>L'hygiène et sécurité.</li>
                    <li>Support technique.</li>
                    <li>Sécurité informatique.</li>
                </ul>
                <a class="article_btn" href="/candidature-spontanee">Postuler</a> 
            </div>
        </div> 
    </div>
</template>
<script>
import ScrollReveal from 'scrollreveal';
import '@/assets/css/Article/article.css';
import '@/assets/css/Article/media_article.css';
export default {
    name:"ComputerTechView",

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