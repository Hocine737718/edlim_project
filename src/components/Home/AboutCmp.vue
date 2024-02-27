<template>
    <div class="home_about" id="home_about">
        <span class="about_h_back">
        <div class="about_h_title">
            Qui sommes-nous
        </div>
        <div class="about_h_content">
            <p>
                &nbsp;&nbsp;&nbsp;Récemment crée en 2024, la société nommée Eurl <b>El Djazairia Likhadamat el Idaria Moutaadida</b> avec les initiales <b>EDLIM</b> composé d’une équipe de professionnel résultant de longues années d’expériences et d’expertises aux seins de différents entreprises publique ou privée en incluant les multinationales.
            </p>
            <a href="/qui-somme-nous">Voir plus</a>            
        </div>

        </span>
    </div>
</template>

<script>
import ScrollReveal from 'scrollreveal';
export default {
    name:'AboutCmp',
    mounted(){
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400
        })
        sr.reveal(`.about_h_content`);
    }
}
</script>