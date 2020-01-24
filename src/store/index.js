import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    instArr: [
      {
        id: '1234556574',
        title: 'Пример инструкции',
        countSteps: 3,
        description: 'Это пример простой, текстовй инструкции. Выполняйте указания для достижения результата.',
        step: [
          {
            title: 'Шаг 1',
            description: 'Первое, что необходимо сделать - это понять, что любую сложную задачу, можно разбить на простые, элементарные шаги.'
          },
          {
            title: 'Шаг 2',
            description: 'Научиться выполнять в один момент времени, всего одну задачу. Многозадачность, на самом деле, довольно редкая способность.'
          },
          {
            title: 'Шаг 3',
            description: 'На этом инструкция окончена. Мы надеимся, что вы достигли результата. Поделитесь этой инструкцией с друзьями.'
          }
        ]
      }
    ],
    tecValue: {
      id: "",
      title: "",
      description: "",
      countSteps: ''
    },
    authType: 'login'
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
    },
    setTecValue(state, payload) {
      state.tecValue.id = payload.id;
      state.tecValue.title = payload.id;
      state.tecValue.description = payload.id;
      state.tecValue.countSteps = payload.countSteps;
    },
    setAuthType(state, payload) {
      state.authType = payload.type;
    }
  },
  actions: {
  },
  modules: {
  }
})
