<template>
  <div>
    <header class="header-small">
      <div class="header-small__wrapper">
        <div class="header-small__top">
          <div class="header-small__top-logo">
             <img src="/logo.png" alt="">
            <nuxt-link to="/">ASTRAPROMO</nuxt-link>  </div>


          <div class="header-small__top-phone">
            <a href="callto:88008000000">8 800 800 00 00</a>
          <span>Звонки по России бесплатно</span>
          </div>
        </div>
      </div>
    </header>

    <section v-if="cart.length > 0" class="order">
      <div class="container">
        <h3>Ваш заказ</h3>


        <div class="order-wrapper">
          <div class="order-item" v-for="(item,index) in cart">
            <img class="order-item__img" :src="'http://site.astralid1.ru:8000' + item.image" alt="">
            <div class="order-item__group">
              <p class="order-item__name">{{item.title}}</p>
              <p class="order-item__price">{{item.price}} руб</p>
            </div>
            <p class="order-item__delete" @click="delItem(index,item.item_id)">удалить</p>
          </div>

        </div>
        <h4>С эти товаром покупают:</h4>

        <div class="addition-items">
          <div class="addition-item">
            <div class="addition-item__checkbox" >
              <el-checkbox v-model="domainChecked">Домен</el-checkbox>
              <el-tooltip content="Домен сайта – это уникальное имя, по которому можно зайти на веб-ресурс." placement="right" effect="light">
                <span class="question">?</span>
              </el-tooltip>
            </div>
            <p class="addition-item__price">500 руб</p>
          </div>
          <div class="addition-item">
            <div class="addition-item__checkbox" >
              <el-checkbox v-model="hostingChecked">Хостинг</el-checkbox>
              <el-tooltip content="Хостинг - услуга по предоставлению ресурсов для размещения информации на сервере, постоянно имеющем доступ к сети" placement="right" effect="light">
                <span class="question">?</span>
              </el-tooltip>
            </div>
            <p class="addition-item__price">500 руб</p>
          </div>
        </div>

        <h4>Варианты оплаты</h4>
        <div class="payment-type">
          <el-radio v-model="payment" label="Вариант1">Вариант 1</el-radio>
          <el-radio v-model="payment" label="Вариант2">Вариант 2</el-radio>
        </div>
        <h4>Номер телефона</h4>

        <div class="order-form">
          <input v-mask="'+7 (###) ### ## ##'" v-model="phone" type="text" placeholder="Телефон">
          <span class="btn" :class="{btnDisabled : !phone  }" @click="creareOrder">Заказать</span>
        </div>

      </div>

    </section>
    <section v-show="cart.length ===  0 && !orderDone" class="order"  style="text-align: center">
      <div class="container">
        <h3>Вы ничего не заказали</h3>
         <nuxt-link style="width: 200px" class="btn" to="/">На главную</nuxt-link>
      </div>

    </section>
     <section v-show="orderDone" class="order"  style="text-align: center">
      <div class="container">
        <h3>Спасибо за заказ</h3>
         <nuxt-link style="width: 200px" class="btn" to="/">На главную</nuxt-link>
      </div>

    </section>
  </div>
</template>

<script>

    import Header from '@/components/Header';
    export default {
        data:function(){
            return{
                domainChecked:false,
                hostingChecked:false,
                phone:'',
                payment:'Вариант1',
                orderDone:false
            }
        },
        mounted() {
            this.$store.dispatch('cart/getCartItems',localStorage.getItem('token'))
        },
        computed:{
            cart(){
                return this.$store.getters['cart/cart']
            },
        },
        methods:{
            delItem: function (id,item_id) {
                console.log('item_id',item_id)
                this.$store.dispatch('cart/delCartItem', id)
                this.$axios.$get(`/del_cart/${item_id}`)
            },
          creareOrder: function () {
              const info = {'domain':this.domainChecked,
                            'hosting':this.hostingChecked,
                            'phone':this.phone,
                            'payment':this.payment,
              }

              this.$store.dispatch('cart/clearCart')
              this.$axios.$get(`/new_order/${localStorage.getItem('token')}/${JSON.stringify(info)}`)
              this.orderDone = true

          }
        },
        components:{
            Header,
        },

    }
</script>


