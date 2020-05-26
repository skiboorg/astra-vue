<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__top">
        <div class="header__top-logo">ASTRAPROMO</div>
        <div class="header__top-icons">
          <a href=""> <img src="/wa.png" alt=""></a>
          <a href=""><img src="/vb.png" alt=""></a>
        </div>
        <div class="header__top-link"><a href="#consult" v-smooth-scroll>Консультация</a></div>
        <div class="header__top-phone">
          <a href="">8 800 800 00 00</a>
        </div>
      </div>
      <div class="header__offer">
        <h1 ref="text" class="js-split"><span class="letter">Каталог</span> <span class="letter">авторских шаблонов</span> <span class="letter">для</span> <span class="letter">лендингов</span>
          <span class="letter">и</span> <span class="letter">интернет магазинов</span></h1>
        <p class="header__offer-text">Чтобы посмотреть пример сайта,
          кликните на понравившийся шаблон</p>
        <div class="header__offer-form">
          <input class="header__offer-form-input" type="text" >
          <span class="header__offer-form-button">Найти</span>
        </div>
      </div>

    </div>
    <div class="header-img">
        <img src="/header_bg.png" alt="">
      </div>
  </header>
</template>

<script>

  import Splitter from 'split-html-to-chars'
  import { TimelineLite, Back,TimelineMax,Elastic } from 'gsap'
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
        .fromTo('.header__offer-form', .8, {y: 100,opacity:0}, {y:0,opacity:1},"end")
      tl
        .staggerTo(els2,.1,{y:0,opacity:1,ease: Elastic.easeOut.config(1, 0.3)},.1,"end")
  }
  }
</script>

<style lang="sass">
  .letter
    display: inline-block

  .header
    background: #F3F3F3
    height: 582px
    margin-bottom: 100px
    padding: 0 10px
    position: relative
    z-index: 1
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
      &-icons
        flex-basis: 250px
        img
          margin-right: 10px
      &-link
        font: 16px 'Gotham Pro',sans-serif
        cursor: pointer
        a
          color: inherit
      &-phone
        flex-grow: 1
        text-align: right
        font: 20px 'Montserrat', sans-serif
        a
          color: inherit
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
      &-form
        display: flex
        align-items: center
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
  @media (max-width: 1366px)
    .header
      &-img
        right: -25%
  @media (max-width: 1024px)
    .header
      &-img
        right: -50%
  @media (max-width: 950px)
    .header
      &-img
        right: -75%
  @media (max-width: 768px)
    .header
      background: #F3F3F3
      height: 450px
      &-img
        display: none

      margin-bottom: 20px
      &__top
        &-icons
          img
            width: 45px
            height: 45px
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



</style>
