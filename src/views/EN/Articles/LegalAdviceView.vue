<template>
    <div class="article legal_advice">
        <div class="article_header">
            <div class="article_title">
                <div>
                    <span style="--i:1">L</span>
                    <span style="--i:2">E</span>
                    <span style="--i:3">G</span>
                    <span style="--i:4">A</span>
                    <span style="--i:5">L</span>
                    <span style="--i:6">&nbsp;</span>
                    <span style="--i:7">C</span>
                    <span style="--i:8">O</span>
                    <span style="--i:9">U</span>
                    <span style="--i:10">N</span>
                    <span style="--i:11">S</span>
                    <span style="--i:12">E</span>
                    <span style="--i:13">I</span>
                    <span style="--i:14">L</span>
                    <span style="--i:15">&nbsp;</span>
                </div>
                <div>
                    &
                </div>
                <div>
                    <span style="--i:18">D</span>
                    <span style="--i:19">E</span>
                    <span style="--i:20">B</span>
                    <span style="--i:21">T</span>
                    <span style="--i:22">&nbsp;</span>
                    <span style="--i:23">R</span>
                    <span style="--i:24">E</span>
                    <span style="--i:25">C</span>
                    <span style="--i:26">O</span>
                    <span style="--i:27">V</span>
                    <span style="--i:28">E</span>
                    <span style="--i:29">R</span>
                    <span style="--i:30">Y</span>                   
                    <span style="--i:31">&nbsp;</span> 
                </div>
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_img">
                <img src="@/assets/img/Articles/legal-advice.png" alt="">
            </div>
            <div class="article_content">
                <p>&nbsp;&nbsp;<i class="ri-shining-fill"></i>&nbsp;Thanks to our expertise in the field of jurisprudence, we offer you:</p>
                <ul class="article_list">
                    <li style="--j:1">Counsel and guidance</li>
                    <li style="--j:2">Drafting of complaints, petitions, and notices.</li>
                    <li style="--j:3">Drafting of Orders and requests on behalf of various administrations.</li>
                    <li style="--j:4">Dispute management.</li>
                    <li style="--j:5">Drafting of all types of contracts.</li> 
                    <li style="--j:6">We will ensure the debt recovery aspect for businesses.</li>
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