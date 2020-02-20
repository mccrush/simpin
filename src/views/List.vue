<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-8 col-md-6 col-xl-4">
      <h5 class="d-flex justify-content-between">
        <span>Список инструкций</span>
        <router-link to="/create" class="btn btn-sm btn-light">Создать</router-link>
      </h5>
      <hr />

      <div class="input-group mb-3">
        <input type="search" class="form-control" placeholder="Найти инструкцию" aria-label="Найти инструкцию" />
        <div class="input-group-append">
          <button class="btn btn-light border" type="button">Поиск</button>
        </div>
      </div>

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
