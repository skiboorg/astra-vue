<template>
  <div>
    <Header/>
    <SortedList/>
    <Infoblock1 />
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
        data:function(){
            return{
                isVisible:false,

            }
        },
        async mounted() {
            if (!localStorage.getItem('token')){
                this.$store.dispatch('token/setToken')
            }




        },
        async fetch({store}){

            if (store.getters['filters/filters'].length === 0){
                await store.dispatch('filters/fetch')
            }
            if (store.getters['templates/templates'].length === 0){
                await store.dispatch('templates/fetch')
            }
            //  if (store.getters['cart/cart'].length === 0){
            //      console.log('token/token]',store.getters['token/token'])
            //     await store.dispatch('cart/getCartItems',store.getters['token/token'])
            // }


            // console.log('filters',store.getters['filters/filters'])
            // console.log('templates',store.getters['templates/templates'])
            console.log('cart',store.getters['cart/cart'])

        },

        components:{
            Header,
            SortedList,
            Infoblock1,
            Consultations,
            Callback,
            Feedback
        },
        methods: {
            visibilityChanged (isVisible, entry) {
                this.isVisible = isVisible
                console.log(this.isVisible)
                console.log(entry)
            },
        },
    }
</script>

<style lang=sass>



</style>
