<template>
  <div>
    <main>
      <nuxt />
    </main>

  </div>
</template>

<script>
    import Vue from 'vue';
    import vueSmoothScroll from 'vue2-smooth-scroll';
    import VueTheMask from 'vue-the-mask';
    import VueFriendlyIframe from 'vue-friendly-iframe';
    import { Select, MessageBox, Checkbox, Tooltip , Radio, Dialog } from 'element-ui';
    import VueObserveVisibility from 'vue-observe-visibility'

    Vue.use(VueObserveVisibility)



    Vue.component(Select.name, Select, MessageBox, Checkbox, Tooltip, Radio, Dialog);
    Vue.use(vueSmoothScroll)
    Vue.use(VueTheMask)
    Vue.use(VueFriendlyIframe);

    export default {

        data:function(){
            return{
                token:'',

            }},
                //   methods:{
                //     test:function () {
                //         this.tt+=1
                //     }
                //   }
                // watch:{
                //   scrollY(val){
                //   }
                // },
                mounted(){
                console.log('mount layout')

            },
        computed:{
            cart(){

                return this.$store.getters['cart/cart']
            },

        }

    }
</script>

<style lang="sass">
  body
    overflow-x: hidden



    .container
      max-width: 1290px
      padding: 0 10px
      margin: 0 auto

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

  .header-small
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
        opacity: 1
      &-icons
        flex-basis: 250px
        opacity: 1
        img
          margin-right: 10px
      &-link
        font: 16px 'Gotham Pro',sans-serif
        cursor: pointer
        opacity: 1
        a
          color: inherit
      &-phone
        flex-grow: 1
        text-align: right
        font: 20px 'Montserrat', sans-serif
        opacity: 1
        a
          color: inherit

  .btnDisabled
    opacity: .8
    pointer-events: none
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
</style>
