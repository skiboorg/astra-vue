<template>

  <div id="consult" class="consultation ">
    <div class="container">
    <h3>Для кого подходят консультации:</h3>
    <div class="consultation-items" v-observe-visibility="visibilityStepsChanged">
      <div class="consultation-item">
        <p class="consultation-item__title">Кто только хочет запустить продажи через интернет</p>
        <p class="consultation-item__subtitle">но не знает с чего начать и как не потратить деньги зря</p>

        <p class="consultation-item__info">Вместе составим портрет Вашей целевой аудитории</p>
        <p class="consultation-item__info">Проведем базовый анализ конкурентов</p>
        <p class="consultation-item__info">Сделаем уникальное торговое предложение, которое выделит вас среди конкурентов</p>
        <p class="consultation-item__info">Выберем канал продвижения</p>
        <p class="consultation-item__info">Распишем стратегию продвижения (какие базовые настройки рекламы можно сделать)</p>
      </div>
       <div class="consultation-item">
        <p class="consultation-item__title">Для тех, кто уже запустил сайт</p>
        <p class="consultation-item__subtitle">но хочет улучшить его показатели</p>

        <p class="consultation-item__info">Проведем аудит сайта. Покажем в каких частях сайта Вы теряете клиентов и деньги</p>
        <p class="consultation-item__info">Поможем исправить технические проблемы сайта (скорость загрузки, неработающие кнопки, проблемы с аналитикой и т.д.)</p>
        <p class="consultation-item__info">Составим пошаговую инструкцию по решению проблем Вашего сайта. Вам останется передать ее программисту или внести правки самостоятельно</p>
        <p class="consultation-item__info">Сделаем уникальное торговое предложение, которое выделит Вас среди конкурентов</p>
        <p class="consultation-item__info">Выберем канал продвижения</p>
        <p class="consultation-item__info">Распишем стратегию продвижения (какие базовые настройки рекламы можно сделать)</p>

      </div>
       <div class="consultation-item">
        <p class="consultation-item__title">Кто уже запустил рекламу</p>
        <p class="consultation-item__subtitle">но хочет больше и лучше</p>

        <p class="consultation-item__info">Проведем аудит Ваших рекламных кампаний и объявлений. Дадим список рекомендаций, который поможет вам сэкономить рекламный бюджет и увеличить эффективность рекламы</p>
        <p class="consultation-item__info">Проведем аудит сайта и групп в социальных сетях. Покажем, в каких местах Вы теряете клиентов и как это можно исправить</p>
        <p class="consultation-item__info">Расскажем, как можно сэкономить на рекламе до 20% рекламного бюджета</p>
        <p class="consultation-item__info">Выберем канал продвижения</p>
        <p class="consultation-item__info">Дадим подробное руководство по улучшению вашего интернет-маркетинга или лендинга. Вы получите список простых и понятных шагов, часть из которых можно внедрить в течение одного дня</p>


      </div>
    </div>

    <h3>Как проходит консультация</h3>
    <div class="consultation-steps" v-observe-visibility="visibilitySteps1Changed">
      <div class="consultation-step">

        <p data-num="01" class="consultation-step__img"><img src="/s1.png" alt=""></p>
        <p class="consultation-step__text">Вы оставляете заявку</p>
      </div>
      <div class="consultation-step">

        <p data-num="02" class="consultation-step__img"><img src="/s6.png" alt=""></p>
        <p class="consultation-step__text">Вносите предоплату</p>
      </div>
      <div class="consultation-step">
         <p data-num="03" class="consultation-step__img"><img src="/s2.png" alt=""></p>
        <p class="consultation-step__text">С Вами связывается менеджер и Вы согласовываете время консультации</p>
      </div>
      <div class="consultation-step">
         <p data-num="04" class="consultation-step__img"><img src="/s3.png" alt=""></p>
        <p class="consultation-step__text">Специалист предварительно собирает информацию о Вашем проекте</p>
      </div>
      <div class="consultation-step">
         <p data-num="05" class="consultation-step__img"><img src="/s4.png" alt=""></p>
        <p class="consultation-step__text">Далее специалист связывается с Вами по видео-концеренции и проводит консультацию </p>
      </div>
      <div class="consultation-step">
         <p data-num="06" class="consultation-step__img"><img src="/s5.png" alt=""></p>
        <p class="consultation-step__text">В течение 24 часов Вы получаете запись консультации и письменные рекомендации</p>
      </div>
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
        let els1 = document.querySelectorAll(".consultation-item");
        if (isVisible){
          tl.set(els1,{x:-100,opacity:0});
          tl
            .staggerTo(els1,1,{x:0,opacity:1,ease: Elastic.easeOut.config(1, 0.3)},0.15)
        }

      },
      visibilitySteps1Changed (isVisible, entry) {
        this.isVisible = isVisible
        let els1 = document.querySelectorAll(".consultation-step");
        if (isVisible){
          tl.set(els1,{y:100,opacity:0});
          tl
            .staggerTo(els1,1,{y:0,opacity:1},0.15)
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

    h3
      font: 34px 'Montserrat',sans-serif
      line-height: 52px
      margin-bottom: 60px
      //max-width: 580px
      text-transform: uppercase
    &-items
      display: grid
      grid-template-columns: repeat(auto-fill,minmax(350px,1fr))
      grid-gap: 20px
      margin-bottom: 120px
    &-item
      padding: 40px 10px 40px 40px
      background: #F9F9F9
      border: 3px solid #522EE3
      box-sizing: border-box
      &__title
        font-weight: 600
        font-size: 24px
        min-height: 60px
        margin-bottom: 20px
        color: #000
        line-height: 30px

      &__subtitle
        min-height: 60px
        font-size: 18px
        font-weight: 600
        color: #522EE3
        line-height: 30px
        margin-bottom: 60px

        max-width: 80%
      &__info
        position: relative
        font-size: 18px
        line-height: 30px
        margin-bottom: 20px
        &::before
          position: absolute
          content: ''
          width: 9px
          height: 9px
          background: #522EE3
          left: -20px
          top: 10px
    .consultation-steps
      display: grid
      grid-template-columns: repeat(auto-fill,minmax(180px,1fr))
      grid-gap: 20px
      margin-bottom: 60px
    .consultation-step
      text-align: center
      opacity: 0
      &__img
        position: relative
        margin-bottom: 15px
        &::before
          position: absolute
          content: attr(data-num)
          font-weight: 600
          left:
          background: #522EE3
          width: 35px
          height: 35px
          border-radius: 50%
          display: flex
          align-items: center
          justify-content: center
          color: #ffffff
      &__text
        position: relative
        font: 16px 'Gotham Pro',sans-serif
    .consultation-price
      background: #522EE3
      padding: 50px 0
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      &__text
        font-weight: 600
        font-size: 34px
        color: #fff
        margin-bottom: 30px
        text-transform: uppercase
        text-align: center
      &__summ
        font: 55px 'Gotham Pro Bold',sans-serif
        color: #fff
    @media (max-width: 520px)
      .consultation
        margin-bottom: 50px
        h3
          font-size: 20px
          line-height: 32px
          margin-bottom: 40px
      .consultation-price
        &__text
          margin-bottom: 15px
          font-size: 24px
        &__summ
          font-size: 40px
      .consultation-step
        height: 200px
        padding: 30px 15px
        &__number
          margin-bottom: 15px



</style>
