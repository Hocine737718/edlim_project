<template>
    <div class="article">
        <div class="article_header">
            <div class="article_title">
                <div>
                    <span style="--i:1">C</span>
                    <span style="--i:2">O</span>
                    <span style="--i:3">N</span>
                    <span style="--i:4">S</span>
                    <span style="--i:5">E</span>
                    <span style="--i:6">I</span>
                    <span style="--i:7">L</span>
                    <span style="--i:7">&nbsp;</span>                     
                </div>
                <div>
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

            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_img">
                <img src="../../assets/img/Articles/HR.png" alt="">
            </div>
            <div class="article_content">
                <h2>Introduction :</h2>
                <p>&nbsp;&nbsp;&nbsp;Grace à notre expertise dans le domaine des jurisprudences. Nous vous offrons :</p>
                <ul class="article_list">
                    <li style="--j:1">Conseil et orientation</li>
                    <li style="--j:2">Rédaction des plaintes et des requêtes.</li>
                    <li style="--j:3">Rédaction des Ordonnances et des demandes aux profits des différentes administrations.</li>
                    <li style="--j:4">Nous assurons le volet de recouvrement des créances des entreprises.</li>
                    <li style="--j:5">Gestion des litiges.</li>
                    <li style="--j:6">Rédaction de tous types des contrats.</li> 
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