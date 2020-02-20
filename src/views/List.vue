<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-8 col-md-6 col-xl-4">
      <h5>Список инструкций</h5>
      <hr />
      <div v-if="filteringInstructions.length" class="list-group">
        <router-link v-for="instruction in filteringInstructions" :key="instruction.id" :to="'/instruction/' + instruction.id" class="list-group-item list-group-item-action">{{instruction.title}}</router-link>
      </div>
      <div v-else class="list-group">
        <router-link to="/create" class="list-group-item list-group-item-action">Создать первую инструкцию</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "list",
  data() {
    return {
      filter: null
    };
  },
  computed: {
    instructions() {
      return this.$store.getters.instructions;
    },
    filteringInstructions() {
      if (!this.filter) {
        return this.instructions;
      }
    }
  }
};
</script>
