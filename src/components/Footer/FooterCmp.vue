<template>
    <footer class="footer">
        <div class="footer_container">
            <div class="footer_row footer_first_row">
                <div class="footer_col">
                    <h2>Sociales</h2>
                    <div class="footer_socials">
                        <a href="https://www.facebook.com/" target="_blank"><i class="ri-facebook-box-fill"></i></a>
                        <a href="https://www.instagram.com/" target="_blank"><i class="ri-instagram-fill"></i></a>
                        <a href="https://twitter.com/" target="_blank"><i class="ri-twitter-x-fill"></i></a>
                    </div>
                </div>
                <div class="footer_col">
                    <h2>Informations</h2>
                    <div  class="footer_infos">
                        <div  class="footer_info">
                            <i class="ri-home-2-fill"></i>
                            <span>30, Cité Ben Chaoua, Kheraisia,<br> Alger, Algérie</span>
                        </div>
                        <div  class="footer_info">
                            <i class="ri-phone-fill"></i>
                            <span>0555 645 139 / 0676 760 330</span>
                        </div>
                        <div  class="footer_info">
                            <i class="ri-mail-fill"></i>
                            <a href="mailto:contact@edlim-dz.com">contact@edlim-dz.com</a>
                        </div>                        
                    </div>
                </div>
                <div class="footer_col">
                    <h2>Téléchagements</h2>
                    <div class="footer_links">
                        <a href="#"  @click="download('Droit de Travail.pdf')" >Droit de travail</a>
                        <a href="#" @click="download('Droit de la securite sociale.pdf')">Droit de la sécurité sociale</a>
                        <a href="#" @click="download('Séminaires.pdf')">Séminaires </a>
                    </div>
                </div>
                <div class="footer_col">
                    <h2>Raccourcis</h2>
                    <div class="footer_links">
                        <a href="/">Accueil</a>
                        <a href="/qui-somme-nous">Qui sommes nous</a>
                        <a href="/statistiques">Statistiques</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            </div>
            <div class="footer_row">
                <p class="copyright">
                    Copyright ©
                    {{this.year}}
                    EURL EL DJAZAIRIA LIKHADAMAT EL IDARIA MOUTAADIDA
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
import '@/assets/css/Footer/footer.css';
import '@/assets/css/Footer/media_footer.css';
export default {
    name: 'FooterCmp',
    data(){
        return{
            year: new Date().getFullYear()
        }
    },
    methods:{
        async download(filename){
            this.$store.dispatch('download',filename);
        }
    }
}
</script>