<template>
    <div class="article bank">
        <div class="article_header">
            <div class="article_title">
                <div>
                    <span style="--i:1">B</span>
                    <span style="--i:2">A</span>
                    <span style="--i:3">N</span>
                    <span style="--i:4">K</span>
                    <span style="--i:5">I</span>
                    <span style="--i:6">N</span>
                    <span style="--i:7">G</span>            
                </div>
                <div>
                    &amp;
                </div>
                <div>
                    <span style="--i:9">A</span> 
                    <span style="--i:10">S</span> 
                    <span style="--i:11">S</span> 
                    <span style="--i:12">I</span> 
                    <span style="--i:13">S</span>
                    <span style="--i:14">T</span>
                    <span style="--i:15">A</span>
                    <span style="--i:16">N</span>   
                    <span style="--i:17">C</span>    
                    <span style="--i:18">E</span>   
                </div>

            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_img">
                <img src="@/assets/img/Articles/bank.png" alt="">
            </div>
            <div class="article_content">
                <p>&nbsp;&nbsp;<i class="ri-arrow-right-s-line"></i>&nbsp;We are attentive to the latest developments in the monetary market and the fields of laws that dominate the banking sector, due to our years of experience in this segment:</p>
                <ul class="article_list">
                    <li style="--j:1">We will provide coaching for companies operating in the IMPORT-EXPORT sector.</li>
                    <li style="--j:2">We will provide support in the processing of technical-commercial studies.</li>
                    <li style="--j:3">We will provide support in processing financial documents such as balance sheet analysis or financial studies.</li>
                    <li style="--j:4">We will provide advice regarding the process of establishing relationships with financial institutions, tailored to the needs and competitiveness of the companies.</li>
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