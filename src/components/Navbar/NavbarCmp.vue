<template>
<header class="header">
  <nav class="nav_container">
    <div class="nav_data">
      <RouterLink to="#" class="nav_logo" @click="reload()">
        <img src="../../assets/img/logo.png" alt="Logo">
      </RouterLink> 
      <div class="nav_toggle" id="nav-toggle">
        <i class="ri-menu-line nav_burger"></i>
        <i class="ri-close-line nav_close"></i>
      </div>
    </div>

    <div class="nav_menu" id="nav-menu">
      <ul class="nav_list">
        <li>
          <RouterLink to="/" class="nav_link">{{$t('Accueil')}}</RouterLink>
        </li>

        <li class="dropdown_item">
          <RouterLink to="/qui-somme-nous" class="nav_link">
            {{$t('Qui sommes-nous')}} <i class="ri-arrow-down-s-line dropdown_arrow"></i>
          </RouterLink>
          <ul class="dropdown_menu">
            <li>
              <RouterLink to="/qui-somme-nous" class="dropdown_link">
                {{$t('Présentation')}}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/statistiques" class="dropdown_link">
                {{$t('Statistiques')}}
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="dropdown_item">
          <div class="nav_link">
            {{$t('Nos préstations')}} <i class="ri-arrow-down-s-line dropdown_arrow"></i>
          </div>
          <ul class="dropdown_menu">
            <li class="dropdown_subitem">
              <RouterLink to="/article/ressources-humaines" class="dropdown_link">{{$t('Ressources Humaines')}}</RouterLink>
            </li>
            <li class="dropdown_subitem">
              <RouterLink to="/article/conseil-juridique" class="dropdown_link">{{$t('Conseil Juridique & Recouvrement')}}</RouterLink>
            </li>
            <li class="dropdown_subitem">
              <RouterLink to="/article/banque"  class="dropdown_link">{{$t('Banque & Assistance')}}</RouterLink>
            </li>
            <li class="dropdown_subitem">
              <RouterLink to="/article/comptabilite" class="dropdown_link">{{$t('Comptabilité & traitement des déclarations')}}</RouterLink>
            </li>
            <li class="dropdown_subitem">
              <RouterLink to="/article/developpement-web" class="dropdown_link">{{$t('Conception de site web')}}</RouterLink>
            </li>
          </ul>
        </li>

        <li class="dropdown_item">
          <div class="nav_link">
            {{$t('Recrutement')}} <i class="ri-arrow-down-s-line dropdown_arrow"></i>
          </div>
          <ul class="dropdown_menu">
            <li>
              <RouterLink to="/offres-emploi" class="dropdown_link">
                {{$t('Offres d\'emploi')}}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/candidature-spontanee" class="dropdown_link">
                {{$t('Candidature spontanée')}}
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="dropdown_item">
          <div class="nav_link">
            {{$t('Téléchargement')}} <i class="ri-arrow-down-s-line dropdown_arrow"></i>
          </div>
          <ul class="dropdown_menu">
            <li>
              <RouterLink to="#" class="dropdown_link" @click="download('Droit de Travail.pdf')">
                {{$t('Droit de Travail')}}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="#" class="dropdown_link" @click="download('Droit de la securite sociale.pdf')">
                {{$t('Droit de la securite sociale')}}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="#" class="dropdown_link" @click="download('Séminaires.pdf')">
                {{$t('Séminaires')}}
              </RouterLink>
            </li>
          </ul>
        </li>

        <li>
          <RouterLink to="/contact" class="nav_link">{{$t('Contact')}}</RouterLink>
        </li>

        <li class="dropdown_item">
          <div class="nav_link">
            {{$t('Langues')}} <i class="ri-arrow-down-s-line dropdown_arrow"></i>
          </div>
          <ul class="dropdown_menu">
            <li @click="toAR()">
              <RouterLink to="/" class="dropdown_link">
                {{$t('Arabe')}}
              </RouterLink>
            </li>
            <li @click="toFR()">
              <RouterLink to="/" class="dropdown_link">
                {{$t('Français')}}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/en" class="dropdown_link">
                {{$t('Anglais')}}
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</header>
</template>

<script>
import '@/assets/css/Navbar/navbar.css'
import '@/assets/css/Navbar/media_navbar.css'
export default {
  name: 'NavbarCmp',
  methods:{
    reload(){
      location.reload();
    },
    async download(filename){
      this.$store.dispatch('download',filename);
    },
    toAR(){
      document.getElementsByTagName('body')[0].classList.add('rtl');
      this.$i18n.locale = 'AR';
    },
    toFR(){
      document.getElementsByTagName('body')[0].classList.remove('rtl');
      this.$i18n.locale = 'FR';
    }
  },
  mounted(){
    const showMenu = (toggleId, navId) =>{
      const toggle = document.getElementById(toggleId),nav = document.getElementById(navId);
      toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
      })
    };
    showMenu('nav-toggle','nav-menu');

    Array.from(document.getElementsByClassName('dropdown_add')).forEach(e => {
        e.addEventListener('click', () => {
            const subItem = e.parentNode.parentNode;

            Array.from(document.getElementsByClassName('dropdown_subitem')).forEach(item=>{
              if(item!=subItem) item.classList.remove('active_dp');
            });
            
            if (!subItem.classList.contains('active_dp')) {
                subItem.classList.add('active_dp');   
            } 
            else {
                subItem.classList.remove('active_dp');   
            }
        });
    });
  }
}
</script>
