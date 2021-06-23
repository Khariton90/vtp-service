<template>
    <header>
      <div class="mobile" ref="menu">
      <ul class="mobile-nav" @click="burgerMenu">
        <li class="nav-item">
          <a @click.prevent="" class="nav-link"  v-scroll-to="'#service'">Услуги</a>
        </li>
        <li class="nav-item">
          <a @click.prevent="" class="nav-link"  v-scroll-to="'#about'">О нас</a>
        </li>
        <li class="nav-item">
          <a @click.prevent="" class="nav-link"  v-scroll-to="'#price'">Прайс</a>
        </li>
        <li class="nav-item">
          <a @click.prevent="" class="nav-link"  v-scroll-to="'#works'">Галерея</a>
        </li>
        <li class="nav-item">
          <a @click.prevent="" class="nav-link"  v-scroll-to="'#contacts'">Контакты</a>
        </li>
      </ul>
  </div>
<nav class="navbar navbar-expand-lg navbar-light bg-nav d-flex justify-content-between">

  <div class="container-fluid wrapp">

    <div class="col">
          <a class="navbar-brand d-flex" href="#">
        <img src="../assets/img/icons/logo.svg" alt="">
        <div class="navbar-brand__title d-flex flex-column justify-content-center">
        <span>ВТП-Сервис</span>
        <span class="nav-describ">Ремонт и обслуживание. Эффективно и быстро</span>
        </div>

    </a>
    </div>
  <div class="col-1 col-lg-1 burger-container">
    <div class="burger" id="burger" ref="burger" @click="burgerMenu">
      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
  </div>
<div class="col collapse navbar-collapse justify-content-center">
    <div class=""  id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a @click.prevent="" class="nav-link link"  v-scroll-to="'#service'">Услуги</a>
        </li>
        <li class="nav-item">
          <a @click.prevent="" class="nav-link link"  v-scroll-to="'#about'">О нас</a>
        </li>
        <li class="nav-item">
          <a @click.prevent="" class="nav-link link"  v-scroll-to="'#price'">Прайс</a>
        </li>
        <li class="nav-item">
          <a @click.prevent="" class="nav-link link"  v-scroll-to="'#works'">Галерея</a>
        </li>
        <li class="nav-item">
          <a @click.prevent="" class="nav-link link"  v-scroll-to="'#contacts'">Контакты</a>
        </li>
      </ul>
    </div>
</div>
<div class="col-xl-3 col-xxl-2 col-lg-1">
      <div class="header-tel">
          <a href="">
              <span><img src="../assets/img/icons/tel_icon.svg" alt=""></span>
              <span>8 (905) 252-99-99</span>
              </a>
      </div>
</div>

  </div>
</nav>
    </header>
</template>

<script>
import scrollTo from "../scripts/scrollTo.js"
export default{
data(){
  return{

  }
},
methods:{
  burgerMenu(){
    let burger = document.querySelectorAll('.burger span');
    let menu = this.$refs.menu;
    menu.classList.toggle('active');
    if(menu.classList.contains('active')){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';
    }
  Array.from(burger).forEach((el, index) => {
  if(index % 2 === 0){
  if(el.classList.contains('active')){
    el.classList.remove('active');
  }else{
    el.classList.add('active');
  }
  }else{
    if(el.classList.contains('deactive')){
    el.classList.remove('deactive');
  }else{
    el.classList.add('deactive');
  }  
  }
})
}
},
mounted(){
  window.addEventListener('scroll', scrollTo);
}
}
</script>

<style>
.wrapp{
  max-width: 2500px!important;
  margin: 0 auto;
}
.mobile{
    width: 100%;
    height: calc(100vh + 75px);
    background: rgba(56, 61, 66, 1);
    z-index: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    line-height: 40px;
    transform: translateY(-100%);
    transition: all 0.2s ease;
}
.mobile.active{
      transform: translateY(0%);
      transition: all 0.2s ease;
}
.mobile-nav .nav-link{
  display: inline-block;
}
.burger-container{
  display: none;
}
header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.bg-nav{
    background: rgba(56, 61, 66, 0.8);
}
.nav-link{
  cursor: pointer;
}
.active{
  color:red;
}
.nav-link,
.navbar-brand,
.header-tel a{
    color: #FFFFFF!important;
}
.navbar-brand{
    margin-right: 0;
}
.navbar-brand img{
    padding-right: 16px;
    margin-right: 16px;
    border-right: 2px solid #80BD00;
    max-width: 50px;
}

.header-tel img{
width: 24px;
height: 24px;
}
.header-tel span{
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
}
.header-tel span:first-child{
    margin-right: 8px;
}
.navbar-nav li{
    padding: 0 9px;
}
.nav-link{
  position: relative;
  padding-bottom: 2px!important;
}
.nav-link.active{
  color: #80bd00 !important;;
}
.nav-link::before{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 85%;
  height: 1px;
  background: #80BD00;
  transition: .3s ease;
}
.nav-link:hover:before{
    transition: .3s ease;
    width: 45%;
}

.header-tel{
    display: flex;
}
.navbar-brand__title span:first-child{
    font-size: calc(14px + 10 * ((100vw - 375px) / (1920 - 375)));
}
.nav-describ{
  line-height: 14px;
  font-size: calc(8px + 4 * ((100vw - 375px) / (1920 - 375)));
}
.burger{
  display: flex;
  width: 25px;
  height: 25px;
  justify-content: center;
  flex-wrap: wrap;
}
.burger span{
display: block;
width: 6.25px;
height: 6.25px;
background: white;
margin: 1px;
transition: all 0.3s ease;
}
.burger span.active{
  background: #80BD00;
  transform: rotate(-45deg) scale(1.3);
  transition: all 0.7s ease;
}
.burger span.deactive{
  opacity: 0;
}
@media (max-width: 1200px){
.header-tel a span:last-child{
  display: none;
}
}
@media (min-width: 1930px){
.navbar-brand__title span:first-child {
    font-size: 24px;
 }
.nav-describ {
    font-size: 12px;
    line-height: 2;
}
}
@media (max-width:1120px){
.nav-describ br{
display: block;
}
.burger {
    order: 2;
}
}
@media (max-width:992px){
  .burger-container{
  display: block;
  order: 2;
}
.header-tel {
  margin-right: 24px;
}
}
@media (max-width: 500px){
  .header-tel{
    margin-right: 12px;
  }
}
</style>