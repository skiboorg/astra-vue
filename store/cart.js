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

  getCartItems({commit},items){
    console.log('items',items)
    commit('setCart',items)
  },
  delCartItem({commit,state},id){

     commit('remove',id)
  }
}

export const getters ={
  cart: s => s.cart
}
