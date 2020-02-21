import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from "@/main.js";

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    instructions: JSON.parse(localStorage.getItem('instructions') || '[]'),
    user: null
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
    },
    updateStep(state, { id, steps }) {
      const instructions = state.instructions.concat();
      const index = instructions.findIndex(instruction => instruction.id === id)

      const instruction = instructions[index];
      instructions[index] = { ...instruction, steps }

      state.instructions = instructions;
      localStorage.setItem('instructions', JSON.stringify(state.instructions));
    },
    logOut(state) {
      state.user = null;
    },
    logIn(state) {
      state.user = auth.currentUser;
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
    },
    updateStep({ commit }, { id, steps }) {
      commit('updateStep', { id, steps })
    },
    logOut({ commit }) {
      commit('logOut')
    },
    logIn({ commit }) {
      commit('logIn')
    }
  },
  getters: {
    instructions: state => state.instructions,
    instructionById: state => id => state.instructions.find(instruction => instruction.id === id),
    user: state => state.user
  },
  modules: {
  }
})
