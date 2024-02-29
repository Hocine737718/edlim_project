<template>
    <div class="article">
        <div class="article_header">
            <div class="article_title">
                <div>
                    <span style="--i:1">B</span>
                    <span style="--i:2">A</span>
                    <span style="--i:3">N</span>
                    <span style="--i:4">Q</span>
                    <span style="--i:5">U</span>
                    <span style="--i:6">E</span>
                    <span style="--i:6">&nbsp;</span>
                    <span style="--i:7">E</span>
                    <span style="--i:8">T</span> 
                    <span style="--i:8">&nbsp;</span>                     
                </div>
                <div>
                    <span style="--i:9">A</span> 
                    <span style="--i:10">S</span> 
                    <span style="--i:11">S</span> 
                    <span style="--i:12">I</span> 
                    <span style="--i:13">S</span>
                    <span style="--i:14">T</span>
                    <span style="--i:15">A</span>
                    <span style="--i:16">N</span>   
                    <span style="--i:17">C</span>    
                    <span style="--i:18">E</span>   
                </div>

            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_img">
                <img src="../../assets/img/Articles/HR.png" alt="">
            </div>
            <div class="article_content">
                <h2>Introduction :</h2>
                <p>&nbsp;&nbsp;&nbsp;Nous sommes à l’écoute des nouveautés du marché monétaires et les champs des lois en implications et qui domine le secteur bancaire, dû à nos années d’expériences dans ce segment :</p>
                <ul class="article_list">
                    <li style="--j:1">Nous assurerons un coaching des entreprises qui exercent dans le domaine IMPORT-EXPORT.</li>
                    <li style="--j:2">Nous assurerons un accompagnement dans le traitement des études technico commerciales.</li>
                    <li style="--j:3">Nous assurerons un accompagnement dans le traitement des dossiers financiers « analyse des bilans » ou étude financiers.</li>
                    <li style="--j:4">Nous assurerons un conseil par rapport à l’opération d’entrée en relation avec les établissements financiers à la suggestion des entreprises et selon leurs compétitivités.</li>
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