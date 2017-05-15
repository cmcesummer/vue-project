import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    passwordInputOver: false
  },
  mutations: {
    changePasswordInputOverTrue(state) {
      state.passwordInputOver = true;
    },
    changePasswordInputOverFalse(state) {
      state.passwordInputOver = false;
    }
  },
  actions: {

  }
})
