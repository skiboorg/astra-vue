<template>
  <div>
    <Header/>
    <SortedList/>
    <Infoblock1/>
    <Consultations/>
    <Callback/>
    <Feedback/>
  </div>
</template>

<script>
  import SortedList from '@/components/SortedList';
  import Infoblock1 from '@/components/InfoBlock1';
  import Consultations from '@/components/Consultations';
  import Callback from '@/components/Callback';
  import Feedback from '@/components/Feedback';
 import Header from '@/components/Header';
  export default {
      async fetch({store}){
          console.log('start store')
          if (store.getters['filters/filters'].length === 0){
              await store.dispatch('filters/fetch')
          }
          if (store.getters['templates/templates'].length === 0){
              await store.dispatch('templates/fetch')
          }


          console.log('filters',store.getters['filters/filters'])
          console.log('templates',store.getters['templates/templates'])
          console.log('cart',store.getters['cart/cart'])

      },

    components:{
      Header,
      SortedList,
      Infoblock1,
      Consultations,
      Callback,
      Feedback
    }
  }
</script>

<style lang=sass>



</style>
