<template>
  <div>
    <header class="header">
      <div class="header__wrapper">
        <div class="header__top">
          <div class="header__top-logo">ASTRAPROMO</div>
          <div class="header__top-icons">
            <a href=""> <img src="/wa.png" alt=""></a>
            <a href=""><img src="/vb.png" alt=""></a>
          </div>

          <div class="header__top-phone">
            <a href="">8 800 800 00 00</a>
          </div>
        </div>
      </div>
    </header>

    <section class="order">
      <div class="container">
        <h3>Ваш заказ</h3>

        <div class="order-wrapper">
          <div class="order-item">
            <img class="order-item__img" src="http://placehold.it/300x190" alt="">
            <div class="order-item__group">
              <p class="order-item__name">Lorem ipsum.</p>
              <p class="order-item__price">2000 руб</p>
            </div>
            <p class="order-item__delete">удалить</p>
          </div>
          <div class="order-item">
            <img class="order-item__img" src="http://placehold.it/300x190" alt="">
            <div class="order-item__group">
              <p class="order-item__name">Lorem ipsum.</p>
              <p class="order-item__price">2000 руб</p>
            </div>
            <p class="order-item__delete">удалить</p>
          </div>
        </div>
        <h4>С эти товаром покупают:</h4>

        <div class="addition-items">
          <div class="addition-item">
            <div class="addition-item__checkbox" >
              <el-checkbox v-model="domainChecked">Домен</el-checkbox>
              <el-tooltip content="Домен сайта – это уникальное имя, по которому можно зайти на веб-ресурс." placement="right" effect="light">
                <span class="question">?</span>
              </el-tooltip>
            </div>
            <p class="addition-item__price">500 руб</p>
          </div>
          <div class="addition-item">
            <div class="addition-item__checkbox" >
              <el-checkbox v-model="hostingChecked">Хостинг</el-checkbox>
              <el-tooltip content="Хостинг - услуга по предоставлению ресурсов для размещения информации на сервере, постоянно имеющем доступ к сети" placement="right" effect="light">
                <span class="question">?</span>
              </el-tooltip>
            </div>
            <p class="addition-item__price">500 руб</p>
          </div>
        </div>

         <h4>Варианты оплаты</h4>
        <div class="payment-type">
           <el-radio v-model="payment" label="Вариант1">Вариант 1</el-radio>
          <el-radio v-model="payment" label="Вариант2">Вариант 2</el-radio>
        </div>
         <h4>Номер телефона</h4>

        <div class="order-form">
          <input v-mask="'+7 (###) ### ## ##'" type="text" placeholder="Телефон">
          <span class="btn">Заказать</span>
        </div>

      </div>

    </section>

  </div>
</template>

<script>

    import Header from '@/components/Header';
    export default {
        data:function(){
            return{
                domainChecked:false,
                hostingChecked:false,
                payment:''
            }
        },


        components:{
            Header,

        }
    }
</script>

<style lang=sass>
  .question
    display: flex
    align-items: center
    justify-content: center
    font: 16px 'Gotham Pro',sans-serif
    width: 20px
    height: 20px
    border-radius: 50%
    background: #F1F1F1
    cursor: pointer
  .payment-type
    margin-bottom: 40px

  .order-form
     display: flex
     flex-wrap: wrap
     align-items: center
     justify-content: center
     max-width: 850px
     margin-bottom: 40px
     input
       text-align: center
       border-radius: 10px
       border: 1px solid #000000
       height: 60px
       font: 18px 'Gotham Pro Bold',sans-serif
       box-sizing: border-box
       flex-basis: 500px
       margin-right: 20px
       &:focus
          outline: none
     span
       font: 25px 'Gotham Pro Bold',sans-serif
       padding: 16px 0
  .header
    background: #F3F3F3
    height: 100px
    margin-bottom: 60px
    padding: 0 10px
    position: relative
    z-index: 1
    &-img
      position: absolute
      top: 0
      right: 0
      z-index: -1
    &__wrapper
      max-width: 1440px
      margin: 0 auto
      margin-bottom: 70px
    &__top
      display: flex
      justify-content: space-between
      align-items: center
      padding-top: 25px
      margin-bottom: 70px
      &-logo
        flex-basis: 250px
        font: 16px 'Montserrat', sans-serif
      &-icons
        flex-basis: 250px
        img
          margin-right: 10px
      &-link
        font: 16px 'Gotham Pro',sans-serif
        cursor: pointer
        a
          color: inherit
      &-phone
        flex-grow: 1
        text-align: right
        font: 20px 'Montserrat', sans-serif
        a
          color: inherit

  .order
    h3
      font: 34px 'Montserrat',sans-serif
      line-height: 52px
      margin-bottom: 50px
      text-transform: uppercase
    h4
      font: 28px 'Gotham Pro Bold',sans-serif
      margin-bottom: 35px
    &-wrapper
    &-item
      position: relative
      display: flex
      align-items: center
      justify-content: space-between
      max-width: 970px
      margin-bottom: 50px
      &__img
        margin-right: 20px
        width: 170px
        height: 110px
        object-fit: cover
      &__name
        font: 16px 'Gotham Pro Bold',sans-serif
      &__price
        font: 20px 'Gotham Pro Bold',sans-serif
      &__delete
        font: 12px 'Gotham Pro',sans-serif
        text-transform: uppercase
        color: #6D6D6D
        cursor: pointer
      &__group
        flex-basis: 460px
        display: flex
        align-items: center
        justify-content: space-between
        margin-right: 20px

    @media (max-width: 520px)
      .order
        &-item
          flex-wrap: wrap

          &__img
            margin-right: 0
            width: 100%
            height: 100%
            margin-bottom: 20px
          &__delete
            position: absolute
            top: -20px
            right: 0
    @media (max-width: 520px)
      .order-form
        input
          margin-right: 0
          margin-bottom: 20px
        span
          font-size: 20px
          padding: 20px 0

  .addition-item
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 60px
    max-width: 630px
    &__checkbox
      display: flex
      align-items: center
      justify-content: space-between
      flex-basis: 170px
    &__price
      font: 20px 'Gotham Pro Bold',sans-serif

  .el-tooltip__popper
    font: 10px 'Gotham Pro',sans-serif

  .el-tooltip__popper.is-light
    background: #F1F1F1
    border: 1px solid #F1F1F1

  .el-tooltip__popper .popper__arrow
    display: none

  .el-checkbox
    margin-right: 20px
  .el-checkbox__inner
    width: 30px
    height: 30px
    &::after
      height: 13px
      left: 12px
      position: absolute
      top: 6px
    &:hover
      border-color: #522EE3
  .el-checkbox__input
    margin-right: 20px

  .el-checkbox__label, .el-radio__label
    font: 16px 'Gotham Pro',sans-serif

  .el-checkbox__input.is-checked + .el-checkbox__label
    color: #522EE3

  .el-checkbox__input.is-checked .el-checkbox__inner
    background-color: #522EE3
    border-color: #522EE3
  .el-radio__inner
    width: 30px
    height: 30px
    &:hover
      border-color: #522EE3
  .el-radio__input.is-checked .el-radio__inner::after
    transform: translate(-50%, -50%) scale(3)

  .el-radio__input.is-checked .el-radio__inner
    background-color: #522EE3
    border-color: #522EE3
  .el-radio__input.is-checked + .el-radio__label
    color: #522EE3
</style>
