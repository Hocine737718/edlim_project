<template>
    <div class="article">
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
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_img">
                <img src="../../assets/img/Articles/HR.png" alt="">
            </div>
            <div class="article_content">
                <h2>Introduction :</h2>
                <p>&nbsp;&nbsp;&nbsp;La législation sociale, qui enveloppe les chapitres suivants :</p>
                <ul class="article_list">
                    <li style="--j:1">Gestion de la paie.</li>
                    <li style="--j:2">Gestions des procéder de recrutement et de placement des travailleurs.</li>
                    <li style="--j:3">Elaborations des contrats de travails sous toutes ses formes.</li>
                    <li style="--j:4">Consultation en droits du travail et de la sécurités sociales.</li>
                    <li style="--j:5">Etablissement de la grille des salaires.</li>
                    <li style="--j:6">Etablissement de la nomenclature des postes.</li> 
                    <li style="--j:7">Etablissement des procédures RH.</li>
                    <li style="--j:8">Audit RH et sociales.</li>
                    <li style="--j:9">La gestion des expatriés « de la demande des visas, au permis de travail et la déclarations sociales ».</li>
                    <li style="--j:10">Rédactions des correspondances aux profits des instances étatiques ou divers.</li>
                    <li style="--j:11">Formations des collaborateurs dans le métier paie et RH volet terrain.</li>
                    <li style="--j:12">Correspondances sociales.</li>
                    <li style="--j:13">Conseil et coaching des collaborateurs en place afin de les préparer au monde entreprise.</li>
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