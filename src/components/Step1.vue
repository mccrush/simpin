<template>
  <div>
    <h3>Step 1</h3>
    <p>Придумайте название, и укажите количество шагов вашей инструкции</p>
    <label for="title">Title</label>
    <br />
    <input type="text" name="title" v-model.trim="title" />
    <br />
    <label for="countSteps">Count Steps</label>
    <br />
    <input type="number" name="countSteps" v-model.number="countSteps" max="99" />
    <br />
    <button class="btn btn-primary" @click="saveNewInst">Далее</button>
  </div>
</template>

<script>
export default {
  name: "Step 1",
  date() {
    return {
      title: "",
      countSteps: 1
    };
  },
  methods: {
    saveNewInst() {
      this.$store.commit("setInstArr", {
        title: this.title,
        countSteps: this.countSteps
      });
    }
  }
};
</script>

<style scoped>
</style>
