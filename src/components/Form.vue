<template>
    <form action="#" class="service-form p-0">
    <div class="form-header">
    <p>Оставте заявку</p>
    <p>и наш специалист вам перезонит</p>
    </div>
    <div class="form-body">
    <div class="form-input">
    <label for="name">Как к вам обращаться?</label>
    <input type="text" id="name" autocomplete="off"
    v-model.trim="name"
    >
    </div>
    <div class="form-input">
    <label for="tel" >Ваш номер телефона</label>
    <input type="tel" id="tel" autocomplete="off"
    v-model="telephone"
     v-imask="mask" ref="tel"
     @accept="onAccept"
     @focus="mask.lazy = false" 
     @blur="mask.lazy = true">
    </div>
    <div class="form-input form-input_select">
    <label for="company">Выберите отдел</label>
    <select name="select" id="company"
    @change="changeCallStatus($event)"
    :value="valueDepartment"
    >
    <option 
    v-for="(department, index) in departments" :key="index"
    >
    {{ department }}
    </option>
    </select>
    </div>
    <div class="form-input">
    <label for="message">Краткое описание работ</label>
    <textarea type="text" id="message"
    v-model="description"
    > </textarea>
    </div>

    <button class="btn-vtp btn-form" @click.prevent="submitting">Отправить</button>
    </div>
    </form>
</template>

<script>
import {IMaskDirective} from 'vue-imask';
export default{
data(){
    return{
        value: '',
        mask: {
          mask: '{+7} (000) 000-00-00',
          lazy: true
},
    name: '',
    telephone: this.value,
    valueDepartment: '',
    description: '',
    departments: ['Значение1','Значение2','Значение3' ],
    //!!!!!!!!Данные из формы после оправки!!!!!!!!!!!!//
    formData: {}
}
},
methods:{
changeCallStatus(event){
 this.valueDepartment = event.target.value
},
onAccept (e) {
const maskRef = e.detail;
this.value = maskRef.value;
},
submitting(){
    if(this.name && this.telephone && this.valueDepartment && this.description){
        this.formData = {
        name: this.name,
        telephone: this.telephone,
        valueDepartment: this.valueDepartment,
        description: this.description
        }
        this.name = ''
        this.telephone = ''
        this.description = ''
        this.valueDepartment = ''
    }else{
        return false
    }
return console.log(this.formData)
},

 },
  directives: {
    imask: IMaskDirective
  }
}
</script>

<style scoped>
.service-form{
    width: 330px;
    min-width: 330px;
    height: 485px;
    background: #F9F9F9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    transform: translate(25px, 0px);
}
.title-form{
    padding-left: 0;
}
.form-header{
    color: #FFFFFF;
    font-size: 18px;
    line-height: 21px;
    padding: 14px 0 14px 13px;
    background: #80BD00;
    border-radius: 5px;
    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.08), 
    inset -2px -2px 4px #699B00, inset 4px 4px 9px #ADFF00;
}
.form-body{
    padding: 22px 30px;
}
.form-header p:first-child{
    font-weight: bold;
}
.form-input{
    margin-top:18px;
    width: 100%;
}
.form-input:first-child{
    margin-top:0;
}
.form-input label{
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
    width: 100%;
}
.form-input input,
.form-input textarea,
.form-input select{
    width: 100%;
    border: 1px solid #D9D9D9;
    border-radius: 1px;
}
.form-input textarea{
    resize: none;
    height: 68px;
}
.form-input input,
.form-input select{
    height: 32px;
}
.btn-form{
    margin-top:18px;
    width: 100%;
    height: 48px;
}
.form-input select{
    -webkit-appearance: none;
    appearance: none;
    font-family: inherit;
    padding-left: 5px;
    position: relative;
    width: 100%;
    display: block;
    background: transparent;
}
.form-input_select{
    position: relative;
}

.form-input_select:after,.form-input_select:before{
    content: url('../assets/img/icons/select.svg');
    position: absolute;
    width: 34px;
    height: 32px;
    z-index: -1;
    right: 0px;
    bottom: 0px;
}
.form-input_select:before{
    content: '.';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 32px;
    background: #ffffff;
    z-index: -1;
    text-align: right;
}

</style>