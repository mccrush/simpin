<template>
  <div>
    <h3 class="mt-2">Шаг 1</h3>
    <hr />
    <p>Придумайте название, и укажите количество шагов вашей инструкции</p>
    <div class="form-group text-left">
      <label for="title">Название инструкции</label>
      <input class="form-control" type="text" name="title" id="title" v-model.trim="title" />
    </div>
    <div class="form-group text-left">
      <label for="countSteps">Количество шагов</label>
      <input class="form-control" type="number" name="countSteps" id="countSteps" v-model.number="countSteps" max="99" />
    </div>
    <div class="row">
      <div class="col-3">
        <router-link to="/" class="btn btn-block btn-warning">&nbsp;&#8617;&nbsp;</router-link>
      </div>
      <div class="col-9">
        <button class="btn btn-block btn-primary" @click="saveNewInst">Далее</button>
      </div>
    </div>
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
