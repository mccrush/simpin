<template>
  <div>
    <h4 class="mt-2">Шаг 1</h4>
    <hr />
    <p>Введите название и количество шагов</p>
    <div class="form-group text-left">
      <label for="title">Название инструкции</label>
      <input class="form-control" type="text" name="title" id="title" v-model.trim="title" required />
    </div>
    <div class="form-group text-left">
      <label for="countSteps">Количество шагов</label>
      <div class="input-group">
        <input class="form-control" type="text" name="countSteps" id="countSteps" aria-describedby="button-addon4" v-model.number="countSteps" min="1" max="99" step="1" required />
        <div class="input-group-append" id="button-addon4">
          <button class="btn btn-outline-secondary" type="button" @click="countSteps--">&or;</button>
          <button class="btn btn-outline-secondary" type="button" @click="countSteps++">&and;</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <router-link to="/" class="btn btn-block btn-warning" title="Отмена">&nbsp;&lt;&nbsp;</router-link>
      </div>
      <div class="col-3">
        <button class="btn btn-block btn-danger" title="Удалить">&nbsp;D&nbsp;</button>
      </div>
      <div class="col-6">
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
      id: "" + Date.now(),
      title: "",
      countSteps: 1
    };
  },
  methods: {
    saveNewInst() {
      if (this.countSteps < 1) {
        alert("Количество шагов не может быть меньше 1");
        return false;
      }
      if (this.title == "") {
        alert("А как же название?");
        return false;
      }
      this.$store.commit("setInstArr", {
        id: this.id,
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
