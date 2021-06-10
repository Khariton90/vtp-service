<template>
    <form action="" class="service-form">
    <div class="form-header">
    <p>Оставте заявку</p>
    <p>и наш специалист вам перезонит</p>
    </div>
    <div class="form-body">
    <div class="form-input">
    <label for="name">Как к вам обращаться?</label>
    <input type="text" id="name" autocomplete="off">
    </div>
    <div class="form-input">
    <label for="tel">Ваш номер телефона</label>
    <input type="tel" id="tel" autocomplete="off">
    </div>
    <div class="form-input form-input_select">
    <label for="company">Выберите отдел              </label>
    <select name="select" id="company">
    <option value="value1">Значение 1</option>
    <option value="value2" selected>Значение 2</option>
    <option value="value3">Значение 3</option>
    </select>
    </div>
    <div class="form-input">
    <label for="message">Краткое описание работ</label>
    <textarea type="text" id="message"> </textarea>
    </div>

    <button class="btn-vtp btn-form">Отправить</button>
    </div>
    </form>
</template>

<script>
export default{

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