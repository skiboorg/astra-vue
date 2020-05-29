<template>
  <div>
    <Header/>
    <main>

      <nuxt />

    </main>

  </div>
</template>

<script>
  import Vue from 'vue';
  import vueSmoothScroll from 'vue2-smooth-scroll';
  import VueTheMask from 'vue-the-mask';
  import VueFriendlyIframe from 'vue-friendly-iframe';
  import { Select, MessageBox, Checkbox, Tooltip , Radio, Dialog } from 'element-ui';




  Vue.component(Select.name, Select, MessageBox, Checkbox, Tooltip, Radio, Dialog);
  Vue.use(vueSmoothScroll)
  Vue.use(VueTheMask)
  Vue.use(VueFriendlyIframe);

  export default {

    // data:function(){
    //   return{
    //     tt:0
    //   }
    //
    // },
    //   methods:{
    //     test:function () {
    //         this.tt+=1
    //     }
    //   }
    // watch:{
    //   scrollY(val){
    //   }
    // },
    // mounted() {
    //   console.log('11')
    //   window.addEventListener('scroll', (event) => {
    //     this.scrollY = Math.round(window.scrollY);
    //
    //   });
    //
    // },

  }
</script>

<style lang="sass">
  body
    overflow-x: hidden



  .container
    max-width: 1290px
    padding: 0 10px
    margin: 0 auto



</style>
