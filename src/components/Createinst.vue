<template>
  <div>
    <h5 class="mt-2 text-left">1. Название и количество шагов</h5>
    <hr />
    <form @submit.prevent="saveNewInst">
      <div class="form-group text-left">
        <label for="title">Название инструкции</label>
        <input class="form-control" type="text" name="title" id="title" v-model.trim="title" required autofocus @getvalue="getInstValue" />
      </div>
      <div class="form-group text-left">
        <label for="description">Описание инструкции</label>
        <textarea class="form-control" name="description" id="description" v-model.trim="description" placeholder="Опционально"></textarea>
      </div>
      <div class="form-group text-left">
        <label for="countSteps">Количество шагов</label>
        <div class="input-group">
          <input class="form-control form-control-lg" type="number" name="countSteps" id="countSteps" aria-describedby="button-addon4" v-model.number="countSteps" min="1" max="99" step="1" required />
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
          <button class="btn btn-block btn-success" type="submit" :disabled="!valid">Далее</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Createinst",
  props: {
    addNewInst: Function,
    changeState: Function
  },
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
      const newInst = {
        id: Date.now().toString(),
        title: this.title.trim(),
        description: this.description.trim(),
        countSteps: this.countSteps
      };

      this.addNewInst(newInst);
      this.$emit("changeState");
    },
    getInstValue() {
      console.log("Данный метод вызван");
      this.id = this.$store.state.tecValue.id;
      this.title = this.$store.state.tecValue.title;
      this.description = this.$store.state.tecValue.description;
      this.countSteps = this.$store.state.tecValue.countSteps;
    }
  },
  computed: {
    valid() {
      return (
        this.title.trim() && this.description.trim() && this.countSteps > 1
      );
    }
  }
};
</script>

<style scoped>
</style>
