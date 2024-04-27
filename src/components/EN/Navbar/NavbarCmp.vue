<template>
<header class="header">
  <nav class="nav_container">
    <div class="nav_data">
      <a href="#" class="nav_logo" @click="reload()">
        <img src="../../../assets/img/logo.png" alt="Logo">
      </a> 
      <div class="nav_toggle" id="nav-toggle">
        <i class="ri-menu-line nav_burger"></i>
        <i class="ri-close-line nav_close"></i>
      </div>
    </div>

    <div class="nav_menu" id="nav-menu">
      <ul class="nav_list">
        <li>
          <a href="/en" class="nav_link">Home</a>
        </li>

        <li class="dropdown_item">
          <a href="/en/about-us" class="nav_link">
            About Us <i class="ri-arrow-down-s-line dropdown_arrow"></i>
          </a>
          <ul class="dropdown_menu">
            <li>
              <a href="/en/about-us" class="dropdown_link">
                Presentation
              </a>
            </li>
            <li>
              <a href="/en/statistics" class="dropdown_link">
                Statistics
              </a>
            </li>
          </ul>
        </li>

        <li class="dropdown_item">
          <div class="nav_link">
            Our services <i class="ri-arrow-down-s-line dropdown_arrow"></i>
          </div>
          <ul class="dropdown_menu">
            <li class="dropdown_subitem">
              <a href="/en/article/human-resources" class="dropdown_link">Human Resources</a>
            </li>
            <li class="dropdown_subitem">
              <a href="/en/article/legal-advice" class="dropdown_link">Legal Counseling & Debt Recovery</a>
            </li>
            <li class="dropdown_subitem">
              <a href="/en/article/bank"  class="dropdown_link">Banking & Assistance</a>
            </li>
            <li class="dropdown_subitem">
              <a href="/en/article/accounting" class="dropdown_link">Accounting & Declaration Processing</a>
            </li>
            <li class="dropdown_subitem">
              <a href="/en/article/web-development" class="dropdown_link">Web Development</a>
            </li>
          </ul>
        </li>

        <li class="dropdown_item">
          <div class="nav_link">
            Recruitment <i class="ri-arrow-down-s-line dropdown_arrow"></i>
          </div>
          <ul class="dropdown_menu">
            <li>
              <a href="/en/job-offers" class="dropdown_link">
                Job Offers
              </a>
            </li>
            <li>
              <a href="/en/application-form" class="dropdown_link">
                Application Form
              </a>
            </li>
          </ul>
        </li>

        <li class="dropdown_item">
          <div class="nav_link">
            Downloads <i class="ri-arrow-down-s-line dropdown_arrow"></i>
          </div>
          <ul class="dropdown_menu">
            <li>
              <a href="#" class="dropdown_link" @click="download('Droit de Travail.pdf')">
                Labor Law
              </a>
            </li>
            <li>
              <a href="#" class="dropdown_link" @click="download('Droit de la securite sociale.pdf')">
                Social Security Law
              </a>
            </li>
            <li>
              <a href="#" class="dropdown_link" @click="download('Séminaires.pdf')">
                Seminars
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="/en/contact" class="nav_link">Contact</a>
        </li>

        <li class="dropdown_item">
          <div class="nav_link">
            Languages<i class="ri-arrow-down-s-line dropdown_arrow"></i>
          </div>
          <ul class="dropdown_menu">
            <li @click="toAR()">
              <RouterLink to="/" class="dropdown_link">
                Arabic
              </RouterLink>
            </li>
            <li @click="toFR()">
              <RouterLink to="/" class="dropdown_link">
                French
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/en" class="dropdown_link">
                English
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
      document.getElementById('nav-menu').classList.add('rtl');
      document.getElementById('footer_container').classList.add("rtl");
      this.$i18n.locale = 'AR';
    },
    toFR(){
      document.getElementById('nav-menu').classList.remove('rtl');
      document.getElementById('footer_container').classList.remove("rtl");
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
