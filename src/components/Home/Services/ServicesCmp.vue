<template>
    <div class="home_services" id="home_services">
        <div class="services_header">
            <span>{{$t('SERVICES')}}</span>
            <h2>{{$t('Comment pouvons-nous vous aider ?')}}</h2>
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
                    header:"Conseil Juridique & Recouvrement",
                    body:"Grâce à notre expertise pointue dans le domaine des jurisprudences, nous proposons une gamme complète de services juridiques pour répondre aux besoins variés de nos clients...",
                    lien:"/article/conseil-juridique"
                  },
            card2:{ icon:"ri-team-fill",
                    header:"Ressources Humaines",
                    body:"La législation sociale englobe une gamme variée de services visant à soutenir les entreprises dans leur gestion des ressources humaines et leur conformité aux lois du travail et de la sécurité sociale...",
                    lien:"/article/ressources-humaines"
                  },
            card3:{ icon:"ri-bank-fill",
                    header:"Banque & Assistance",
                    body:"Nous sommes à l’écoute des nouveautés du marché monétaires et les champs des lois en implications et qui domine le secteur bancaire...",
                    lien:"/article/banque"
                  },
            card4:{ icon:"ri-calculator-line",
                    header:"Comptabilité & traitement des déclarations",
                    body:"Notre équipe d’expert dynamique, basée sur leurs longues années d’expériences dans les différents cabinets de comptabilités...",
                    lien:"/article/comptabilite"
                  },
            card5:{ img:"world-wide-web.png",
                    header:"Conception des sites web",
                    body:"Nous proposons la création de sites web ainsi que la personnalisation des noms de domaine, ainsi que l'hébergement de ces sites sur des plateformes étrangères...",
                    lien:"/article/developpement-web"
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