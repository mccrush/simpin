<template>
  <div>
    <h3>Step 1</h3>
    <p>Придумайте название, и укажите количество шагов вашей инструкции</p>
    <label for="title">Title</label>
    <br />
    <input type="text" name="title" id="title" v-model.trim="title" />
    <br />
    <label for="countSteps">Count Steps</label>
    <br />
    <input type="number" name="countSteps" id="countSteps" v-model.number="countSteps" max="99" />
    <br />
    <router-link to="/" class="btn btn-warning">&nbsp;&#8617;&nbsp;</router-link>
    <button class="btn btn-primary" @click="saveNewInst">Далее</button>
  </div>
</template>

<script>
export default {
  name: "Step1",
  data() {
    return {
      title: "",
      countSteps: 1
    };
  },
  methods: {
    saveNewInst() {
      this.$store.commit("setInstArr", {
        title: this.title,
        countSteps: this.countSteps,
        step: []
      });

      this.$router.push("/create/2");
    }
  }
};
</script>

<style scoped>
</style>
