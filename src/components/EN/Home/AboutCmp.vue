<template>
    <div class="home_about" id="home_about">
        <span class="about_h_back">
        <div class="about_h_title">
            About Us
        </div>
        <div class="about_h_content">
            <p>
                &nbsp;&nbsp;&nbsp;Recently created in 2024, the company named <b>EURL EL DJAZAIRIA LIKHADAMAT EL IDARIA MOUTAADIDA</b> with the initials <b>EDLIM</b> is composed of a team of professionals resulting from many years of experience and expertise within various public or private enterprises, including multinational corporations. Its purpose is to assist businesses in their launches or fundamental restructurings required by the economic landscape.
            </p>
            <a href="/en/about-us">See more</a>            
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