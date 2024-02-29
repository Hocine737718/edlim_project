<template>
    <div class="home_services" id="home_services">
        <div class="services_header">
            <span>SERVICES</span>
            <h2>Comment pouvons-nous vous aider ?</h2>
        </div>
        <div class="services_cards">
            <CardService :img="card1.img" :header="card1.header" :body="card1.body" :lien="card1.lien" id="srv_card1"/>
            <CardService :icon="card2.icon" :header="card2.header" :body="card2.body" :lien="card2.lien" id="srv_card2"/>
            <CardService :icon="card3.icon" :header="card3.header" :body="card3.body" :lien="card3.lien" id="srv_card3"/>
        </div>
    </div>
</template>

<script>
import CardService from '@/components/Home/Services/CardServiceCmp.vue';
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
                    header:"Conseil Juridique",
                    body:"Grâce à notre expertise pointue dans le domaine des jurisprudences, nous proposons une gamme complète de services juridiques pour répondre aux besoins variés de nos clients...",
                    lien:"/article/conseil-juridique"
                  },
            card2:{ icon:"ri-team-fill",
                    header:"Ressources Humaines",
                    body:"La législation sociale englobe une gamme variée de services visant à soutenir les entreprises dans leur gestion des ressources humaines et leur conformité aux lois du travail et de la sécurité sociale...",
                    lien:"/article/ressources-humaines"
                  },
            card3:{ icon:"ri-bank-fill",
                    header:"Banque et Assistance",
                    body:"Nous sommes à l’écoute des nouveautés du marché monétaires et les champs des lois en implications et qui domine le secteur bancaire...",
                    lien:"/article/banque"
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
    }
}
</script>