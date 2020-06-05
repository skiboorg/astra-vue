<template >
  <div class="info-block" v-observe-visibility="visibilityChanged">
    <div class="info-block-inner container" :class=" {fadeIn : isVisible ,fadeOut : !isVisible}">
       <h3>Консультации по продвижению в интернете</h3>
      <p>На консультации наши специалисты помогут вам улучшить ваш интернет-маркетинг или запустить его с нуля</p>
      <img src="/infoblock_m.png" alt="">
    </div>
  </div>
</template>


<script>

  export default {
       data:function(){
           return{
              isVisible:false
          }
       },


      methods: {
      visibilityChanged (isVisible, entry) {
        this.isVisible = isVisible
          console.log(this.isVisible)
        console.log(entry)
    },
  },
  }
</script>

<style lang="sass">
  .info-block
    background: #EDEDED
    padding-top: 30px
    margin-bottom: 140px

    &-inner
      background: url("/infoblock_bg.png") no-repeat 100%
      height: 550px
      display: flex
      flex-direction: column
      justify-content: center
      h3
        font: 34px 'Montserrat',sans-serif
        line-height: 52px
        margin-bottom: 30px
        max-width: 580px
        text-transform: uppercase

      p
        font: 18px 'Gotham Pro',sans-serif
        line-height: 26px
        max-width: 580px
      img
        display: none

  @media (max-width: 520px)
    .info-block
      margin-bottom: 50px
      &-inner
        height: 470px
        background: none
        justify-content: space-between
        align-items: center
      h3
        font-size: 20px
        line-height: 32px
        margin-bottom: 0
      p
        font-size: 16px
        line-height: 26px
      img
        display: block

  .fadeIn
    animation: fade-in-right 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
    animation-delay: 1s

  .fadeOut
    animation: fade-out-right 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both


  @keyframes fade-in-right
    0%
      transform: translateX(50px)
      opacity: 0
    100%
      transform: translateX(0)
      opacity: 1



  @keyframes fade-out-right
    0%
      transform: translateX(0px)
      opacity: 1
    100%
      transform: translateX(50px)
      opacity: 0


</style>
