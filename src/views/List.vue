<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-8 col-md-6 col-xl-6">
      <h5 class="d-flex justify-content-between">
        <span>Список инструкций</span>
        <router-link to="/create" v-if="user" class="btn btn-sm btn-light border" title="Создать инструкцию">Создать</router-link>
      </h5>
      <hr />

      <div class="input-group mb-3">
        <input type="search" class="form-control" placeholder="Найти инструкцию" aria-label="Найти инструкцию" v-model="filter" />
        <div class="input-group-append">
          <button class="btn btn-light border" type="button">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>

      <div v-if="filteringInstructions.length" class="list-group">
        <InstructionItem v-for="instruction in filteringInstructions" :key="instruction.id" :instruction="instruction" />
      </div>
      <div v-else-if="!filteringInstructions.length" class="text-center">
        <Loader />
      </div>
      <div v-else-if="!filteringInstructions.length && filter !== null" class="list-group">
        <router-link to="/" class="list-group-item list-group-item-action disabled">Инстркуций не найдено</router-link>
      </div>
      <div v-else class="list-group">
        <router-link v-if="user" to="/create" class="list-group-item list-group-item-action">Создать первую инструкцию</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InstructionItem from "@/components/InstructionItem";
import Loader from "@/components/Loader";
export default {
  name: "list",
  components: {
    InstructionItem,
    Loader
  },
  data() {
    return {
      filter: null
    };
  },
  computed: {
    instructions() {
      return this.$store.getters.instructions;
    },
    user() {
      return this.$store.getters.user;
    },
    filteringInstructions() {
      if (!this.filter) {
        return this.instructions;
      }
      if (this.filter) {
        return this.$store.getters.instructions.filter(
          instruction =>
            instruction.title
              .toUpperCase()
              .indexOf(this.filter.toUpperCase()) != -1 ||
            instruction.description
              .toUpperCase()
              .indexOf(this.filter.toUpperCase()) != -1
        );
      }
    }
  }
};
</script>
