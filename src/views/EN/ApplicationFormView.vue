<template>
    <div class="application">
        <div class="application_header">
            <div class="application_title">
                <div>
                    <span style="--i:1">A</span>
                    <span style="--i:2">P</span>
                    <span style="--i:3">P</span>
                    <span style="--i:4">L</span>
                    <span style="--i:5">I</span>
                    <span style="--i:6">C</span>
                    <span style="--i:7">A</span>
                    <span style="--i:8">T</span>
                    <span style="--i:9">I</span>
                    <span style="--i:10">O</span>
                    <span style="--i:11">N</span>
                    <span style="--i:12">&nbsp;</span>
                    <span style="--i:13">F</span>
                    <span style="--i:14">O</span>
                    <span style="--i:15">R</span>
                    <span style="--i:16">M</span>
                </div>

            </div>
            <p>
                Please fill out this form by completing all required fields. We will contact you as soon as possible.
            </p>
        </div>
        <div class="application_body">
            <div class="application_box">
                <div class="application_label">
                    Full Name:<span class="required">&ast;</span>
                </div>
                <input class="application_input" type="text" v-model="name" required>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Mail:<span class="required">&ast;</span>
                </div>
                <input class="application_input" type="email" v-model="email" required>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Phone:<span class="required">&ast;</span>
                </div>
                <input class="application_input" type="text" v-model="phone" required>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Job:<span class="required">&ast;</span>
                </div>
                <input class="application_input" type="text" v-model="job" required>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Message:<span class="required">&ast;</span>
                </div>
                <textarea class="application_input  textarea" cols="30" rows="10" v-model="message" required></textarea>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Attach CV:<span class="required">&ast;</span>
                </div>
                <span>
                    <div class="application_file">
                        <button @click="selectFile()">
                            <i class="ri-file-upload-fill"></i>
                            Browse
                        </button>
                        <input type="file" id="file_input" @change="onFileChange($event)" style="display:none;">
                        <small>{{this.filename}}</small>
                    </div>
                    <small>The maximum file size for each file is 20 MB.</small>
                </span>
            </div>                       
        </div>
        <div class="applcation_footer">
            <button @click="action()">
                Apply
            </button>
        </div>
    </div>
</template>
<script>
import {select_file,handleFileChange2,validateEmail,validatePhone} from '@/assets/js/global.js';
import Swal from 'sweetalert2';
import '@/assets/css/Application/application.css'
import '@/assets/css/Application/media_application.css'
import '@/assets/css/Application/select_application.css'
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
            else return "No file selected";
        }
    },
    methods:{
        selectFile(){
            select_file("file_input");
        },
        onFileChange(event){
            handleFileChange2(event,"en").then((file) => {
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
                    icon: "error",title: "Error",text: "Please double-check the email!",
                });
            }
            else if(!validatePhone(this.phone))
            {
                Swal.fire({
                    icon: "error",title: "Error",text: "Please double-check the phone number!",
                });
            }
            else
            {
                Swal.fire({
                    icon: "error",title: "Error",text: "Please try again!",
                });
            }
        }
    }
}
</script>