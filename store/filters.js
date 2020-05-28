export const state = () => ({
  filters:[]
})

export const mutations ={
  setFilters (state,filters){
    state.filters = filters
}
}

export const actions ={
  async fetch({commit}){
    const filters = await this.$axios.$get('/get_types/')
    commit('setFilters',filters)
  }
}

export const getters ={
  filters: s => s.filters
}
