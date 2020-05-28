export const state = () => ({
  templates:[]
})

export const mutations ={
  setTemplates (state,templates){
    state.templates = templates
}
}

export const actions ={
  async fetch({commit}){
    const templates = await this.$axios.$get('/get_templates/')
    commit('setTemplates',templates)
  }
}

export const getters ={
  templates: s => s.templates
}
