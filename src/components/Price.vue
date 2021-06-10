<template>
    <section id="price">
      <img class="pricebottom" src="../assets/img/pricebottom.png" alt="">
        <div class="container">
            <div class="row price-title">
                <h2>Стоимость работ</h2>
            </div>
        <div class="row">
            <div class="col-12 col-lg-8">

                            <ul class="price-list" @click.prevent="toggleTable">
                <li> <a href="">Плотницкие работы</a>
                </li>
                <li> <a href="">Электротехнические работы</a>
<transition name="fade">
<table  v-if="table" class="table table-bordered priceToggle">
  <thead>
    <tr class="table-active">
      <th>Услуга</th>
      <th>ед.изм</th>
      <th>Цена, ₽</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Демонтаж эл. точки<br> (розетка, выключатель,<br> монтажная коробка)</td>
      <td>шт.</td>
      <td>385,00 ₽</td>
    </tr>
    <tr>
      <td>Демонтаж открытой проводки</td>
      <td>м.п.</td>
      <td>22,00 ₽</td>
    </tr>
    <tr>
      <td>Демонтаж проводки,<br> размещенной в коробах</td>
      <td>м.п.</td>
      <td>27,50 ₽</td>
    </tr>
    <tr>
      <td>Демонтаж светильников</td>
      <td>шт.</td>
      <td>77,00 ₽</td>
    </tr>
    <tr>
      <td>Демонтаж двухполюсного<br> автомата</td>
      <td>шт.</td>
      <td>385,00 ₽</td>
    </tr>
        <tr>
      <td colspan="3" class="table-bold">Устройство гнезда для подразетника (стандартного размера)</td>
    </tr>
  </tbody>
    <thead>
    <tr class="table-active">
      <th>Услуга</th>
      <th>ед.изм</th>
      <th>Цена, ₽</th>
    </tr>
    <tr>
      <td>в ж/б стене</td>
      <td>шт.</td>
      <td>275,00 ₽</td>
    </tr>
    <tr>
      <td>в кирпичной стене</td>
      <td>шт.</td>
      <td>275,00 ₽</td>
    </tr>
    <tr>
      <td>в гипсолите</td>
      <td>шт.</td>
      <td>220,00 ₽</td>
    </tr>
    <tr>
      <td>в гипсокартоне</td>
      <td>шт.</td>
      <td>220,00 ₽</td>
    </tr>
  </thead>
</table>
</transition>
                </li>
                <li> <a href="">Сантехнические работы</a> </li>
                <li> <a href="">Работы по ремонту окон</a> </li>
                <li> <a href="">Ремонтно-отделочные работы</a> </li>
                <li> <a href="">Обслуживание кондиционеров</a> </li>
                <li> <a href="">Расценки на особые условия</a> </li>
            </ul>
            </div>
            <div class="col"><img src="../assets/img/price-image.png" alt=""></div>
        </div>
        </div>
    </section>
</template>

<script>

export default{
  data(){
    return{
      table: false
    }
  },
methods:{
toggleTable(){
  this.table ? this.table = false : this.table = true;
}
}
}
</script>

<style scoped>
.fade-enter-active,.fade-leave-active{
	transition: all 0.2s linear;
	opacity: 1;
  z-index: 0;
}
.fade-leave-to,.fade-enter{
	opacity: 0;
  transform: translate(-50%, 0);
	transition: all 0.2s linear;
}
#price{
    padding: 48px 0 34px 0;
    position: relative;
}
.pricebottom{
  position: absolute;
  right: 0;
  bottom: 0;
  width: 269px;
  height: 224px;
}
.price-list li{
        margin-bottom: 20px;
}
.price-list li:last-child{
    margin: 0;
}
.price-title{
    margin-bottom: 48px;
    display: inline-block;

}
.price-title h2{
  padding: 0;
  border-bottom: 1px solid #80BD00;
}
.price-list a{
    padding: 6px 42px 7px;
    background: #80BD00;
    border-radius: 5px;
    color: #FFFFFF;
    display: inline-block;
    margin-bottom: 12px;
}

</style>
