<template>
    <section id="talk">
      <img class="talk talk1" src="../assets/img/talk1.png" alt="quotation">
      <img class="talk talk2" src="../assets/img/talk2.png" alt="quotation">
        <div class="container">
          <div class="row talk-title">
            <h2>Про нас говорят люди</h2>
          </div>
    <div class="swiper-container mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
            <div class="swiper-item">
            <p>Алексей</p>
            <p>Нужен был ремонт в ресторане, обратились в эту компанию.</p>
            <p>Мастера начали свое дело буквально через несколько дней. </p>
            <p>Ребята были очень спокойными, хорошими.</p>
            <p>Сделали очень качественный и красивый ремонт...  <a href="№">читать отзыв</a></p>
            </div>
        </div>
        <div class="swiper-slide">
                        <div class="swiper-item">
            <p>Алексей</p>
            <p>Нужен был ремонт в ресторане, обратились в эту компанию.</p>
            <p>Мастера начали свое дело буквально через несколько дней. </p>
            <p>Ребята были очень спокойными, хорошими.</p>
            <p>Сделали очень качественный и красивый ремонт...  <a href="#">читать отзыв</a></p>
            </div>
        </div>
        <div class="swiper-slide">
                        <div class="swiper-item">
            <p>Алексей</p>
            <p>Нужен был ремонт в ресторане, обратились в эту компанию.</p>
            <p>Мастера начали свое дело буквально через несколько дней. </p>
            <p>Ребята были очень спокойными, хорошими.</p>
            <p>Сделали очень качественный и красивый ремонт...  <a href="#">читать отзыв</a></p>
            </div>
        </div>
        <div class="swiper-slide">
                        <div class="swiper-item">
            <p>Алексей</p>
            <p>Нужен был ремонт в ресторане, обратились в эту компанию.</p>
            <p>Мастера начали свое дело буквально через несколько дней. </p>
            <p>Ребята были очень спокойными, хорошими.</p>
            <p>Сделали очень качественный и красивый ремонт...  <a href="#">читать отзыв</a></p>
            </div>
        </div>
        <div class="swiper-slide">
                        <div class="swiper-item">
            <p>Алексей</p>
            <p>Нужен был ремонт в ресторане, обратились в эту компанию.</p>
            <p>Мастера начали свое дело буквально через несколько дней. </p>
            <p>Ребята были очень спокойными, хорошими.</p>
            <p>Сделали очень качественный и красивый ремонт...  <a href="#">читать отзыв</a></p>
            </div>
        </div>
        <div class="swiper-slide">
                        <div class="swiper-item">
            <p>Алексей</p>
            <p>Нужен был ремонт в ресторане, обратились в эту компанию.</p>
            <p>Мастера начали свое дело буквально через несколько дней. </p>
            <p>Ребята были очень спокойными, хорошими.</p>
            <p>Сделали очень качественный и красивый ремонт...  <a href="#">читать отзыв</a></p>
            </div>
        </div>
      </div>

    </div>  
      <div class="swiper-button-next swiper-button-next-talk"></div>
      <div class="swiper-button-prev swiper-button-prev-talk"></div>
        </div>
    </section>

</template>

<script>
export default{
data(){
return{

}
},
methods:{
swipe(){
if(window.innerWidth <= 768) {
      let swiper = new Swiper(".mySwiper", {
                slidesPerView:1,
        centeredSlides: true,
        spaceBetween: 0,
        initialSlide: 1,
        slidePerGroup:'auto',
        loop:true,
                navigation: {
          nextEl: ".swiper-button-next-talk",
          prevEl: ".swiper-button-prev-talk",
        }
      })
}else{
        let swiper = new Swiper(".mySwiper", {
                slidesPerView:1.5,
        centeredSlides: true,
        spaceBetween: 20,
        initialSlide: 1,
        slidePerGroup:'auto',
        loop:true,
                navigation: {
          nextEl: ".swiper-button-next-talk",
          prevEl: ".swiper-button-prev-talk",
        }
      })
}
}
},
mounted(){
  window.addEventListener( 'load', this.swipe)
  window.addEventListener( 'resize', this.swipe)
}
}
</script>

<style scoped>
#talk{
    padding-top:calc(42px + 50 * ((100vw - 375px) / (1440 - 375)));
    padding-bottom:calc(132px + 78 * ((100vw - 375px) / (1440 - 375)));
    position: relative;
}
.talk-title{
  display: inline-block;
}
.talk-title h2{
  padding: 0;
  border-bottom: 1px solid #80BD00;
  margin-bottom:94px;
  font-size: 32px;
}
.swiper-container {
        width: 100%;
        height: 100%;
        max-width: 750px;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-item{
width: 463px;
height: 180px;
background: #FFFFFF;
border: 2px solid #80BD00;
box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-style: italic;
font-weight: normal;
font-size: 12px;
line-height: 1.7;
padding: 18px 28px;
display: flex;
flex-direction: column;
justify-content: center;
color: #222222;
}
.swiper-slide-active a {
  color: #0073C3;
}
.swiper-item p:first-child{
  font-weight: normal;
font-size: 18px;
line-height: 21px;
padding-bottom: 1px!important;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    right: 130px;
    left: 0;
    bottom: 0;
    margin: auto;
}
.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: 0;
    left: 130px;
    bottom: 0;
    margin: auto;
}
.swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
    content: url('../assets/img/icons/arrow.svg');
    top:0;
    z-index: 2;
}
.swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
    content: url('../assets/img/icons/arrownext.svg');
    z-index: 3!important;
}
.swiper-button-prev:before{
    content: '';
    width: 110px;
    height: 1px;
    background: #80BD00;
    position: absolute;
    bottom: 18px;
    left: 22px;
    z-index: 1!important;
}
.talk{
  max-width: 248px;
  position: absolute;
}
.talk1{
  left: 0;
  bottom: 62px;
}
.talk2{
  right: 0;
  top: 72px;
}
.swiper-button-next, .swiper-button-prev {
    top:calc(50% + 10 * ((100vw - 375px) / (1440 - 375)));
}
.swiper-slide{
  width: auto;
}
@media (max-width:1300px){
  .talk{
    max-width: 150px;
  }
  .talk1{
    bottom: 20px;
  }
  .talk2{
    top: 20px;
  }
}
@media (max-width:768px){
.swiper-item{
    max-width: 100%;
    height: auto;
    width: 100%;
}
.talk{
    max-width: 129px;
    z-index: -1;
}
.talk1{
  left: 0;
  bottom: 0px;
}
.talk2{
  right: 0;
  top: 0px;
}
.talk-title h2{
    margin-left: 0px;
    margin-bottom: 45px;
}
}
@media (max-width:500px){
.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: 0;
    left: 130px;
    bottom: -50px;
    margin: auto;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    right: 130px;
    left: 0;
    bottom: -50px;
    margin: auto;
}
}
@media (max-width: 369px){
  .talk-title h2{
    font-size: 29px;
}
}

</style>
