<template>
  <div id="app">
    <Header/>
    <Service/>
    <ForYou/>
    <About/>
    <Price/>
    <Organized/>
    <Talk/>
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



</style>
