<template>
  <div>
    <div class="preview-header">
     <div class="preview-header__wrapper">
         <nuxt-link class="btn-return" to="/">К списку шаблонов</nuxt-link>
        <div class="incart__btn">

          <nuxt-link v-show="cart.length>0" style="margin-right: 10px" class="btn" to="/order">
            Открыть заказ
          </nuxt-link>

        <span class="btn" @click="addToCart">Заказать</span>
              </div>
      <div class="devices">
        <span class="preview__btn phone" @click="test = 'previewFramePhone'"></span>
        <p @click="test = 'previewFramePhone'">Мобильный</p>
        <span class="preview__btn ipad" @click="test = 'previewFrameIpad'"></span>
        <p @click="test = 'previewFrameIpad'">Планшет</p>
        <span class="preview__btn desktop" @click="test = 'previewFrameDesktop'"></span>
        <p @click="test = 'previewFrameDesktop'">Десктоп</p>
      </div>

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
    background: #F4F4F4
    &__wrapper
      max-width: 1140px
      margin: 0 auto
      padding: 10px
      height: 65px
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: 30px


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

  .devices
    display: flex
    p
      cursor: pointer
      margin-right: 20px
      &:last-child
        margin-right: 0


  .incart__btn
    flex-basis: 200px
    display: flex

    .bnt
      width: 100%
      padding: 10px 0
  .preview__btn
    display: inline-block
    width: 22px
    height: 22px
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
      background: url(/computer.png) no-repeat center
    &.ipad
      background: url(/tablet.png) no-repeat center
    &.phone
      background: url(/phone.png) no-repeat center


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
    .previewFrameIpad
      background: none
      iframe
        padding-top: 0
        width: 100%
    .devices
      p
        display: none
  @media (max-width: 768px)
    .preview__btn
        display: none

</style>
