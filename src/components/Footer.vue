<template>
    <footer class="section" id="contacts">
        <div class="container">
            <div class="row footer">
                <div class="col-12 col-lg-8">
                    <form action="" class="form-footer">
                        <div class="form-title d-flex flex-column">
                        <span>Оставте заявку</span>
                        <span>и наш специалист вам перезонит</span>
                        </div>
                        <div class="form-body">
                    <input type="text" placeholder="Как к вам обращаться?"
                    v-model="name"
                    >
                      <input type="tel" placeholder="Ваш номер телефона"
                      v-model="telephone"
                       v-imask="mask" ref="tel" 
     @focus="mask.lazy = false"  @blur="mask.lazy = true"
                      >
                      <button class="btn-vtp" @click.prevent="submitting">Отправить</button>
                        </div>
                    </form>
                </div>
                <div class="col">
                    <div class="contacts">
                        <span>Контакты</span>
                        <ul>
                            <li> <a href="tel:89052529999"> <span><img src="../assets/img/icons/tel_contacts.svg" alt=""></span> 8(905)252-99-99</a> </li>
                            <li> <a href="mailto:vtpsinfo@mail.ru"> <span><img src="../assets/img/icons/mail_contacts.svg" alt=""></span>vtpsinfo@mail.ru</a> </li>
                            <li> <a href="#"> <span><img src="../assets/img/icons/time_contacts.svg" alt=""></span>с 8.00 до 23.00</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import {IMaskDirective} from 'vue-imask';
export default{
data(){
    return{
        value: 1,
        mask: {
          mask: '{+7} (000) 000-00-00',
          lazy: true
},
name: '',
telephone: '',
formFooter: {}
}
},
methods: {
submitting(){
    if(this.name && this.telephone){
        this.formFooter = {
            name: this.name,
            telephone: this.telephone
        }
        this.name = '',
        this.telephone = ''
    }else{
        return false
    }
    return console.log(this.formFooter)
}
},
  directives: {
    imask: IMaskDirective
  }
}
</script>

<style scoped>
footer{
    background:rgba(56, 61, 66, 0.8);
    padding: 53px 0 58px 0;
}
.form-footer{
    max-width: 750px;
    min-height: 162px;
    background: #F9F9F9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}
.form-footer button{
    padding: 9px 54px;
}
input{
    font-size: 16px!important;
    line-height: 19px!important;
    width: 240px;
    height: 40px;
    padding: 0 0 0 8px;
}
.contacts,.contacts a{
    color:white;
}
.contacts span{
    display: block;
    margin-bottom: 10px;
}
.contacts li{
    padding: 12px 0;
}
.contacts a{
    display: flex;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;  
}
.contacts img{
    max-width: 24px;
    margin-right: 12px;
}
.contacts span:first-child{
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
}
@media (max-width: 1199px){
    .form-body {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
form input {
    margin: 10px 0px;
    width: 100%;
}
}
@media (max-width: 991px){
.contacts{
    margin-top:25px;
}
}
</style>