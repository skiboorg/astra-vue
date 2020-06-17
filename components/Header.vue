<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__top">
        <div class="header__top-logo">
          <img src="/logo.png" alt="">
          ASTRAPROMO
        </div>
         <div class="header__top-link"><a class="header__top-link-btn" href="#consult" v-smooth-scroll>Консультация</a></div>
        <div class="header__top-icons">
          <p class="header__top-icons-text">Пишите нам в:</p>
          <a class="header__top-icons-btn" target="_blank" href="https://wa.me/79000675472"> <img src="/wa-sm.png" alt=""><p>WhatsApp</p></a>
          <a class="header__top-icons-btn" target="_blank" href="viber://chat?number=79000675472"><img src="/vb-sm.png" alt=""><p>Viber</p></a>
        </div>
        <div class="header__top-icons-mobile">
          <a target="_blank" href="https://wa.me/79000675472"> <img style="margin-right: 10px" src="/wa.png" alt=""></a>
          <a target="_blank" href="viber://chat?number=79000675472"><img src="/vb.png" alt=""></a>
        </div>

        <div class="header__top-phone">
          <a href="callto:88008000000">8 800 800 00 00</a>
          <span>Звонки по России бесплатно</span>
        </div>
      </div>
      <div class="header__offer">
        <h1 ref="text" class="js-split"><span class="letter">Каталог</span> <span class="letter">авторских шаблонов</span> <span class="letter">для</span> <span class="letter">лендингов</span>
          <span class="letter">и</span> <span class="letter">интернет магазинов</span> <span class="letter">от 980 руб.</span></h1>
        <p class="header__offer-text">Чтобы посмотреть пример сайта,
          кликните на понравившийся шаблон</p>
        <span class="btn header-btn" href="#catalog" v-smooth-scroll>Смотреть каталог</span>
        <!--<div class="header__offer-form">-->
          <!--<input class="header__offer-form-input" type="text" >-->
          <!--<span class="header__offer-form-button">Найти</span>-->
        <!--</div>-->
      </div>

    </div>
    <!--<div class="header-img">-->
        <!--<img src="/h_bg.jpg" alt="">-->
      <!--</div>-->
  </header>
</template>

<script>

  import Splitter from 'split-html-to-chars'
  import { gsap, TimelineMax, Elastic } from "gsap/dist/gsap";
  export default {

    mounted(){
      // let els = document.querySelectorAll(".js-split");
      // [].forEach.call(els, function(el) {
      //   // outerHTML, thats *important*, no direct text nodes should be in parsed HTML
      //   el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
      // });
      const tl = new TimelineMax()
      let els1 = document.querySelectorAll(".letter");
      let els2 = document.querySelectorAll(".filter");
      console.log(els1)
      tl.set(els1,{y:20,opacity:0});
      tl.set(els2,{y:100,opacity:0});
      // tl.pause(true)
      tl.add("end", .1)
        .fromTo('.header__top-logo', .8, {y: -100,opacity:0}, {y:0,opacity:1})

        .fromTo('.header__top-icons', .8, {y: -100,opacity:0}, {y:0,opacity:1},"end")
        .fromTo('.header__top-link', .8, {y: -100,opacity:0}, {y:0,opacity:1},"end")
        .fromTo('.header__top-phone', .8, {y: -100,opacity:0}, {y:0,opacity:1},"end")
        .staggerTo(els1,.5,{y:0,opacity:1,ease: Elastic.easeOut.config(1, 0.3)},0.05,"end")
        .fromTo('.header__offer-text', .8, {y: 100,opacity:0}, {y:0,opacity:1},"end")
        .fromTo('.header-btn', .8, {y: 100,opacity:0}, {y:0,opacity:1},"end")
      tl
        .staggerTo(els2,.1,{y:0,opacity:1,ease: Elastic.easeOut.config(1, 0.3)},.1,"end")
  }
  }
</script>

<style lang="sass">
  .letter
    display: inline-block
    opacity: 0

  .header
    background: #F3F3F3 url(/header_bg.png) no-repeat center right
    height: 672px
    padding: 0 10px
    position: relative
    z-index: 1
    margin-bottom: 60px
    &-btn
      width: 345px
      opacity: 0
      font-size: 18px
      padding: 25px 0
      font-weight: 600
    &-img
      position: absolute
      top: 0
      right: 0
      z-index: -1

    &__wrapper
      max-width: 1440px
      margin: 0 auto
    &__top
      display: flex
      justify-content: space-between
      align-items: center
      padding-top: 25px
      margin-bottom: 70px
      &-logo
        flex-basis: 250px
        font: 16px 'Montserrat', sans-serif
        opacity: 0
        display: flex
        align-items: center
        img

          margin-right: 20px
      &-icons
        display: flex
        align-items: center
        justify-content: space-between
        flex-basis: 500px
        opacity: 0
        &-text
          margin-right: 30px
        &-btn
          display: flex
          align-items: center
          justify-content: center
          color: #000
          border: 1px solid #000
          box-sizing: border-box
          border-radius: 5px
          width: 165px
          padding: 9px 0
          text-align: center

          img
            width: 27px
            height: 26px
            margin-right: 10px
      &-icons-mobile
        display: none



      &-link
        font: 16px 'Gotham Pro',sans-serif
        cursor: pointer
        opacity: 0
        margin-right: 120px
        &-btn
          color: inherit
          border: 1px solid #522EE3
          box-sizing: border-box
          border-radius: 5px
          display: inline-block
          width: 165px
          padding: 13px 0
          text-align: center
      &-phone
        flex-grow: 1
        text-align: right
        font: 20px 'Montserrat', sans-serif
        opacity: 0
        display: flex
        flex-direction: column
        a
          color: inherit
        span
          font: 11px 'Gotham Pro',sans-serif
          letter-spacing: 0.2px
    &__offer
      max-width: 650px

      h1
        font: 34px 'Montserrat', sans-serif
        text-transform: uppercase
        line-height: 52px
        margin-bottom: 30px

      p
        font: 23px 'Gotham Pro',sans-serif
        line-height: 35px
        margin-bottom: 40px
        opacity: 0
      &-text
        position: relative


      &-form
        display: flex
        align-items: center
        opacity: 0
        &-input
          border: none
          background: #fff
          padding: 20px 10px
          border-top-left-radius: 10px
          border-bottom-left-radius: 10px
          font: 16px 'Gotham Pro',sans-serif
          &:focus
            outline: none
          width: 340px
        &-button
          border-top-right-radius: 10px
          border-bottom-right-radius: 10px
          background: #522EE3
          display: inline-block
          width: 180px
          padding: 20px 0
          text-align: center
          cursor: pointer
          color: #fff
          font: 16px 'Gotham Pro',sans-serif
  @media (max-width: 1270px)
    .header__top
      &-icons
        flex-basis: 340px
        &-text
          display: none
  @media (max-width: 1024px)
    .header__top
      &-link
        margin-right: 10px
  @media (max-width: 950px)
    .header__top
      &-link
        display: none
  @media (max-width: 768px)
    .header
      background: #F3F3F3
      height: 525px
      &-btn
        padding: 15px 0

      &__top
        &-icons-mobile
          display: flex
          flex-basis: 120px
          justify-content: flex-end

          img
            width: 35px
            height: 35px


        &-icons
          display: none

        &-link
          display: none
        &-phone
          display: none
      &__offer
        h1
          font-size: 20px
          line-height: 36px
          margin-bottom: 15px
        p
          font-size: 16px
          line-height: 26px
        &-form
          display: none
        &-text::after
          content: none
  @media (max-width: 520px)
    .header
      &-btn
        width: 100%



</style>
