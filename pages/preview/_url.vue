<template>
  <div>
    <div class="preview-header">
     <nuxt-link class="btn-return" to="/">На главную</nuxt-link>
      <div class="">
        <span class="preview__btn phone" @click="test = 'previewFramePhone'"></span>
        <span class="preview__btn ipad" @click="test = 'previewFrameIpad'"></span>
        <span class="preview__btn desktop" @click="test = 'previewFrameDesktop'"></span>
      </div>
      <div class="incart__btn">

          <nuxt-link v-show="cart.length>0" style="margin-right: 10px" class="btn" to="/order">
            Открыть заказ
          </nuxt-link>

        <span class="btn" @click="addToCart">Заказать</span>
              </div>
    </div>
    <div class="loader " v-bind:class="{loaderActiveC : loaderActive }">
        <div class="lds-roller" ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
     <vue-friendly-iframe :src="template_info.url" :class="test" @iframe-load="onLoad"></vue-friendly-iframe>
<!-- -->
  </div>

</template>

<script>
export default {
  async asyncData({ $axios, params }) {
  const template_info = await $axios.$get(`/get_template/${params.url}`)
  return { template_info }
  },
  data:function(){
      return{
        test:'previewFrameDesktop',
        loaderActive:true,
        token:''
      }
    },
   mounted(){
    console.log(this.template_info)
    //let csrftoken =document.cookie.match(new RegExp("(?:^|; )" + 'csrftoken'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))
    //this.csrf_token = csrftoken[1]
     let token = localStorage.getItem('token')
     console.log('token=', token )
      if (!token){
        let tt = `f${(+new Date).toString(16)}`;
        console.log(tt)
        localStorage.setItem('token', tt)
        this.token = tt
      }else {
        this.token  = token
      }



   },
    computed:{
            cart(){
                return this.$store.getters['cart/cart']


            },

        },
  methods:{
    onLoad(){
      console.log('load')
        this.loaderActive = false
    },
    addToCart: function () {

        this.$axios.$get(`/add_to_cart/${this.template_info.uuid}/${this.token}`)
        .then(() => {

          this.$confirm('Шаблон добавлен в заказ', {
          confirmButtonText: 'Открыть заказ',
          cancelButtonText: 'На главную',
          type: 'info',
          center: true
        }).then(() => {
          this.$router.push('/order')
        }).catch(() => {
          this.$router.push('/')
        });
        })
    }
  }
}
</script>

<style lang="sass" >
  .loader
    position: absolute
    width: 100vw
    left: 0
    right: 0
    bottom: 0
    height: 100vh
    background: rgba(0, 0, 0, 0.44)
    display: none
    align-items: center
    justify-content: center
    &.loaderActiveC
      display: flex
  .preview-header
    padding: 10px
    background: #F3F3F3
    height: 60px
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 30px
    border-bottom: 1px solid #522EE3

  .btn-return
    position: relative
    font: 16px 'Gotham Pro',sans-serif
    color: inherit
    transition: all .2s linear
    &::before
      position: absolute
      content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAr0lEQVRIie2S0QnCMBCGP4zgIOoQ2lWcRXSD4g6le7iKzqA+lNaHXCEES89w9yJ+cDSB3P8lTeCXOXmHD97hLoI03FyQh5sKPoVrqwPuQAtUHoK8LsBSK9EQgDVwBB6JRHWSb9mLpJfxrKSEsb/RLCphI703zU5KWIngVdg/y5bkBAsHwUG+V4dsKuBJfEU7q9BAvNizhA9APbU4f57a+Vi9hAdLQUe80AbD3/LHjjcZMGbbycYkrwAAAABJRU5ErkJggg==')
      top: -3px
      opacity: 0
      left: 0
      transition: all .3s linear
    &:hover
      transform: translateX(30px)
      &::before
        opacity: 1
        left: -30px




  .incart__btn
    flex-basis: 200px
    display: flex

    .bnt
      width: 100%
      padding: 15px 0
  .preview__btn
    display: inline-block
    width: 40px
    height: 40px
    background-size: contain !important

    box-sizing: border-box
    margin-right: 20px
    cursor: pointer
    transition: all .2s linear
    &:last-child
      margin-right: 0
    &:hover
      transform: translateY(-1px)
    &.desktop
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAABkUlEQVR4nO2asU4CQRRFD8RQSC3RXzH6AfpN2gp+l5JooYWaaGMnfoEVhWOxQ9ywg4s4cBf3nuQly+zmvTs3MxOSN2CMMcaYNtMDLoF3ILQkJsAozp1RAwSpYkh0IwCHtIcj4kroxAeAjk6PhADQTbwYo1+aq8ZVzTzK71lkwGdibFsIpefUPML8gLeAWoUaG6AWoMYGqAWosQFqAWpsgFqAGhugFqDGBqgFqLEBagFqbIBagBoboBagxgaoBaixAWoBamyAWoAaG6AW8EvGVBucy44tRN3R/SmegJ2E1pT+urFk17vpK6DSzf0Dya532d1t6A5fUzVl2bHjud8B3B7fukMwO12K63FQXBxqC7PtMIHiqpj6tFfFBRSXBYd8X5drQ7zFyffYILPiub7Lgg9BtQA1NmANOXeBc+AFmFLd03UH1Px305jrLOZuNAPgnvWd3nexRiMZAI8UQl+BE6CfIW8fOI05Q6zROBP2gAcKgc/A/gZqHKyhxsrcsvk/Mzc5hOc6BD8y5Wl6TWPMP+MLXszUwYRfyIAAAAAASUVORK5CYII=') no-repeat center
    &.ipad
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAABo0lEQVR4nO2bQW7CMBBFn6peAuiBmhKuU+i6qLcqbOhFSE9Q2LCiCydSlSISrHG+ieZJs7HQ158f22IxBsfpywLYAkfgnGkdgQ1QWjf/kUFzt9baqvlFLXgCXoGplXACpsCS4PWM0U7Y1mJLC7GBWBE8f1qIHWqxiYXYQEwInn8sxJozdW/08v0QIfwCVKS7vGKrAoqIfjppJ5lj803tr/g2CyDXIxHlM+YIjAoPQG1AjQegNqDGA1AbUOMBqA2o8QDUBtR4AGoDajwAtQE1HoDagBoPQG1AjQegNqDGA1AbUOMBqA2o8QDUBtR4AGoDajwAtQE1HoDagBqLAL6AXSZrSegaPbk0iqJY8xGZGB4NNHb8T1q1lgSfEhszMUfgG3giz11QpRBtb6WCMJGpngq9NCX6fMW3WQD3gt8BfVAGMCfcJ8mmvK1IdQT+Tp3vO34bgx8BK5onM9aPpQrCLmjf3hbMCJ5NnsxsarGVhdhAvBE8mzyaKmuxEyGEnJ/NzQjNN8/m5lbCa/R/dG6td6vmG0rClmruhBzrUHs0+/LO2PkFayCaVo7KPUoAAAAASUVORK5CYII=') no-repeat center
    &.phone
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACdElEQVR4nO2bvU4cMRRGDxGiITRQAa9CJEjFz5K8AT0vwEIoQeR9Qg1IiJXgCaCGkAIJJQo0SEik8B0xuxlYD77ja3Z9JAsxY3++/tZre7xjyGR8WQWOgHvgKdF0DxwCLe3G7yXQuLppV6vxqyL4AGwAM1rCDTADtHGxPqHUE45ErK0hFolNXMwHGmJ3IjatIRaJaVzMfzXEiu/Ue8Mr7tGaggPHB+sArKnTA0Yai6IZvHrs0PeAbIB1ANZkA6wDsCa2AR3gmOrZZxQ4BU6iRuSB5krwQrTWKu6tyb1zpbrU4tY0YJ3n5/byvkL5/3WlupIz4Ctww//P7b3pBviiUF9SBiwDj6LzA5gHxkv3x4EFYF/yPAKLgXUmY8AU8Ec0tjzyb0ve38BkQL3JGPCN50/el6In+Bj2EskYcCbl52uU+SxlTgPqNTOgQ/dcfivlP9bQmJAyt6/o9sPMgN78bw0kVMcrv8VSuIPftnYULAx4d1tr+SswyGQDrAOwZugNqLMt7ksxzRX8wv1oOYf/QuaT/L1+RTcaofPyd/zm/aq0F1BvMs8CYzgTrvFv+E9c48cC6k3GAF+9WPV0MfSD4NAb0MQs0I+XRnOzUb4fUZ/OFMljgA/ZAOsArKlrQNW+XOrXgikPJlUDS6rX8iDoQ911QNVcnfq1YPI6YJDJb4paB2BNflO06ShSx9KAFdzW1xWwZBhHX5qaBq9K2pcN6OdpUIviyIz2YaklXC+4JPyFqF5mcTGrHJk5FLFNDbFIbOFiVjk01RKxB5wJKR+bm8U1vjg2t6IlvMvbf92xSjtajS9o4bpUMSakmO4kRrVPPjPo/AMByMgDAgVJngAAAABJRU5ErkJggg==') no-repeat center


  .previewFrameDesktop
    iframe
      width: 100%
      height: calc(100vh - 100px)
  .previewFrameIpad
    background: url("/ipad.svg") no-repeat 50% 0
    display: flex
    justify-content: center
    height: 1242px
    iframe
      padding-top: 105px
      width: 783px
      height: 1145px
      min-height: calc(100vh - 60px)
  .previewFramePhone
    background: url("/phone.svg") no-repeat 50% 0
    display: flex
    justify-content: center
    height: 1242px
    iframe
      padding-top: 105px
      width: 335px
      height: 600px


  .lds-roller
    display: inline-block
    position: relative
    width: 80px
    height: 80px

  .lds-roller div
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite
    transform-origin: 40px 40px

  .lds-roller div:after
    content: " "
    display: block
    position: absolute
    width: 7px
    height: 7px
    border-radius: 50%
    background: #fff
    margin: -4px 0 0 -4px

  .lds-roller div:nth-child(1)
    animation-delay: -0.036s

  .lds-roller div:nth-child(1):after
    top: 63px
    left: 63px

  .lds-roller div:nth-child(2)
    animation-delay: -0.072s

  .lds-roller div:nth-child(2):after
    top: 68px
    left: 56px

  .lds-roller div:nth-child(3)
    animation-delay: -0.108s

  .lds-roller div:nth-child(3):after
    top: 71px
    left: 48px

  .lds-roller div:nth-child(4)
    animation-delay: -0.144s

  .lds-roller div:nth-child(4):after
    top: 72px
    left: 40px

  .lds-roller div:nth-child(5)
    animation-delay: -0.18s

  .lds-roller div:nth-child(5):after
    top: 71px
    left: 32px

  .lds-roller div:nth-child(6)
    animation-delay: -0.216s

  .lds-roller div:nth-child(6):after
    top: 68px
    left: 24px

  .lds-roller div:nth-child(7)
    animation-delay: -0.252s

  .lds-roller div:nth-child(7):after
    top: 63px
    left: 17px

  .lds-roller div:nth-child(8)
    animation-delay: -0.288s

  .lds-roller div:nth-child(8):after
    top: 56px
    left: 12px

  @keyframes lds-roller
    0%
      transform: rotate(0deg)

    100%
      transform: rotate(360deg)




  @media (max-width: 1024px)
    .preview__btn
      display: none
    .previewFrameIpad
      background: none
      iframe
        padding-top: 0
        width: 100%

</style>
