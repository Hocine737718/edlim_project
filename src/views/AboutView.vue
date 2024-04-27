<template>
  <div class="about" id="about">
    <div class="about_header">
      <div class="about_title">
        <span style="--i:1">Q</span>
        <span style="--i:2">U</span>
        <span style="--i:3">I</span>
        <span style="--i:3">&nbsp;</span>
        <span style="--i:4">S</span>
        <span style="--i:5">O</span>
        <span style="--i:6">M</span>
        <span style="--i:7">M</span>
        <span style="--i:8">E</span>
        <span style="--i:9">S</span>
        <span style="--i:9">&nbsp;</span>
        <span style="--i:10">N</span>
        <span style="--i:11">O</span>
        <span style="--i:12">U</span>
        <span style="--i:13">S</span>
        <span style="--i:13">&nbsp;</span>
        <span style="--i:14">?</span>
      </div>
      <div class="about_nav" id="about_nav">
        <a class="about_nav_item" href="#about_history">{{$t('Historique')}}</a>
        <a class="about_nav_item" href="#about_team">{{$t('Notre équipe')}}</a>
        <a class="about_nav_item" href="#about_values">{{$t('NOS PRINCIPES')}}</a>
      </div>
    </div>
    <div class="about_body" id="about_body">
      <div class="about_article" id="about_history">
        <h2>{{$t('Historique')}}</h2>
        <p>&nbsp;&nbsp;&nbsp;{{$t('Récemment crée en 2024, la société nommée EURL EL DJAZAIRIA LIKHADAMAT EL IDARIA MOUTAADIDA avec les initiales EDLIM composé d’une équipe de professionnel résultant de longues années d’expériences et d’expertises aux seins de différents entreprises publique ou privée en incluant les multinationales. Afin de permettre aux entreprises leurs lancements ou restructurations fondamentales que nécessitent le monde économique de la place.')}}</p>
        <p>&nbsp;&nbsp;&nbsp;{{$t('Nous assurons l’accompagnement sur mesure dans les métiers suivants :')}}</p>
      </div>
      <div class="about_article" id="about_team">
        <h2>{{$t('Notre équipe')}}</h2>
        &nbsp;&nbsp;&nbsp;{{$t('EDLIM adopte une structure client flexible, réactive et accessible, soutenue par une équipe :')}}
        <ul class="about_list">
          <li>{{$t('Ressources Humaines')}}</li>
          <li>{{$t('Conseil Juridique & Recouvrement')}}</li>
          <li>{{$t('Banque & Assistance')}}</li>
          <li>{{$t('Comptabilité & traitement des déclarations')}}</li>
          <li>{{$t('Conception de site web')}}</li>
        </ul>
      </div>
      <div class="about_article" id="about_values">
        <h2>{{$t('NOS PRINCIPES')}}</h2>
        <p>&nbsp;&nbsp;&nbsp;{{$t('Chez EDLIM, Nos principes fondamentaux sont la compétence, l\'accessibilité, le soutien et les résolutions. Nous sommes une équipe hautement qualifiée, facilement accessible pour répondre à vos besoins, vous offrir un soutien constant et trouver des solutions efficaces à vos défis.')}}</p>
        <h3>{{$t('Compétence :')}}</h3>
        <p>&nbsp;&nbsp;&nbsp;{{$t('Notre équipe est composée de professionnels hautement qualifiés et expérimentés dans leur domaine respectif. Leur expertise leur permet d\'apporter des solutions efficaces et innovantes à vos besoins.')}}</p>
        <h3>{{$t('Accessibilité :')}}</h3>
        <p>&nbsp;&nbsp;&nbsp;{{$t('Nous nous engageons à être facilement accessibles pour nos clients. Que ce soit par téléphone, par e-mail ou en personne, nous sommes là pour répondre à vos questions, discuter de vos préoccupations et vous fournir l\'assistance dont vous avez besoin, quand vous en avez besoin.')}}</p>
        <h3>{{$t('Soutien :')}}</h3>
        <p>&nbsp;&nbsp;&nbsp;{{$t('Nous croyons en un soutien constant et attentif à nos clients. De la première prise de contact jusqu\'à la réalisation de votre projet, nous sommes à vos côtés pour vous guider, vous conseiller et vous soutenir à chaque étape du processus.')}}</p>
        <h3>{{$t('Résolutions :')}}</h3>
        <p>&nbsp;&nbsp;&nbsp;{{$t('Notre engagement est de trouver des solutions adaptées à vos défis. Nous sommes déterminés à résoudre vos problèmes de manière efficace et à vous aider à atteindre vos objectifs. En cas de difficultés, nous mettons tout en œuvre pour trouver des alternatives et des solutions créatives pour garantir votre satisfaction.')}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import ScrollReveal from 'scrollreveal';
import '@/assets/css/About/about.css';
import '@/assets/css/About/media_about.css';
export default {
  name:'AboutView',
  mounted(){
    if(this.$i18n.locale == 'AR'){
      $('#about_nav').addClass("rtl");
      $('#about_body').addClass("rtl");
    }
    else{
       $('#about_nav').removeClass("rtl");
       $('#about_body').removeClass("rtl");
    } 
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400
    })
    sr.reveal(`#about`);
    
    $(function() {
        $('.about_nav_item').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 56
            }, 1000);
            event.preventDefault();
        });
    }); 
  }
}
</script>