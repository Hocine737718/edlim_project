<template>
  <div class="about" id="about">
    <div class="about_header">
      <div class="about_title">
        <span style="--i:1">A</span>
        <span style="--i:2">B</span>
        <span style="--i:3">O</span>
        <span style="--i:4">U</span>
        <span style="--i:5">T</span>
        <span style="--i:5">&nbsp;</span>
        <span style="--i:6">U</span>
        <span style="--i:7">S</span>
      </div>
      <div class="about_nav">
        <a class="about_nav_item" href="#about_history">History</a>
        <a class="about_nav_item" href="#about_team">Our Team</a>
        <a class="about_nav_item" href="#about_values">Our Values</a>
      </div>
    </div>
    <div class="about_body" id="about_body">
      <div class="about_article" id="about_history">
        <h2>History</h2>
        <p>&nbsp;&nbsp;&nbsp;Recently created in 2024, the company named <b>EURL EL DJAZAIRIA LIKHADAMAT EL IDARIA MOUTAADIDA</b> with the initials <b>EDLIM</b> is composed of a team of professionals resulting from many years of experience and expertise within various public or private enterprises, including multinational corporations. Its purpose is to assist businesses in their launches or fundamental restructurings required by the economic landscape.</p>
        <p>&nbsp;&nbsp;&nbsp;We provide tailored support in the following professions:</p>
      </div>
      <div class="about_article" id="about_team">
        <h2>Our Team</h2>
        &nbsp;&nbsp;&nbsp;EDLIM adopts a flexible, responsive, and accessible client structure, supported by a team:
        <ul class="about_list">
          <li>Human Resources</li>
          <li>Legal Counseling & Debt Recovery</li>
          <li>Banking & Assistance</li>
          <li>Accounting & Declaration Processing</li>
          <li>Web Development</li>
        </ul>
      </div>
      <div class="about_article" id="about_values">
        <h2>Our Values</h2>
        <p>&nbsp;&nbsp;&nbsp;At EDLIM, our fundamental principles are competence, accessibility, support, and resolution. We are a highly qualified team, readily available to address your needs, provide ongoing support, and devise effective solutions to your challenges.</p>
        <h3>Competence :</h3>
        <p>&nbsp;&nbsp;&nbsp;Our team consists of highly qualified and experienced professionals in their respective fields. Their expertise enables them to provide efficient and innovative solutions to meet your needs.</p>
        <h3>Accessibility :</h3>
        <p>&nbsp;&nbsp;&nbsp;We are committed to being easily accessible to our clients. Whether it's by phone, email, or in person, we are here to address your questions, discuss your concerns, and provide the assistance you need, when you need it.</p>
        <h3>Support:</h3>
        <p>We believe in constant and attentive support for our clients. From the initial contact to the completion of your project, we are by your side to guide, advise, and support you at every step of the process.</p>
        <h3>Resolutions:</h3>
        <p>Our commitment is to find solutions tailored to your challenges. We are determined to effectively address your issues and help you achieve your goals. In times of difficulty, we strive to find alternatives and creative solutions to ensure your satisfaction.</p>
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