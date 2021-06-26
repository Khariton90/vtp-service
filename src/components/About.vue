<template>
  <section class="section" id="about">
      <div class="container">
          <div class="row about-title">
              <div class="col">
                  <h2>О нашей компании</h2>
              </div>
          </div>
          <div class="row about">
              <div class="col-12 col-lg-7 about__describ">
<p class="decrib-first">Вы владеете объектом коммерческой недвижимости, будь то офис, </p>
<p>Бизнес – центр, торговые площади или ресторан, тогда у Вас возникает</p>
<p>вопрос – как тратить меньше на обслуживание помещений, здания </p>
<p>и инженерных систем, включая текущие и непредвиденные ремонты?</p>
<p class="about__describ__normal mg-decrib">Мы это делаем 15 лет с минимальными затратами ресурсов и времени.</p>
<p class="decrib-first">Вы сдаете помещения в аренду или арендуете крупные офисные площади,</p>
<p>сервис – вот что удерживает арендаторов и создает комфортные условия</p>
<p>для работы сотрудников.</p>
<p class="about__describ__normal mg-decrib">У нас есть опыт в организации быстрого и эффективного сервиса.</p>
<p class="decrib-first">Вы ведете свой бизнес и знаете, как заработать, а мы умеем</p>
<p>оптимизировать расходы на эксплуатацию и обслуживание без потери</p>
<p>надежности систем.</p>
<p class="about__describ__normal mg-decrib mg-decrib_last">Безопасность и надежность партнеров – это часть бизнеса. Мы возьмем на</p>
<p class="about__describ__normal">себя обязательства и выполним в точности все условия Договора.</p>

              </div>
              <div class="col-5">

              </div>
          </div>
<div class="row">
    <div class="col-4 sofa">
        <img src="../assets/img/about1.png" alt="sofa">
    </div>
</div>
      </div>
              <div class="about-bg" ref="bg">
                  <img class="aboutframe" src="../assets/img/aboutframe.png" alt="frame">
                  <img src="../assets/img/about2.png" alt="">
              </div>
</section>  
</template>

<script>


export default{

}
</script>

<style scoped>
#about{
background: #E1DBDB;
position: relative;
padding: 48px 40px 0 60px;
overflow: hidden;
}
.about-title{
    display: inline-block;
    margin-bottom: 34px;
}
.abouttop{
    position: absolute;
    right: 0;
    top: 0;
    width: 291px;
    height: 212px;
}
.about-bg{
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 45%;
    max-height: 559px;
    transition: all 1s ease;
}
.aboutframe{
    position: absolute;
    z-index: 2;
    width: 102%;
    height: 105%;
    left: -1px;
    top: -5px;
}
h2{
    padding: 0 0 2px 0;
    border-bottom: 1px solid #80BD00;
}
#about p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #222222;
}
.about__describ__normal{
    font-weight: 300!important;
}
.mg-decrib{
    margin: 20px 0 30px 0!important;
}
.mg-decrib_last{
    margin: 20px 0 0 0!important;
}
.decrib-first{
    position: relative;
}
.decrib-first:before{
    content: '';
    position: absolute;
    left: -50px;
    top: 10px;
    width: 42px;
    height: 1px;
    background: #80BD00;
}
.sofa img{
transform: translate(-87%, 0);
}
@media (max-width: 991px){
    .about-bg{
        display: none;
    }
.sofa img{
    transform: translate(-50%, 0);
}
}
@media (max-width:992px){
    .decrib-first[data-v-c226fde6]:before {
    left: 0px;
    top: -18px;
}
}
@media (max-width: 768px){
.sofa img{
    display: none;
}
#about{
background: #E1DBDB;
position: relative;
padding: 48px 0px 64px 0px;
overflow: hidden;
}
}
@media (max-width: 620px){
.sofa img{
    transform: translate(-30%, 0);
}
}
</style>