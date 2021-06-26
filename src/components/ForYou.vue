<template>
    <section class="section" id="forYou">
        <img class="service-bg" id="serviceBg" src="../assets/img/serviceback.png" alt="">
        <img class="canbottom" src="../assets/img/parBg.png" alt="table" ref="table">
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
        <div class="row foryou-blocks block-fr">
        <div class="col-12 col-md-6 col-xl-4">

            <div class="blocks repair">
                <img src="../assets/img/icons/item1.svg" alt="renovation of premises">
                <div class="blocks-describ">
                    <p>Ремонт помещений</p>
                    <p>косметический и капитальный</p>
                    <p>ремонт ваших помещений</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4">
            <div class="blocks">
                <img src="../assets/img/icons/item2.svg" alt="plumbing works">
                <div class="blocks-describ">
                    <p>Сантехнические работы</p>
                    <p>выполнение полного цикла</p>
                    <p>операций</p>
                </div>
            </div>
        </div>
        </div>
        <div class="row foryou-blocks">
        <div class="col-12 col-md-6 col-xl-4">

            <div class="blocks">
                <img src="../assets/img/icons/item3.svg" alt="electrical work">
                <div class="blocks-describ">
                    <p>Электромонтажные работы</p>
                    <p>монтаж и подключение</p>
                    <p>электрощитов под ключ</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4">
            <div class="blocks">
                <img src="../assets/img/icons/item4.svg" alt="system maintenance">
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
            <div class="col-12 col-xl-8 p-0">
            <h3>Мы выполняем все, даже не большие заявки</h3>
            </div>
        </div>
        <div class="row foryou-blocks block-fr">
        <div class="col-12 col-md-6 col-xl-4">
                        <div class="blocks master">
            <img src="../assets/img/icons/item9.svg" alt="Master for an hour">
            <div class="blocks-describ">
             <p>Мастер на час</p>
            </div>
        </div>
            <div class="blocks handle">
                <img src="../assets/img/icons/item5.svg" alt="Replacing handles">
                <div class="blocks-describ">
                    <p>Замена дверных ручек <br> и замков</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4">
            <div class="blocks faucet">
                <img src="../assets/img/icons/item6.svg" alt="Replacement of mixers">
                <div class="blocks-describ">
                    <p>Замена смесителей</p>
                </div>
            </div>
        </div>
        </div>
        <div class="row foryou-blocks">
        <div class="col-12 col-md-6 col-xl-4">

            <div class="blocks">
                <img src="../assets/img/icons/item7.svg" alt="Replacing lamps">
                <div class="blocks-describ">
                    <p>Замена ламп,<br> электрических розеток</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4">
            <div class="blocks">
                <img src="../assets/img/icons/item8.svg" alt="Window repair">
                <div class="blocks-describ">
                    <p>Ремонт окон</p>
                </div>
            </div>
        </div>
        </div>
    <div class="row foryou-blocks master-one-hour">
        <div class="col-12 col-md-12 col-xl-8">
            <div class="blocks">
            <img src="../assets/img/icons/item9.svg" alt="Master for an hour">
            <div class="blocks-describ">
             <p>Мастер на час</p>
            </div>
        </div>
        </div>
    </div>
    </div>
    </section>
</template>

<script>


export default {
data(){
    return{
        top: 0,
        top2:300
    }
},
methods:{
scroll(){
    let distance = window.scrollY;
    let table = this.$refs.table;
    if(distance > 1165){
        table.classList.add('active-table')
    }
}
},
computed:{

},
mounted(){
window.addEventListener('scroll', this.scroll);
}
}
</script>

<style scoped>
.active{
    color:red;
}
#forYou{
padding: 32px 0 240px 0;
position: relative;
overflow:visible;
}
.canbottom{
    position: absolute;
    right:0;
    bottom:-210px;
    height: auto;
    max-width: 291px;
    z-index: 2;
    opacity: 0;
    transition: all 1s ease 0s;
    transform: translateX(10%);
}
.active-table{
    opacity: 1;
    transition: all 1s ease 0s;
    transform: translateX(0%);
}
.service-bg{
    position: absolute;
    left: 0;
    bottom: 80px;
    max-height: 784px;
    max-width: 375px;
    z-index: -1;
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
    font-size: 32px;
    line-height: 37px;
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
.master{
    display: none;
    margin-top: 0 !important;;
}
@media (max-width: 1199px){
    .service-bg{
    opacity: 0.1;
    }
    .canbottom,.service-bg{
    display: none;
    }
}
@media (max-width: 992px){
    .master{
        display: flex;
    }
    .master-one-hour{
        display: none;
    }
    .handle{
        padding-top:32px;
    }
}
@media (max-width:768px){
    #forYou{
    padding: 32px 0 64px 15px;
    }
    .blocks{
        margin:24px 0 0;
    }
    .repair{
    margin:0;
    }
    .block-fr{
    margin-top:24px;
    }
    .service-subtitle{
    padding-left: 0;
    }
    .service-subtitle:nth-child(2) {
    margin: 40px 0 0 0!important;
    }
    h2{
    margin-bottom: 2px;
    }
    .handle{
        padding-top:0;
    }
}
</style>
