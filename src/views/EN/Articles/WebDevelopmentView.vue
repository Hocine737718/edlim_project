<template>
    <div class="article web_development">
        <div class="article_header">
            <div class="article_title">
                <div>
                    <span style="--i:1">W</span>
                    <span style="--i:2">e</span>
                    <span style="--i:3">b</span>
                    <span style="--i:4">&nbsp;</span>
                </div>
                <div>
                    <span style="--i:5">D</span>
                    <span style="--i:6">e</span>
                    <span style="--i:7">v</span>
                    <span style="--i:8">e</span>
                    <span style="--i:9">l</span>
                    <span style="--i:10">o</span>
                    <span style="--i:11">p</span>
                    <span style="--i:12">m</span>
                    <span style="--i:13">e</span>
                    <span style="--i:14">n</span>
                    <span style="--i:15">t</span> 
                </div>
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_img">
                <img src="@/assets/img/Articles/web.png" alt="">
            </div>
            <div class="article_content">
                <p>&nbsp;&nbsp;<i class="ri-asterisk"></i>&nbsp;We offer:</p>
                <ul class="article_list">
                    <li style="--j:1">Website creation and customization of domain addresses.</li>
                    <li style="--j:2">Hosting websites on foreign platforms.</li>
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