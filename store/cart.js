export const state = () => ({
  cart:[]
})

export const mutations ={
  setCart (state,cart){
    state.cart = cart
},
  remove (state,cart,id){
    console.log('del from store',id)
    state.cart.splice(id,1)
  }
}

export const actions ={

   async getCartItems({commit},token){


    const cart_items = await this.$axios.$get(`/get_cart/${token}`)

     commit('setCart',cart_items)
  },
  delCartItem({commit,state},id){

     commit('remove',id)
  }
}

export const getters ={
  cart: s => s.cart
}
