<template>
    <div class="article hr">
        <div class="article_header">
            <div class="article_title">
                <div>
                    <span style="--i:1">H</span>
                    <span style="--i:2">U</span>
                    <span style="--i:3">M</span>
                    <span style="--i:4">A</span>
                    <span style="--i:5">N</span>
                    <span style="--i:5">&nbsp;</span>                     
                </div>
                <div>
                    <span style="--i:7">R</span>
                    <span style="--i:8">E</span>
                    <span style="--i:9">S</span>
                    <span style="--i:10">O</span>
                    <span style="--i:11">U</span>
                    <span style="--i:12">R</span>
                    <span style="--i:13">C</span>
                    <span style="--i:14">E</span>
                    <span style="--i:15">S</span> 
                    <span style="--i:16">&nbsp;</span>                  
                </div>
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_img">
                <img src="@/assets/img/Articles/hr.png" alt="">
            </div>
            <div class="article_content">
                <p>&nbsp;&nbsp;<i class="ri-check-line">&nbsp;</i>Social legislation, which includes the following chapters:</p>
                <ul class="article_list">
                    <li style="--j:1">Payroll management.</li>
                    <li style="--j:2">Management of recruitment procedures and worker placements.</li>
                    <li style="--j:3">Preparation of employment contracts in all their forms.</li>
                    <li style="--j:4">Consultation on labor law and social security.</li>
                    <li style="--j:5">Establishment of salary scales.</li>
                    <li style="--j:6">Establishment of job classification.</li> 
                    <li style="--j:7">Establishment of HR procedures.</li>
                    <li style="--j:8">HR and social audits.</li>
                    <li style="--j:9">Management of expatriates "from visa applications to work permits and social declarations".</li>
                    <li style="--j:10">Drafting of correspondence for various government agencies.</li>
                    <li style="--j:11">Training of employees in payroll and HR field.</li>
                    <li style="--j:12">Social correspondence.</li>
                    <li style="--j:13">Counseling and coaching of current employees to prepare them for the business world.</li>
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