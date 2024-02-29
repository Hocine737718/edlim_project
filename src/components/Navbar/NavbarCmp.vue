<template>
<header class="header">
  <nav class="nav_container">
    <div class="nav_data">
      <a href="#" class="nav_logo" @click="reload()">
        <img src="../../assets/img/logo.png" alt="Logo">
      </a> 
      <div class="nav_toggle" id="nav-toggle">
        <i class="ri-menu-line nav_burger"></i>
        <i class="ri-close-line nav_close"></i>
      </div>
    </div>

    <div class="nav_menu" id="nav-menu">
      <ul class="nav_list">
        <li>
          <a href="/" class="nav_link">Accueil</a>
        </li>

        <li class="dropdown_item">
          <a href="/qui-somme-nous" class="nav_link">
            Qui sommes-nous <i class="ri-arrow-down-s-line dropdown_arrow"></i>
          </a>
          <ul class="dropdown_menu">
            <li>
              <a href="/qui-somme-nous" class="dropdown_link">
                Présentation
              </a>
            </li>
            <li>
              <a href="/statistiques" class="dropdown_link">
                Statistiques
              </a>
            </li>
          </ul>
        </li>

        <li class="dropdown_item">
          <div class="nav_link">
            Nos préstations <i class="ri-arrow-down-s-line dropdown_arrow"></i>
          </div>
          <ul class="dropdown_menu">
            <li class="dropdown_subitem">
              <a href="/article/ressources-humaines" class="dropdown_link">Ressources Humaines</a>
            </li>
            <li class="dropdown_subitem">
              <a href="/article/conseil-juridique" class="dropdown_link"> Conseil Juridique </a>
            </li>
            <li class="dropdown_subitem">
              <a href="/article/banque"  class="dropdown_link">Banque et Assistance </a>
            </li>
            <li class="dropdown_subitem">
              <a href="/article/comptabilite" class="dropdown_link"> Comptabilité </a>
            </li>
            <li class="dropdown_subitem">
              <a href="/article/developpement-web" class="dropdown_link"> Conception de site web  </a>
            </li>
          </ul>
        </li>

        <li class="dropdown_item">
          <div class="nav_link">
            Recrutement <i class="ri-arrow-down-s-line dropdown_arrow"></i>
          </div>
          <ul class="dropdown_menu">
            <li>
              <a href="/offres-emploi" class="dropdown_link">
                Offres d'emploi
              </a>
            </li>
            <li>
              <a href="/candidature-spontanee" class="dropdown_link">
                Candidature spontanée
              </a>
            </li>
          </ul>
        </li>

        <li class="dropdown_item">
          <div class="nav_link">
            Téléchargement <i class="ri-arrow-down-s-line dropdown_arrow"></i>
          </div>
          <ul class="dropdown_menu">
            <li>
              <a href="#" class="dropdown_link" @click="download('Droit de Travail.pdf')">
                Droit de Travail
              </a>
            </li>
            <li>
              <a href="#" class="dropdown_link" @click="download('Droit de la securite sociale.pdf')">
                Droit de la securite sociale
              </a>
            </li>
            <li>
              <a href="#" class="dropdown_link" @click="download('Séminaires.pdf')">
                Séminaires
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/contact" class="nav_link">Contact</a>
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
