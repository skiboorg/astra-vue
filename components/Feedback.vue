<template>
  <div class="feedback">
    <div class="container">
      <h3>Отзывы</h3>
       <agile :options="myOptions">
        <div class="slide">
            <h3>slide 1</h3>
        </div>
        <div class="slide">
            <h3>slide2</h3>
        </div>
          <div class="slide">
            <h3>slide3</h3>
        </div>
          <div class="slide">
            <h3>slide4</h3>
        </div>
          <div class="slide">
            <h3>slide5</h3>
        </div>
    </agile>
      <h4>Если у вас появились вопросы задайте их нам </h4>
      <div class="feedback-icons">
          <a href=""> <img src="/wa.png" alt=""></a>
          <a href=""><img src="/vb.png" alt=""></a>


        </div>
    </div>
  </div>
</template>

<script>
export default {
    data:function() {
      return {
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
    }
}
</script>




<style lang="sass">
  .slide
    border: 1px solid red
    width: 400px
    height: 500px
  .feedback
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





</style>
