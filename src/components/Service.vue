<template>
    <section id="service">
        <div class="container">
            <div class="row service">
                <div class="col-12 col-lg-8 title">
                    <h1>Обслуживание и ремонт <br> коммерческих площадей</h1>

                    <div class="subtitle">
                        <p>Мы имеем достаточно большой опыт в ремонте</p>
                        <p> и обслуживании коммерческих площадей,</p>
                        <p>офисов, кафе, ресторанов, салонов красоты и складов.</p>
                        <p>Доверяйте профессионалам.</p>
                    </div>

                <div class="title__items items">
                    <div class="items_icons">
                        <div class="icon">
                        <img src="../assets/img/icons/1.svg" alt="">
                        </div>
                        <div class="item__describ">
                        <p>Первичный выезд нашего</p>
                        <p>специалиста бесплатно</p>
                    </div>
                    </div>
                    <div class="items_icons">
                    <div class="icon">
                    <img src="../assets/img/icons/2.svg" alt="">
                    </div>
                    <div class="item__describ">
                        <p>Качественный ремонт в</p>
                        <p>кратчайшие сроки</p>
                    </div>
                    </div>
                    <div class="items_icons">
                    <div class="icon">
                    <img src="../assets/img/icons/3.svg" alt="">
                    </div>
                    <div class="item__describ">
                        <p>Наличный и безналичный</p>
                        <p>расчет по договору</p>
                    </div>
                    </div>
                    <div class="items_icons">
                    <div class="icon">
                    <img src="../assets/img/icons/4.svg" alt="">
                    </div>
                    <div class="item__describ">
                        <p>Комплексный подход к</p>
                        <p>ремонту и обслуживанию</p>
                    </div>                        
                    </div>
                </div>
                </div>
                <div class="col-12 col-lg-4 title-form">
                        <Form/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Form from "@/components/Form"
export default{
components:{
    Form
}

}
</script>

<style scoped>
#service{
    width: 100%;
    height: auto;
    padding: 177px 0 149px 0;
    background: url(../assets/img/background.png) center center no-repeat;
    background-size:cover;
}
.service{
    align-items: center;
}
.title{
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    transform: translate(-25px, 0px);
}
.title-form{
    display: flex;
    justify-content: flex-end;
}
.subtitle p{
    margin-top:18px;
    font-style: normal;
    font-weight: normal;
    font-size: calc(18px + 6 * ((100vw - 375px) / (1920 - 375)));
    line-height: calc(20px + 8 * ((100vw - 375px) / (1920 - 375)));
}
h1{
    font-style: normal;
    font-weight: bold;
    font-size: calc(22px + 26 * ((100vw - 375px) / (1920 - 375)));
    line-height: calc(26px + 36 * ((100vw - 375px) / (1920 - 375)));
}
.items{
    display: flex;
    flex-wrap: wrap;
    margin-top: 52px;
}
.items_icons{
    width: 360px;
    height: 68px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin-right: 30px;
    display: flex;
    align-items: center;
    color: #222222;
;
}
.items_icons:nth-child(3),
.items_icons:nth-child(4){
    margin-top:48px;
}
.items_icons img{
    max-width: 48px;
    max-height: 48px;
}
.icon{
    background: #80BD00;
    border-radius: 5px;
    width: 68px;
    height: 68px;
    padding: 13px 9px;
    display: flex;
    align-items: center;
}
.item__describ{
    margin-left: 30px;
}
@media (min-width:2000px) {
    h1{
        font-size: 56px;
        line-height: 60px;
    }
  }
@media (max-width:1400px) {
  .items_icons{
      width: 330px!important;
      margin-right: 15px!important;
  }
  }
  @media (max-width:1199px){
#service {
    padding: 100px 0 40px 0;
}

.items{
    margin-top: 25px;
}
.items_icons{
    width: 360px!important;
    margin: 10px 0px!important;
}
  }
  @media (max-width:1120px) {
  .header-tel{
    display: none;
  }
  }
  @media (max-width:992px) {
#service{
 height: auto!important;
}
.items{
    display: none;
}
.title-form {
    justify-content: flex-start;
    margin-top: 20px;
}
    }
</style>