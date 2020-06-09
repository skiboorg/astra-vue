<template>

  <div id="consult" class="consultation container">
    <h3>Для кого подходят консультации:</h3>
    <div class="consultation-item">
      <div class="consultation-item__left"><p>Для начинающих: </p></div>
      <div class="consultation-item__right">
        <ul>
          <li>Вместе составим портрет вашей целевой аудитории</li>
          <li>Проведем базовый анализ конкурентов</li>
          <li>Сделаем уникальное торговое предложение,
            которое выделит вас среди конкурентов</li>
          <li>Выберем канал продвижения</li>
          <li>Распишем стратегию продвижения (какие
            базовые настройки рекламы можно сделать)</li>
        </ul>
      </div>
    </div>
    <div class="consultation-item">
      <div class="consultation-item__left"><p>Для тех, у кого уже есть сайт:</p></div>
      <div class="consultation-item__right">
        <ul>
          <li>Проведем аудит сайта</li>
          <li>Поможем исправить проблемы сайта (скорость загрузки,не работающие кнопки, проблемы с аналитикой итд)</li>
          <li>Покажем способы увеличить конверсии на сайте</li>
          <li>Поможем подключить системы аналитики и CRM</li>
        </ul>
      </div>
    </div>
    <div class="consultation-item no-border">
      <div class="consultation-item__left"><p>Для тех, кто уже запускал рекламу:</p></div>
      <div class="consultation-item__right">
        <ul>
          <li>Проведем аудит ваших рекламных кабинетов и объявлений</li>
          <li>Проведем аудит сайта и социальных сетей</li>
          <li>Вы узнаете  как можно сэкономить на рекламе</li>
          <li>После консультации вы получите подробное руководство по улучшению вашего интернет маркетинга</li>
        </ul>
      </div>
    </div>
    <h3>Как проходит консультация</h3>
    <div class="consultation-steps" v-observe-visibility="visibilityStepsChanged">
      <div class="consultation-step">
        <p class="consultation-step__number">01</p>
        <p class="consultation-step__text">Вы оставляете заявку</p>
      </div>
      <div class="consultation-step">
        <p class="consultation-step__number">02</p>
        <p class="consultation-step__text">С вами связывается наш менеджер и вы согласовываете время консультации</p>
      </div>
      <div class="consultation-step">
        <p class="consultation-step__number">03</p>
        <p class="consultation-step__text">Специалист предварительно собирает информацию о вашем проекте</p>
      </div>
      <div class="consultation-step">
        <p class="consultation-step__number">04</p>
        <p class="consultation-step__text">Вы созваниваетесь со специалистом в скайпе, зуме или вотсапе. В консультациимогут принимать участие несколько специалистов</p>
      </div>
      <div class="consultation-step">
        <p class="consultation-step__number">05</p>
        <p class="consultation-step__text">В течение 24 часов вы получаете запись консультации и письменные рекомендации</p>
      </div>
    </div>
    <div class="consultation-price">
      <p class="consultation-price__text">Стоимость любой консультации</p>
      <p class="consultation-price__summ">989 рублей</p>
    </div>

  </div>

</template>


<script>

    import { gsap, TimelineMax, Elastic } from "gsap/dist/gsap";

    const tl = new TimelineMax()
    export default {

        data:function(){
            return{
                scrollY:0,
                targetEl:'',
                isVisible:false
            }

        },
        methods: {
            visibilityStepsChanged (isVisible, entry) {
                this.isVisible = isVisible
                console.log(this.isVisible)
                console.log(entry)
                let els1 = document.querySelectorAll(".consultation-step");
                if (isVisible){
                     tl.set(els1,{x:-100,opacity:0});
                tl
                    .staggerTo(els1,1,{x:0,opacity:1,ease: Elastic.easeOut.config(1, 0.3)},0.15)
                }

            },
        },



        mounted(){



            // let els = document.querySelectorAll(".js-split");
            // [].forEach.call(els, function(el) {
            //   // outerHTML, thats *important*, no direct text nodes should be in parsed HTML
            //   el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
            // });




        }
    }
</script>

<style lang="sass">
  .consultation
    margin-bottom: 120px !important
    h3
      font: 34px 'Montserrat',sans-serif
      line-height: 52px
      margin-bottom: 60px
      //max-width: 580px
      text-transform: uppercase
    &-item
      display: flex
      flex-wrap: wrap
      padding-bottom: 60px
      border-bottom: 1px solid #000
      margin-bottom: 60px
      &.no-border
        border-bottom: none
      &__left
        flex-basis: 350px
        p
          font: 28px 'Gotham Pro Bold',sans-serif
          line-height: 26px
      &__right
        flex-basis: 600px
        ul
          li
            font: 18px 'Gotham Pro',sans-serif
            margin-bottom: 20px
            &:last-child
              margin-bottom: 0
    .consultation-steps
      display: grid
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr))
      grid-gap: 20px
      margin-bottom: 60px

    .consultation-step
      padding: 50px 25px
      border: 1px solid #000000
      height: 350px
      opacity: 0
      &__number
        font: 37px 'Gotham Pro Bold',sans-serif
        margin-bottom: 30px
      &__text
        font: 16px 'Gotham Pro',sans-serif
    .consultation-price
      display: flex
      flex-wrap: wrap
      align-items: center
      &__text
        font: 23px 'Gotham Pro Bold',sans-serif
        color: #522EE3
        flex-basis: 230px
        margin-right: 100px
      &__summ
        font: 55px 'Gotham Pro Bold',sans-serif
        color: #522EE3
    @media (max-width: 520px)
      .consultation
        margin-bottom: 50px
        h3
          font-size: 20px
          line-height: 32px
          margin-bottom: 40px
        &-item
          padding-bottom: 30px
          margin-bottom: 30px
          &__left
            p
              font-size: 18px
              line-height: 35px
              margin-bottom: 15px
          &__right
            ul
              li
                font-size: 16px
                line-height: 25px
                margin-bottom: 10px

      .consultation-price
        &__text
          margin-bottom: 15px
        &__summ
          font-size: 40px
      .consultation-step
        height: 200px
        padding: 30px 15px
        &__number
          margin-bottom: 15px



</style>
