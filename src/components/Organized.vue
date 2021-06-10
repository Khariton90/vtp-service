<template>
    <section id="organized">
        <img class="organizedtop" src="../assets/img/organizedtop.png" alt="">
        <div class="container">
            <div class="row organized-title">
                <h2>Как все устроено?</h2>
            </div>
                            <div class="organized-subtitle">
                    <p class="text-descript">Процесс начинается с выезда нашего<br> специалиста на объект и первичного осмотра.</p>
                    <p class="text-descript">Далее работы разделяются на две категории.</p>
                </div>
            <div class="row">
                <div class="col-12 col-md-6">
                    <span class="text-title organized__title">Ремонт</span>
                    <ul class="list">
                        <li>Cоставление сметы</li>
                        <li>Cогласование</li>
                        <li>Оплата / предоплата</li>
                        <li>Ремонт</li>
                        <li>Закрытые объекта</li>
                    </ul>
                </div>
                <div class="col-12 col-md-6">
                    <span class="text-title organized__title">Сервисное обслуживание</span>
                    <ul class="list">
                        <li>Осмотр помещения</li>
                        <li>Составление акта осмотра</li>
                        <li>Согласование проводимых работ</li>
                        <li>Ремонт</li>
                        <li>Бесплатная ежемесячная проверка</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default{

}
</script>

<style scoped>
#organized{
    background: #E1DBDB;
    padding:48px 0 56px 0;
    position: relative;
}
.organizedtop{
    position: absolute;
    top:0;
    right: 0;
    max-width: 269px;
    max-height: 228px;
}
.organized-title{
    display: inline-block!important;
}
.organized-title h2{
    position: relative;
    margin-bottom: 18px;
    margin-left: 10px;
    padding: 0;
    border-bottom: 1px solid #80BD00;
}
.list li{
    padding: 8px 0 0 54px;
    position: relative;
}
.list li:before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    top: 5px;
    margin: auto;
    width: 42px;
    height: 1px;
    background: #80BD00;
}
.organized__title{
    display: block;
    margin: 32px 0 24px 0;
}
    .text-descript br{
        display: none;
    }
@media (max-width:992px){
    .text-descript br{
        display: block;
    }
}
</style>