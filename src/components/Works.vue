<template>
    <section id="works" class="section works">
        <div class="container">
          <div class="row works-title">
            <h2>Наши работы</h2>
           </div>
            <div class="row work-row">
                <div  class="col-12 col-lg-4 p-0 works-subtitle">
                <div class="counter" v-for="room in rooms" :key="room.id">
                  <h3 v-if="counter == room.id">{{ room.title }}</h3>
                  <ul v-if="counter == room.id">
                    <li v-html="room.describ[0]">
                    </li>
                    <li v-html="room.describ[1]">
                    </li>
                    <li v-html="room.describ[2]">
                    </li>
                  </ul>
                </div>
                </div>
                <div class="col">
<div class="swiper-container newSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/img/1.png" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/1.png" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/1.png" />
        </div>
        <div class="swiper-slide">
         <img src="../assets/img/1.png" />
        </div>
      </div>

    </div>
                </div>
            </div>
        </div>

    <div class="swiper-button-next swiper-button-next3d" @click="counter++"></div>
      <div class="swiper-button-prev swiper-button-prev3d" @click="counter--"></div>
    </section>
</template>

<script>
export default{
data(){
  return{
    counter: 1,
    rooms: [
      {
        id:1,
        title: 'Уютное заведение-1',
        describ: [
          '1-Капитальный ремонт ресторана по адресу:<br>г. Санкт-Петербург, <br>Петровский бульвар д. 2 корп.1',
          '1-Площадь ресторана: 160м2',
          '1-Срок выполнения работ: 25 дней'
          ]
      },
      {
                id:2,
        title: 'Уютное заведение-2',
        describ: [
          '2-Капитальный ремонт ресторана по адресу:<br>г. Санкт-Петербург, <br>Петровский бульвар д. 2 корп.1',
          '2-Площадь ресторана: 160м2',
          '2-Срок выполнения работ: 25 дней'
          ]
      },
      {
                id:3,
        title: 'Уютное заведение-3',
          describ: [
          '3-Капитальный ремонт ресторана по адресу:<br>г. Санкт-Петербург, <br>Петровский бульвар д. 2 корп.1',
          '3-Площадь ресторана: 160м2',
          '3-Срок выполнения работ: 25 дней'
          ]
      },
      {
                id:4,
        title: 'Уютное заведение-4',
          describ: [
          '4-Капитальный ремонт ресторана по адресу:<br>г. Санкт-Петербург, <br>Петровский бульвар д. 2 корп.1',
          '4-Площадь ресторана: 160м2',
          '4-Срок выполнения работ: 25 дней'
          ]
      },
      {
        id:5,
        title: 'Уютное заведение-5',
          describ: [
          '5-Капитальный ремонт ресторана по адресу:<br>г. Санкт-Петербург, <br>Петровский бульвар д. 2 корп.1',
          '5-Площадь ресторана: 160м2',
          '5-Срок выполнения работ: 25 дней'
          ]
      }
    ]
  }
},
methods:{

},
mounted(){
    var swiper2 = new Swiper(".newSwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 10,
          depth: 800,
          modifier: 1,
          slideShadows: false,
        },
        navigation: {
          nextEl: ".swiper-button-next3d",
          prevEl: ".swiper-button-prev3d",
        },
      });
}
}
</script>

<style scoped>
.fade-enter-active,.fade-leave-active{
	transition: opacity .2s linear;
	opacity: 1;
}
.fade-leave-to,.fade-enter{
	opacity: 0.3;
	transition: opacity .2s linear;
}
.works-title{
display: inline-block;
}
h2{
    padding: 0 0 2px 0;
    border-bottom: 1px solid #80BD00;
}
h3{
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
}
.works{
    position: relative;
    background-color: #E1DBDB;
    padding: 50px 0;
}
.work-row{
  position: relative;
}
.counter{
  position: absolute;
  left: 15px;
}
.works-subtitle{
  margin-top:68px;
  height: 100%;
  min-width: 345px;
  min-height: 228px;
}
.works-subtitle ul {
  margin: 32px 0 0 18px;
  list-style-type: disc;
}
.works-subtitle li{
  margin-bottom: 30px;
}
.newSwiper{
    position: relative;
    pointer-events: none;
}
.swiper-container {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    max-width: 357px;
    max-height: 397px;
}

.swiper-slide img {
    display: block;
    width: 100%;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    right: 130px;
    left: 0;
    bottom: 0;
    margin: auto;
}
.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled{
    opacity: 1;
}
.swiper-button-next, .swiper-button-prev {
top:auto;
bottom:20px;
}
@media (max-width: 768px){
  .works-title h2{
    margin: 0 0 0 15px;
  }
  .works-subtitle{
    margin: 24px 0 0 15px;
}
.swiper-container{
    padding-top: 42px;
    padding-bottom: 24px;
}
}
@media (max-width: 600px){
.swiper-slide {
    max-width: 375px!important;
}
.swiper-wrapper {
    width: 110%;
}
.works-subtitle li:last-child {
    margin-bottom: 0px;
}
}
</style>