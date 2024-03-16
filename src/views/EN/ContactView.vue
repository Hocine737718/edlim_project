<template>
    <div class="contact">
        <div class="contact_header">
            <div class="contact_title">
                <div>
                    <span style="--i:1">C</span>
                    <span style="--i:2">O</span>
                    <span style="--i:3">N</span>
                    <span style="--i:4">T</span>
                    <span style="--i:5">A</span>
                    <span style="--i:6">C</span>
                    <span style="--i:7">T</span>
                    <span style="--i:7">&nbsp;</span>
                    <span style="--i:9">U</span> 
                    <span style="--i:10">S</span>                      
                </div>
            </div>
        </div>
        <div class="contact_body" id="contact_body">
            <h3 class="contact_intro">We will be happy to count you among our first clients, and of course, the first ones will receive free quotes and a 10% discount on the first service.</h3>
            <div  class="contact_content">
                <div class="contact_data">
                    <div class="contact_info">
                            <h3 class="contact_subtitle" style="--j:1">We are reachable at the following numbers:</h3>
                            <span class="contact_description" style="--j:1">
                                <i class="ri-phone-line contact_icon"></i>
                                0555 645 139 / 0676 760 330                            
                            </span>
                            <h3 class="contact_subtitle"  style="--j:2">Or by the following email:</h3>
                            <span  class="contact_description"  style="--j:2">
                                <i class="ri-mail-line contact_icon"></i>
                                contact@edlim-dz.com                        
                            </span>
                            <h3 class="contact_subtitle"  style="--j:3">Alternatively, you are welcome to visit us at our address:</h3>
                            <span class="contact_description"  style="--j:3">
                                <i class="ri-map-pin-fill"></i>
                                30, Ben Chaoua City, Kheraisia, Algiers 16000 
                            </span>
                    </div>
                </div>
                <ContactFormCmp/>
            </div>
        </div>
    </div>
    <div class="contact_map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12801.957714231583!2d2.9886047987491025!3d36.66273176927279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128faeb5c2ec10d5%3A0xabfeb67932bb828a!2sBen%20Chaoua%2C%20Khraicia!5e0!3m2!1sfr!2sdz!4v1709549550985!5m2!1sfr!2sdz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
</template>
<script>
import ContactFormCmp from '@/components/EN/Contact/ContactFormCmp.vue';
import '@/assets/css/Contact/contact.css';
import '@/assets/css/Contact/media_contact.css';
export default {
    name:'ContactView',
    components:{ContactFormCmp}
}
</script>