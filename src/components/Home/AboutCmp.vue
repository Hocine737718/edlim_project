<template>
    <div class="home_about" id="home_about">
        <span class="about_h_back">
        <div class="about_h_title">
            {{$t('Qui sommes-nous')}}
        </div>
        <div class="about_h_content">
            <p>
                {{$t('Récemment crée en 2024, la société nommée EURL EL DJAZAIRIA LIKHADAMAT EL IDARIA MOUTAADIDA avec les initiales EDLIM composé d’une équipe de professionnel résultant de longues années d’expériences et d’expertises aux seins de différents entreprises publique ou privée en incluant les multinationales.')}}
            </p>
            <RouterLink to="/qui-somme-nous">{{$t('Voir plus')}}</RouterLink>            
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