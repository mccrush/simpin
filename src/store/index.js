import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    instructions: JSON.parse(localStorage.getItem('instructions') || '[]')
  },
  mutations: {
    createInstruction(state, instruction) {
      state.instructions.push(instruction);

      localStorage.setItem('instructions', JSON.stringify(state.instructions))
    },
    createStep(state, { step, id }) {
      const instructions = state.instructions.concat();

      const index = instructions.findIndex(instruction => instruction.id === id);
      const instruction = instructions[index];

      const steps = instructions[index].steps;
      steps.push(step);

      instructions[index] = { ...instruction, steps }
      state.instructions = instructions;

      localStorage.setItem('instructions', JSON.stringify(state.instructions))
    },
    removeInstruction(state, id) {
      const instructions = state.instructions.filter(instruction => instruction.id !== id);
      // Так же следует удалить каталог с изображениями этой инструкции
      state.instructions = instructions;
      localStorage.setItem('instructions', JSON.stringify(state.instructions));
    },
    updateInstruction(state, { id, title, description }) {
      const instructions = state.instructions.concat();
      const index = instructions.findIndex(instruction => instruction.id === id)

      const instruction = instructions[index];
      instructions[index] = { ...instruction, title, description }

      state.instructions = instructions;
      localStorage.setItem('instructions', JSON.stringify(state.instructions));
    }
  },
  actions: {
    createInstruction({ commit }, instruction) {
      commit('createInstruction', instruction)
    },
    createStep({ commit }, { step, id }) {
      commit('createStep', { step, id })
    },
    removeInstruction({ commit }, id) {
      commit('removeInstruction', id)
    },
    updateInstruction({ commit }, { id, title, description }) {
      commit('updateInstruction', { id, title, description })
    }
  },
  getters: {
    instructions: state => state.instructions,
    instructionById: state => id => state.instructions.find(instruction => instruction.id === id)
  },
  modules: {
  }
})
