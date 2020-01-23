<template>
  <div>
    <h3>Step 2</h3>
    <p>Заполнение всех шагов в цикле</p>
    <label for="title">Название шага</label>
    <br />
    <input type="text" name="title" v-model.trim="title" />
    <br />
    <label for="description">Описание</label>
    <br />
    <input type="text" name="description" v-model.trim="description" />
    <br />
    <!-- <router-link to="/create/1" class="btn btn-warning">&nbsp;&#8617;&nbsp;</router-link> -->
    <button class="btn btn-primary" @click="saveNewStep">Далее</button>
  </div>
</template>

<script>
export default {
  name: "Step2",
  data() {
    return {
      title: "",
      description: ""
    };
  },
  methods: {
    saveNewStep() {
      const len = this.$store.state.instArr.length - 1;

      const res = this.$store.commit("setNewStep", {
        content: {
          title: this.title,
          description: this.description
        },
        index: len
      });
      this.$router.push("/create/3");
    }
  }
};
</script>

<style scoped>
</style>
