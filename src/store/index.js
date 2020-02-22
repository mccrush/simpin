import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from "@/main.js";
import { db } from "@/main.js";

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    instructions: [],
    //instructions: JSON.parse(localStorage.getItem('instructions') || '[]'),
    user: null
  },
  mutations: {
    getInstructions(state) {
      db.collection('instructions').get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            state.instructions.push(doc.data());
            //console.log(doc.id, '=>', doc.data());
          });
        })
        .catch((err) => {
          console.log('Error getting documents', err);
        });
    },
    createInstruction(state, instruction) {
      state.instructions.push(instruction);

      db.collection('instructions')
        .doc(instruction.id)
        .set(instruction)
        .then(() => { console.log("Document successfully written!"); })
        .catch(err => { console.error("Error writing document: ", err) });
      //let setAda = docRef.set(instruction);


      //localStorage.setItem('instructions', JSON.stringify(state.instructions))
    },
    createStep(state, { step, id }) {
      const instructions = state.instructions.concat();

      const index = instructions.findIndex(instruction => instruction.id === id);
      const instruction = instructions[index];

      const steps = instructions[index].steps;
      steps.push(step);

      instructions[index] = { ...instruction, steps }
      state.instructions = instructions;

      // db.collection('instructions')
      //   .doc(instruction.id)
      //   .set(instruction)
      //   .then(() => { console.log("Document successfully written!"); })
      //   .catch(err => { console.error("Error writing document: ", err) });

      db.collection('instructions')
        .doc(id)
        .update({ steps })
        .then(() => { console.log("Document successfully updated!"); })
        .catch(error => { console.error("Error updating document: ", error); });

      //localStorage.setItem('instructions', JSON.stringify(state.instructions))
    },
    removeInstruction(state, id) {
      const instructions = state.instructions.filter(instruction => instruction.id !== id);
      // Так же следует удалить каталог с изображениями этой инструкции
      state.instructions = instructions;

      db.collection('instructions').doc(id).delete();

      // localStorage.setItem('instructions', JSON.stringify(state.instructions));
    },
    updateInstruction(state, { id, title, description }) {
      const instructions = state.instructions.concat();
      const index = instructions.findIndex(instruction => instruction.id === id)

      const instruction = instructions[index];
      instructions[index] = { ...instruction, title, description }

      state.instructions = instructions;

      db.collection('instructions')
        .doc(id)
        .update({ title, description })
        .then(() => { console.log("Document successfully updated!"); })
        .catch(error => { console.error("Error updating document: ", error); });

      //localStorage.setItem('instructions', JSON.stringify(state.instructions));
    },
    updateStep(state, { id, steps }) {
      const instructions = state.instructions.concat();
      const index = instructions.findIndex(instruction => instruction.id === id)

      const instruction = instructions[index];
      instructions[index] = { ...instruction, steps }

      state.instructions = instructions;

      db.collection('instructions')
        .doc(id)
        .update({ steps })
        .then(() => { console.log("Document successfully updated!"); })
        .catch(error => { console.error("Error updating document: ", error); });

      //localStorage.setItem('instructions', JSON.stringify(state.instructions));
    },
    logOut(state) {
      state.user = null;
    },
    logIn(state) {
      state.user = auth.currentUser;
    }
  },
  actions: {
    getInstructions({ commit }) {
      commit('getInstructions')
    },
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
