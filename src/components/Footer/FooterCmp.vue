<template>
    <footer class="footer">
        <div class="footer_container">
            <div class="footer_row footer_first_row">
                <div class="footer_col">
                    <h2>{{$t('Sociales')}}</h2>
                    <div class="footer_socials">
                        <RouterLink to="https://www.facebook.com/" target="_blank"><i class="ri-facebook-box-fill"></i></RouterLink>
                        <RouterLink to="https://www.instagram.com/" target="_blank"><i class="ri-instagram-fill"></i></RouterLink>
                        <RouterLink to="https://twitter.com/" target="_blank"><i class="ri-twitter-x-fill"></i></RouterLink>
                    </div>
                </div>
                <div class="footer_col">
                    <h2>{{$t('Informations')}}</h2>
                    <div  class="footer_infos">
                        <div  class="footer_info">
                            <i class="ri-home-2-fill"></i>
                            <span>{{$t('30, Cité Ben Chaoua, Kheraisia,')}}<br> {{$t('Alger, Algérie')}}</span>
                        </div>
                        <div  class="footer_info">
                            <i class="ri-phone-fill"></i>
                            <span>0555 645 139 / 0676 760 330</span>
                        </div>
                        <div  class="footer_info">
                            <i class="ri-mail-fill"></i>
                            <RouterLink to="mailto:contact@edlim-dz.com">contact@edlim-dz.com</RouterLink>
                        </div>                        
                    </div>
                </div>
                <div class="footer_col">
                    <h2>{{$t('Téléchagements')}}</h2>
                    <div class="footer_links">
                        <RouterLink to="#"  @click="download('Droit de Travail.pdf')" >{{$t('Droit de Travail')}}</RouterLink>
                        <RouterLink to="#" @click="download('Droit de la securite sociale.pdf')">{{$t('Droit de la securite sociale')}}</RouterLink>
                        <RouterLink to="#" @click="download('Séminaires.pdf')">{{$t('Séminaires')}} </RouterLink>
                    </div>
                </div>
                <div class="footer_col">
                    <h2>{{$t('Raccourcis')}}</h2>
                    <div class="footer_links">
                        <RouterLink to="/">{{$t('Accueil')}}</RouterLink>
                        <RouterLink to="/qui-somme-nous">{{$t('Qui sommes-nous')}}</RouterLink>
                        <RouterLink to="/statistiques">{{$t('Statistiques')}}</RouterLink>
                        <RouterLink to="/contact">{{$t('Contact')}}</RouterLink>
                    </div>
                </div>
            </div>
            <div class="footer_row">
                <p class="copyright">
                    Copyright ©
                    {{this.year}}
                    {{$t('EURL EL DJAZAIRIA LIKHADAMAT EL IDARIA MOUTAADIDA')}}
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