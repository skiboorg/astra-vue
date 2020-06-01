<template>
  <div>
    <Header/>
    <main>
      {{cart}}

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


</style>
