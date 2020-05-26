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
