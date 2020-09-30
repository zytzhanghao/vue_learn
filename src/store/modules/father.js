const state = {
  count: 1
}
const mutations = {
  init: state => {
    state.count++
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
