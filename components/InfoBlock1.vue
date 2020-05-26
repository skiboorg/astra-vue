<template>
  <div class="info-block">
    <div class="info-block-inner container">
       <h3>Консультации по продвижению в интернете</h3>
      <p>На консультации наши специалисты помогут вам улучшить ваш интернет-маркетинг или запустить его с нуля</p>
      <img src="/infoblock_m.png" alt="">
    </div>
  </div>
</template>

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



</style>
