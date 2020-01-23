import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    instArr: [
      {
        title: 'Test inst',
        countSteps: 2,
        step: [
          {
            title: 'Step 1',
            description: 'Desc 1'
          },
          {
            title: 'Step 2',
            description: 'Desc 2'
          }
        ]
      }
    ]
  },
  mutations: {
    getInstArr(state) {
      return state.instArr;
    },
    setInstArr(state, payload) {
      state.instArr.push(payload);
    },
    setNewStep(state, payload) {
      state.instArr[payload.index].step.push(payload.content);
    }
  },
  actions: {
  },
  modules: {
  }
})
