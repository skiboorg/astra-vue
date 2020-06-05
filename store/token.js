export const state = () => ({
  token:''
})

export const mutations ={
  setToken (state,token){
    state.token = token
}
}

export const actions ={
    setToken({commit}){

     const token =  `f${(+new Date).toString(16)}`
      localStorage.setItem('token', token)
     commit('setToken',token)
  },

}

export const getters ={
  token: s => s.token
}
