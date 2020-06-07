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
     console.log('cart_items',cart_items)
  },
   delCartItem({commit},id){
     commit('remove',id)
  },
   clearCart({commit}){
     commit('setCart',[])
  }
}

export const getters ={
  cart: s => s.cart
}
