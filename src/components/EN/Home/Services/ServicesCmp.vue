<template>
    <div class="home_services" id="home_services">
        <div class="services_header">
            <span>SERVICES</span>
            <h2>How can we assist you?</h2>
        </div>
        <div class="services_cards">
            <CardService :img="card1.img" :header="card1.header" :body="card1.body" :lien="card1.lien" id="srv_card1"/>
            <CardService :icon="card2.icon" :header="card2.header" :body="card2.body" :lien="card2.lien" id="srv_card2"/>
            <CardService :icon="card3.icon" :header="card3.header" :body="card3.body" :lien="card3.lien" id="srv_card3"/>
            <CardService :icon="card4.icon" :header="card4.header" :body="card4.body" :lien="card4.lien" id="srv_card4"/>
            <div id="srv_card0">&nbsp;</div>
            <CardService :img="card5.img" :header="card5.header" :body="card5.body" :lien="card5.lien" id="srv_card5"/>
        </div>
    </div>
</template>

<script>
import CardService from '@/components/EN/Home/Services/CardServiceCmp.vue';
import ScrollReveal from 'scrollreveal';
import '@/assets/css/Home/Services/services.css'
import '@/assets/css/Home/Services/media_services.css'
export default {
    name: 'ServicesCmp',
    components:{
        CardService
    },
    data(){
        return{
            card1:{ img:"icons8-law-32.png",
                    header:"Legal Counseling & Debt Recovery",
                    body:"Thanks to our in-depth expertise in the field of jurisprudence, we offer a comprehensive range of legal services to meet the varied needs of our clients...",
                    lien:"/en/article/legal-advice"
                  },
            card2:{ icon:"ri-team-fill",
                    header:"Human Resources",
                    body:"The social legislation encompasses a wide range of services aimed at supporting businesses in their human resources management and compliance with labor and social security laws...",
                    lien:"/en/article/human-resources"
                  },
            card3:{ icon:"ri-bank-fill",
                    header:"Banking & Assistance",
                    body:"We are attentive to the latest developments in the monetary market and the fields of laws that dominate the banking sector...",
                    lien:"/en/article/bank"
                  },
            card4:{ icon:"ri-calculator-line",
                    header:"Accounting & Declaration Processing",
                    body:"Our dynamic team of experts, based on their many years of experience in various accounting firms...",
                    lien:"/en/article/accounting"
                  },
            card5:{ img:"world-wide-web.png",
                    header:"Web Development",
                    body:"We offer website creation as well as customization of domain names, along with hosting these websites on foreign platforms...",
                    lien:"/en/article/web-development"
                  },
        }
    },
    mounted(){
        const sr = ScrollReveal({
            origin: 'left',
            distance: '60px',
            duration: 2500,
            delay: 400
        })
        sr.reveal(`#srv_card1`);
        sr.reveal(`#srv_card2`, {delay: 800});
        sr.reveal(`#srv_card3`, {delay: 1200});
        sr.reveal(`#srv_card4`, {delay: 1600});
        sr.reveal(`#srv_card5`, {delay: 2000});
    }
}
</script>