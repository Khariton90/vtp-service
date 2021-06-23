<template>
  <div id="app">
    <Header/>
    <Service/>
    <ForYou/>
    <About/>
    <Price/>
    <Organized/>
    <Talk/>
    <Works/>
    <Footer/>
  </div>
</template>

<script>

import Header from "@/components/Header"
import Service from "@/components/Service"
import ForYou from "@/components/ForYou"
import About from "@/components/About"
import Price from "@/components/Price"
import Organized from "@/components/Organized"
import Works from "@/components/Works"
import Talk from "@/components/Talk"
import Footer from "@/components/Footer"


require('./assets/style.css')
export default {
  name: 'App',
  components: {
    Header,
    Service,
    ForYou,
    About,
    Price,
    Organized,
    Works,
    Talk,
    Footer,
  }
}
</script>

<style>
#app {
font-family: 'Roboto', sans-serif;
box-sizing: border-box;
font-size: 18px;
line-height: 21px;
max-width: 3000px;
margin: 0 auto;
overflow: hidden;
}

.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: 0;
    left: 130px;
    bottom: 0;
    margin: auto;
}
.swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
    content: url('./assets/img/icons/arrow.svg');
    top:0;
    z-index: 2;
}
.swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
    content: url('./assets/img/icons/arrownext.svg');
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
    pointer-events: none;
}
</style>
