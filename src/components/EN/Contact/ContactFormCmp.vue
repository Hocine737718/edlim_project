<template>
    <form @submit.prevent="action" method="POST" class="contact_form"  style="--j:4">
        <input type="text" class="contact_input" name="name" placeholder="Your Name" id="name" v-model="this.name" required>
        <input type="email" class="contact_input" name="email" placeholder="Email" id="email" v-model="this.email" required>
        <div class="contact_areas">
          <textarea name="message" rows="6" class="contact_input contact_area" id="message" placeholder="Message" v-model="this.message" required></textarea>
        </div>
        <button type="submit" class="contact_button">
          Send
        </button>
    </form>
</template>
<script>
export default {
  name: "ContactFormCmp",
  data(){
    return{
      name:"",
      email:"",
      message:""
    }
  },
  methods:{
        reset(){
            this.name="";
            this.email="";
            this.message="";
        }, 
        async action(){
            if(this.name!="" && this.email!="" && this.message!="" ){
              this.$storeEN.dispatch('contact',{name:this.name,email:this.email,message:this.message});
              this.reset();
            }
        }
    }    
}
</script>