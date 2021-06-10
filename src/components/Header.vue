<template>
    <header>
<nav class="navbar navbar-expand-lg navbar-light bg-nav d-flex justify-content-between">
  <div class="container-fluid">
    <a class="navbar-brand d-flex" href="#">
        <img src="../assets/img/icons/logo.svg" alt="">
        <div class="navbar-brand__title d-flex flex-column justify-content-center">
        <span>ВТП-Сервис</span>
        <span class="nav-describ">Ремонт и обслуживание.<br> Эффективно и быстро</span>
        </div>

    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center"  id="navbarSupportedContent">
      <ul class="navbar-nav">
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
          <a @click.prevent="" class="nav-link"  v-scroll-to="'#contacts'">Галерея</a>
        </li>
        <li class="nav-item">
          <a @click.prevent="" class="nav-link"  v-scroll-to="'#contacts'">Контакты</a>
        </li>
      </ul>
    </div>
      <div class="header-tel">
          <a href="">
              <span><img src="../assets/img/icons/tel_icon.svg" alt=""></span>
              <span>8 (905) 252-99-99</span>
              </a>
      </div>
  </div>
</nav>
    </header>
</template>

<script>
export default{

}
</script>

<style>
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
}
.navbar-brand__title span:last-child{
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
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
}
.header-tel{
    display: flex;
}
.nav-describ br{
  display: none;
}
@media (max-width:1120px){
  .header-tel{
    display: none;
}
.nav-describ br{
display: block;
}
}
</style>