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
      <div class="about_nav">
        <a class="about_nav_item" href="#about_history">Historique</a>
        <a class="about_nav_item" href="#about_values">NOS VALEURS</a>
        <a class="about_nav_item" href="#about_team">Notre équipe</a>
      </div>
    </div>
    <div class="about_body" id="about_body">
      <div class="about_article" id="about_history">
        <h2>Historique</h2>
        <p>&nbsp;&nbsp;&nbsp;Le cabinet Global Management Services, Sarl (par abréviation GMS) a été créé en Avril 2010 ; nous comptons plus de 20 salariés et de nombreux consultants externes spécialisés dans l'administration des ressources humaines avec tous ses aspects opérationnels ainsi que le conseil en droit social (droit du travail, sécurité sociale et fiscalité salariale).</p>
        <p>&nbsp;&nbsp;&nbsp;GMS possède les compétences, les ressources et le savoir-faire nécessaires pour relever vos défis en matière d’administration des ressources humaines.</p>
      </div>
      <div class="about_article" id="about_values">
        <h2>NOS VALEURS</h2>
        <p>&nbsp;&nbsp;&nbsp;Chez GMS, nos clients sont au coeur de nos préoccupations. Nous cherchons à établir avec eux des relations privilégiées basées sur la confiance, et l’intérêt commun. Ainsi chaque mission représente pour nous une action unique, bâtie sur mesure pour et avec notre client, dans le strict respect de ses exigences et dans la satisfaction de ses attentes.</p>
        <h3>Compétitivité :</h3>
        <p>&nbsp;&nbsp;&nbsp;Grace à notre approche, nos moyens et notre réseau, nous vous assurons une prestation de qualité à des coûts maîtrisés.</p>
        <h3>Engagement :</h3>
        <p>&nbsp;&nbsp;&nbsp;Nous mobilisons l’ensemble de nos équipes & moyens pour la réalisation de nos prestations.</p>
        <h3>Qualité :</h3>
        <p>&nbsp;&nbsp;&nbsp;Nous misons sur la disponibilité et les talents de notre équipe afin de vous garantir une prestation avec les meilleurs standards du métier. Grace à notre approche, nos moyens et notre réseau, nous vous assurons une prestation de qualité à des coûts maitrisés.</p>
        <h3>Confidentialité :</h3>
        <p>&nbsp;&nbsp;&nbsp;Nous vous accompagnons sur l’ensemble des prestations que nous offrons dans le strict respect du secret et de l’éthique.</p>
      </div>
      <div class="about_article" id="about_team">
        <h2>Notre équipe</h2>
        &nbsp;&nbsp;&nbsp;Le cabinet Global Management Service, met en oeuvre une organisation client souple, réactive et disponible qui s'appuie sur une équipe :
        <ul class="about_list">
          <li>De juristes spécialisés en droit du travail, droit de la sécurité sociale,</li>
          <li>De consultants formateur en administration des ressources humaines</li>
          <li>De spécialistes du chiffre et de l’optimisation des couts salariaux</li>
          <li>De spécialistes de la gestion administrative du personnel</li>
          <li>De correspondants spécialisé CNAS, CNR, ANEM, inspection de travail</li>
          <li>De gestionnaires de paie confirmés</li>
        </ul>
        <p>&nbsp;&nbsp;&nbsp;GMS est aussi accompagné et soutenu par une équipe de <b>consultants externes</b> qui interviennent dans tous les domaines de compétences du Cabinet</p>
        <p>&nbsp;&nbsp;&nbsp;GMS possède les compétences, les ressources et le savoir-faire nécessaires pour relever vos défis en matière d’administration des ressources humaines.</p>
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