<template>
  <div class="feedback">
    <div class="container">
      <div class="additional-services">
         <h3>А еще мы оказываем услуги:</h3>
          <div class="additional-services__wrapper">
            <div class="additional-services__item">
              <img src="/ad1.png" alt="">
              <p class="additional-services__item-name">Настройка и ведение контекстной рекламы (Яндекс/Google)</p>
              <p class="additional-services__item-price">от 6 900 руб</p>
            </div>
            <div class="additional-services__item">
                <img src="/ad2.png" alt="">
              <p class="additional-services__item-name">Настройка и ведение рекламы в социальных сетях (VK, FB, MT, Youtube, TikTok)</p>
              <p class="additional-services__item-price">от 6 900 руб</p>
            </div>
            <div class="additional-services__item">
                <img src="/ad3.png" alt="">
              <p class="additional-services__item-name">Поисковое SEO продвижение сайтов любой сложности</p>
              <p class="additional-services__item-price">от 6 900 руб</p>
            </div>
          </div>
      </div>
      <h3>Отзывы</h3>
       <agile :options="myOptions">
        <div class="slide" @click="open(f.videoID,f.name)" v-for="f in feedBacks">
          <div class="slide__inner">
            <img :src="getVideoImg(f.videoID)" alt="">
          </div>
        </div>
      </agile>
      <h4>Если у вас появились вопросы задайте их нам </h4>
      <div class="feedback-icons">
       <a target="_blank" href="https://wa.me/79000675472"> <img src="/wa.png" alt=""></a>
          <a target="_blank" href="viber://chat?number=79000675472"><img src="/vb.png" alt=""></a>
      </div>
      <div class="video-modal">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data:function() {
      return {
        feedBacks:[
          {name:'Отзыв1',videoID: 'tgbNymZ7vqY'},
          {name:'Отзыв2',videoID: 'HGSB0Scnazg'}
        ],
        globalVideoId:'',

        myOptions: {
            navButtons: true,
            centerMode:true,
             dots: false,
            responsive: [
              {
                    breakpoint: 520,
                    settings: {
                        slidesToShow:1,
                        dots: true,
                        navButtons: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow:2,
                        dots: true,
                        navButtons: false,
                    }
                },

                {
                    breakpoint: 900,
                    settings: {
                      slidesToShow:3,
                        navButtons: true,

                    }
                }
            ]
        }
      }
    },
  methods: {
      getVideoImg(id){
        return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
      },
      open(id,name) {
        this.$confirm(`<iframe class="fv" width="100%" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`, name, {
          dangerouslyUseHTMLString: true,
          showConfirmButton:false,
          cancelButtonText: 'Закрыть',
          beforeClose:function(action, instance, done){
            done()
            let iframe = document.querySelector('.fv')
            let iframeSrc = iframe.src;
		        iframe.src = iframeSrc;

            console.log('close')


          }
        })
        ;
      }
    }
}
</script>

<style lang="sass">
  .additional-services
    margin-bottom: 70px
    &__wrapper
      display: grid
      grid-template-columns: repeat(auto-fit,minmax(300px,1fr))
      grid-column-gap: 80px
      grid-row-gap: 20px
    &__item
      text-align: center
      background: #F9F9F9
      padding: 30px
      img
        margin-bottom: 20px
      &-name
        margin-bottom: 50px
        min-height: 70px
      &-price
        font-weight: 600
        font-size: 24px

  .agile__nav-button
    font-size: 60px !important
    color: #522EE3 !important
    line-height: 0
    margin-bottom: 20px
  .slide
    width: 100px
    height: 300px
    padding: 0 10px
    cursor: pointer
    &__inner
      user-select: none

  .feedback
    margin-bottom: 60px
    h3
      font: 34px 'Montserrat',sans-serif
      line-height: 52px
      margin-bottom: 50px
      text-transform: uppercase
    h4
      font: 32px 'Gotham Pro',sans-serif
      line-height: 42px
      max-width: 480px
      margin: 0 auto
      text-align: center
  .agile
    &__actions
      margin-top: 20px

    &__nav-button
      background: transparent
      border: none
      color: #ccc
      cursor: pointer
      font-size: 24px
      transition-duration: .3s

      &:hover
        color: #888

    &__dot
      margin: 0 10px

      button
        background-color: #eee
        border: none
        border-radius: 50%
        cursor: pointer
        display: block
        height: 10px
        font-size: 0
        line-height: 0
        margin: 0
        padding: 0
        transition-duration: .3s
        width: 10px

      &--current,
      &:hover
        button
          background-color: #888
  .feedback-icons
    display: flex
    align-items: center
    justify-content: center

  @media (max-width: 520px)
    .feedback
      h3
        font-size: 20px
        line-height: 32px
    .additional-services
      margin-bottom: 40px
      &__item
        padding: 20px
        img
          margin-bottom: 20px
        &-name
          margin-bottom: 30px





</style>
