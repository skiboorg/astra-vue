<template>
  <div class="callback">
    <div class="container">
      <h3>Оставить заявку на консультацию</h3>
      <div class="callback-form">
        <input v-mask="'+7 (###) ### ## ##'" type="text" placeholder="Телефон">
        <span class="btn">Оставить заявку</span>

      </div>
    </div>
  </div>
</template>

<style lang="sass">
 .callback
   background: #EDEDED
   padding: 120px 0
   margin-bottom: 140px
   h3
    font: 34px 'Montserrat',sans-serif
    line-height: 52px
    margin-bottom: 50px
    text-transform: uppercase
   &-form
     display: flex
     flex-wrap: wrap
     align-items: center
     justify-content: center
     max-width: 850px
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
 @media (max-width: 520px)
   .callback
    padding: 50px 0
    margin-bottom: 50px
    h3
      font-size: 20px
      line-height: 32px
      margin-bottom: 40px
    &-form
      input
        margin-right: 0
        margin-bottom: 20px
      span
        font-size: 20px
        padding: 20px 0






</style>
