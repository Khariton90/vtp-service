<template>
    <section id="forYou">
        <img class="service-bg" src="../assets/img/serviceback.png" alt="">
        <img class="canbottom" src="../assets/img/canbottom.png" alt="">
    <div class="container">
        <div class="row foryou-title">
            <h2>Для вас мы можем</h2>
        </div>
        <div class="row">
            <div class="col-4"></div>
            <div class="col-12 col-xl-8 service-subtitle">
            <h3>Всё что вам нужно есть у нас</h3>
            </div>
        </div>
        <div class="row foryou-blocks">
        <div class="col-12 col-md-6 col-xl-4">

            <div class="blocks">
                <img src="../assets/img/icons/item1.svg" alt="">
                <div class="blocks-describ">
                    <p>Ремонт помещений</p>
                    <p>косметический и капитальный</p>
                    <p>ремонт ваших помещений</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4">
            <div class="blocks">
                <img src="../assets/img/icons/item2.svg" alt="">
                <div class="blocks-describ">
                    <p>Ремонт помещений</p>
                    <p>косметический и капитальный</p>
                    <p>ремонт ваших помещений</p>
                </div>
            </div>
        </div>
        </div>
        <div class="row foryou-blocks">
        <div class="col-12 col-md-6 col-xl-4">

            <div class="blocks">
                <img src="../assets/img/icons/item3.svg" alt="">
                <div class="blocks-describ">
                    <p>Электромонтажные работы</p>
                    <p>монтаж и подключение</p>
                    <p>электрощитов под ключ</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4">
            <div class="blocks">
                <img src="../assets/img/icons/item4.svg" alt="">
                <div class="blocks-describ">
                    <p>Обслуживание систем</p>
                    <p>кондиционирования, отопления и</p>
                    <p>пожаротушения</p>
                </div>
            </div>
        </div>
        </div>
        <div class="row service-subtitle">
            <div class="col-4"></div>
            <div class="col-12 col-xl-8">
            <h3>Мы выполняем все, даже не большие заявки</h3>
            </div>
        </div>
        <div class="row foryou-blocks">
        <div class="col-12 col-md-6 col-xl-4">

            <div class="blocks">
                <img src="../assets/img/icons/item5.svg" alt="">
                <div class="blocks-describ">
                    <p>Замена дверных ручек <br> и замков</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4">
            <div class="blocks">
                <img src="../assets/img/icons/item6.svg" alt="">
                <div class="blocks-describ">
                    <p>Замена смесителей</p>
                </div>
            </div>
        </div>
        </div>
        <div class="row foryou-blocks">
        <div class="col-12 col-md-6 col-xl-4">

            <div class="blocks">
                <img src="../assets/img/icons/item7.svg" alt="">
                <div class="blocks-describ">
                    <p>Замена ламп,<br> электрических розеток</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4">
            <div class="blocks">
                <img src="../assets/img/icons/item8.svg" alt="">
                <div class="blocks-describ">
                    <p>Ремонт окон</p>
                </div>
            </div>
        </div>
        </div>
    </div>
    </section>
</template>

<script>


export default {

}
</script>

<style scoped>
#forYou{
padding: 32px 0 240px 0;
position: relative;
}
.canbottom{
    position: absolute;
    right:0;
    bottom: 0;
    max-height: 291px;
    width: 291px;
}
.service-bg{
    position: absolute;
    left: 0;
    bottom: 80px;
    max-height: 784px;
    max-width: 375px;
}
.service-subtitle{
    margin:48px 0;
}
.foryou-title{
display: inline-block;
}
h2{
    padding: 0 0 2px 0;
    border-bottom: 1px solid #80BD00;
}
.foryou-blocks{
    justify-content: flex-end;
    margin-top:48px;
}

h3{
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
}
.blocks{
    display: flex;
    align-items: center;
}
.blocks img{
    width: 68px;
    height: 68px;
    margin-right: 30px;
}
.blocks-describ{
    font-style: normal;
    font-size: 16px;
    font-weight: 300;
    line-height: 19px;
    color: #222222;
}
.blocks-describ p:nth-child(1){
    font-weight: 500;
    margin-bottom: 10px!important;
}
.service-subtitle:nth-child(2){
   margin:102px 0 0 0!important; 
}
@media (max-width: 1199px){
.service-bg{
    opacity: 0.1;
}
}
@media (max-width:768px){
    #forYou{
    padding: 32px 0 50px 0;
}
    .blocks{
        margin:15px 0!important;
    }
.service-subtitle:nth-child(2) {
    margin: 40px 0 0 0!important;
}
}
</style>
