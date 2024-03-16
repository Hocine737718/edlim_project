<template>
    <div class="article computer_tech">
        <div class="article_header">
            <div class="article_title">
                <div>
                    <span style="--i:1">C</span>
                    <span style="--i:2">O</span>
                    <span style="--i:3">M</span>
                    <span style="--i:4">P</span>
                    <span style="--i:5">U</span>
                    <span style="--i:6">T</span>
                    <span style="--i:7">E</span>
                    <span style="--i:8">R</span>
                    <span style="--i:9">&nbsp;</span>
                </div>
                <div>
                    <span style="--i:11">T</span>
                    <span style="--i:12">E</span>
                    <span style="--i:13">C</span>
                    <span style="--i:14">H</span>
                    <span style="--i:15">N</span>
                    <span style="--i:16">I</span>
                    <span style="--i:17">C</span>
                    <span style="--i:18">I</span>
                    <span style="--i:19">A</span>
                    <span style="--i:20">N</span>
                </div>
            </div>
            <div class="article_nav">
                <a class="article_nav_item" href="/en/job-offers">Job Offers</a>
            </div>
        </div> 
        <div class="article_body" id="article_body">
            <div class="article_img">
                <img src="@/assets/img/Articles/web.png" alt="">
            </div>
            <div class="article_content">
                <p>&nbsp;&nbsp;<i class="ri-play-fill"></i>&nbsp;Mission:</p>
                <ul class="article_list">
                    <li>Installation, configuration, and maintenance of computer hardware and software.</li>
                    <li>Management and maintenance of computer networks.</li>
                    <li>Hygiene and safety.</li>
                    <li>Technical support.</li>
                    <li>Computer security.</li>
                </ul>
                <a class="article_btn" href="/en/application-form">Apply</a>
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