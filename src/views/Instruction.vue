<template>
  <div class="row justify-content-center">
    <div v-if="instruction" class="col-12 col-sm-8 col-md-6 col-xl-4">
      <h5>{{instruction.title}}</h5>
      <hr />
      <p>{{instruction.description}}</p>
      <button class="btn btn-block btn-success">Запустить инструкцию</button>
    </div>
    <div v-else class="col-12 col-sm-8 col-md-6 col-xl-4">
      <h5 class="text-center">Инструкция не найдена</h5>
      <hr />
      <router-link to="/" class="text-center d-block">Вернуться к списку инструкций</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    instruction() {
      return this.$store.getters.instructionById(+this.$route.params.id);
    }
  }
};
</script>