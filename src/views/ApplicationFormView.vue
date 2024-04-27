<template>
    <div class="application">
        <div class="application_header" id="application_header">
            <div class="application_title" v-if="this.$i18n.locale != 'AR'">
                <div>
                    <span style="--i:1">F</span>
                    <span style="--i:2">O</span>
                    <span style="--i:3">R</span>
                    <span style="--i:4">M</span>
                    <span style="--i:5">U</span>
                    <span style="--i:6">L</span>
                    <span style="--i:7">A</span>
                    <span style="--i:8">I</span>
                    <span style="--i:9">R</span>
                    <span style="--i:10">E</span>
                    <span style="--i:11">&nbsp;</span>
                </div>
                <div>
                    <span style="--i:15">D</span>
                    <span style="--i:16">E</span>
                    <span style="--i:17">&nbsp;</span>                    
                </div>
                <div>
                    <span style="--i:21">C</span>
                    <span style="--i:22">A</span>
                    <span style="--i:23">N</span>
                    <span style="--i:24">D</span>
                    <span style="--i:25">I</span>
                    <span style="--i:26">D</span>
                    <span style="--i:27">A</span>
                    <span style="--i:28">T</span>
                    <span style="--i:29">U</span>
                    <span style="--i:30">R</span>
                    <span style="--i:31">E</span>
                </div>
            </div>
            <div class="application_title" v-if="this.$i18n.locale == 'AR'">
                {{ $t('Candidature spontanée') }}
            </div>
            <p>
                {{$t('Veuillez remplir ce formulaire en complétant tous les champs requis. Nous vous contacterons dès que possible.')}}
            </p>
        </div>
        <div class="application_body" id="application_body">
            <div class="application_box">
                <div class="application_label">
                    {{$t('Nom et Prénom:')}}<span class="required">&ast;</span>
                </div>
                <input class="application_input" type="text" v-model="name" required>
            </div>
            <div class="application_box">
                <div class="application_label">
                    {{$t('Mail:')}}<span class="required">&ast;</span>
                </div>
                <input class="application_input" type="email" v-model="email" required>
            </div>
            <div class="application_box">
                <div class="application_label">
                    {{$t('Téléphone:')}}<span class="required">&ast;</span>
                </div>
                <input class="application_input" type="text" v-model="phone" required>
            </div>
            <div class="application_box">
                <div class="application_label">
                    {{$t('Fonction:')}}<span class="required">&ast;</span>
                </div>
                <input class="application_input" type="text" v-model="job" required>
            </div>
            <div class="application_box">
                <div class="application_label">
                    {{$t('Message:')}}<span class="required">&ast;</span>
                </div>
                <textarea class="application_input  textarea" cols="30" rows="10" v-model="message" required></textarea>
            </div>
            <div class="application_box">
                <div class="application_label">
                    {{$t('Joindre CV:')}}<span class="required">&ast;</span>
                </div>
                <span>
                    <div class="application_file">
                        <button @click="selectFile()">
                            <i class="ri-file-upload-fill"></i>
                            {{$t('Parcourir')}}
                        </button>
                        <input type="file" id="file_input" @change="onFileChange($event)" style="display:none;">
                        <small>{{this.filename}}</small>
                    </div>
                    <small>{{$t('La taille limite pour chaque fichier est de 20 MB')}}</small>
                </span>
            </div>                       
        </div>
        <div class="applcation_footer">
            <button @click="action()">
                {{$t('Postuler')}}
            </button>
        </div>
    </div>
</template>
<script>
import {select_file,handleFileChange,validateEmail,validatePhone} from '@/assets/js/global.js';
import Swal from 'sweetalert2';
import '@/assets/css/Application/application.css'
import '@/assets/css/Application/media_application.css'
import '@/assets/css/Application/select_application.css'
import $ from 'jquery';
export default {
    name:'ApplicationFormView',
    data(){
        return{
            name:"",
            email:"",
            phone:"",
            job:"",
            message:"",
            selected_file:""
        }
    },
    computed:{
        filename(){
            if(this.selected_file!="") return this.selected_file.name;
            else return this.$t('Aucun fichier sélectionné');
        }
    },
    methods:{
        selectFile(){
            select_file("file_input");
        },
        onFileChange(event){
            handleFileChange(event).then((file) => {
                this.selected_file = file;
            });
        },
        reset(){
            this.name="";
            this.email="";
            this.phone="";
            this.job="";
            this.message="";
            this.selected_file="";
        },
        action(){
            this.name=this.name.trim();
            this.email=this.email.trim();
            this.phone=this.phone.trim();
            this.message=this.message.trim();
            this.job=this.job.trim();

            if(this.name!="" && validateEmail(this.email)!="" && this.message!="" && validatePhone(this.phone)!="" && this.job!="" && this.selected_file!="") 
            {
                var data={name:this.name,email:this.email,phone:this.phone,job:this.job,message:this.message};
                this.$store.dispatch('job_application',{data:data,file:this.selected_file});
                this.reset();
            }
            else if(!validateEmail(this.email))
            {
                Swal.fire({
                    icon: "error",title: "Erreur",text: "Revérifier l'email !",
                });
            }
            else if(!validatePhone(this.phone))
            {
                Swal.fire({
                    icon: "error",title: "Erreur",text: "Revérifier le numéro de téléphone !",
                });
            }
            else
            {
                Swal.fire({
                    icon: "error",title: "Erreur",text: "Réessayer SVP !",
                });
            }
        }
    },
    mounted(){
        if(this.$i18n.locale == 'AR'){
             $('#application_body').addClass("rtl");
             $('#application_header').addClass("rtl");
        }
        else{
            $('#application_body').removeClass("rtl");
            $('#application_header').removeClass("rtl");
        }        
    }
}
</script>