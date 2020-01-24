<template>
  <div>
    <h5 class="mt-2 text-left">1. Название и количество шагов</h5>
    <hr />
    <div class="form-group text-left">
      <label for="title">Название инструкции</label>
      <input class="form-control" type="text" name="title" id="title" v-model.trim="title" required autofocus />
    </div>
    <div class="form-group text-left">
      <label for="description">Описание инструкции</label>
      <textarea class="form-control" name="description" id="description" v-model.trim="description" placeholder="Опционально"></textarea>
    </div>
    <div class="form-group text-left">
      <label for="countSteps">Количество шагов</label>
      <div class="input-group">
        <input class="form-control form-control-lg" type="text" name="countSteps" id="countSteps" aria-describedby="button-addon4" v-model.number="countSteps" min="1" max="99" step="1" required />
        <div class="input-group-append" id="button-addon4">
          <button class="btn btn-outline-secondary btn-lg" type="button" @click="countSteps--">&or;</button>
          <button class="btn btn-outline-secondary btn-lg" type="button" @click="countSteps++">&nbsp;&nbsp;&and;&nbsp;&nbsp;</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <router-link to="/" class="btn btn-block btn-success" title="Отмена">&nbsp;&lt;&nbsp;</router-link>
      </div>
      <div class="col-3">
        <button class="btn btn-block btn-light" title="Удалить">&nbsp;D&nbsp;</button>
      </div>
      <div class="col-6">
        <button class="btn btn-block btn-success" @click="saveNewInst">Далее</button>
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
      description: "",
      countSteps: 1
    };
  },
  methods: {
    saveNewInst() {
      if (this.title == "") {
        alert("А как же название?");
        return false;
      }
      if (this.countSteps < 1) {
        alert("Количество шагов не может быть меньше 1");
        return false;
      }

      this.$store.commit("setTecValue", {
        id: this.id,
        title: this.title,
        description: this.description,
        countSteps: this.countSteps
      });

      this.$store.commit("setInstArr", {
        id: this.id,
        title: this.title,
        description: this.description,
        countSteps: this.countSteps,
        step: []
      });

      this.$router.push("/create/2");
    }
  },
  computed: {}
};
</script>

<style scoped>
</style>
