<template>
    <div class="article accounting">
        <div class="article_header">
            <div class="article_title">
                <div>
                    <span style="--i:1">A</span>
                    <span style="--i:2">C</span>
                    <span style="--i:3">C</span>
                    <span style="--i:4">O</span>
                    <span style="--i:5">U</span>
                    <span style="--i:6">N</span>
                    <span style="--i:7">T</span>
                    <span style="--i:8">I</span>
                    <span style="--i:9">N</span>
                    <span style="--i:10">G</span> 
                    <span style="--i:11">&nbsp;</span> 
                </div>
                <div>
                    &amp;
                </div>
                <div>
                    <span style="--i:15">D</span>
                    <span style="--i:16">E</span>
                    <span style="--i:17">C</span>
                    <span style="--i:18">L</span>
                    <span style="--i:19">A</span>
                    <span style="--i:20">R</span>
                    <span style="--i:21">A</span>
                    <span style="--i:22">T</span>
                    <span style="--i:23">I</span>
                    <span style="--i:24">O</span>
                    <span style="--i:25">N</span>
                    <span style="--i:26">&nbsp;</span>
                    <span style="--i:27">P</span>
                    <span style="--i:28">R</span>
                    <span style="--i:29">O</span>
                    <span style="--i:30">C</span>
                    <span style="--i:31">E</span>
                    <span style="--i:32">S</span>
                    <span style="--i:33">S</span>
                    <span style="--i:34">I</span>
                    <span style="--i:35">N</span>
                    <span style="--i:36">G</span>
                </div>
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_img">
                <img src="@/assets/img/Articles/accounting.png" alt="">
            </div>
            <div class="article_content">
                <p>&nbsp;&nbsp;<i class="ri-play-fill"></i>&nbsp;Our dynamic team of experts, based on their many years of experience in various accounting firms, aims to take on the heaviest burden for businesses to anticipate their financial health:</p>
                <ul class="article_list">
                    <li style="--j:1">Audit.</li>
                    <li style="--j:2">We will handle monthly Jibayatic's declarations.</li>
                    <li style="--j:3">Annual salary declarations DAS,301BIS/G29.</li>
                    <li style="--j:4">Recording cash and bank transactions and reconciliation statements.</li>
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