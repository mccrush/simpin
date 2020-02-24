<template>
  <div class="row justify-content-center">
    <div v-if="instruction && currentstep === null" class="col-12 col-sm-8 col-md-6 col-xl-4">
      <h5>{{instruction.title}}</h5>
      <hr />
      <!-- <hr class="mb-1" />
      <p class="small text-muted">
        <i class="far fa-eye mr-1"></i> 256
        <i class="far fa-star ml-2 mr-1"></i> 4.6/5
        <i class="fas fa-user ml-2 mr-1"></i>mail@mail.ru
      </p>-->
      <p>{{instruction.description}}</p>

      <div v-if="user" class="btn-group btn-block" role="group" aria-label="Basic example">
        <button v-if="user.uid === instruction.user" type="button" class="btn btn-secondary" @click="removeInstruction" title="Удалить инструкцию">Удалить</button>
        <router-link v-if="user.uid === instruction.user" :to="'/edit/'+instruction.id" type="button" class="btn btn-light border" title="Редактировать инструкцию">Редактировать</router-link>
        <button type="button" class="btn btn-success" @click="currentstep = 0" title="Запустить инструкцию">Запустить</button>
      </div>

      <div v-else class="btn-group btn-block" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-success" @click="currentstep = 0" title="Запустить инструкцию">
          <i class="fas fa-play"></i>
        </button>
      </div>

      <router-link to="/" class="btn btn-block btn-light border">К списку инструкций</router-link>
    </div>
    <div v-else-if="instruction && currentstep != null" class="col-12 col-sm-8 col-md-6 col-xl-4">
      <h5 class="d-flex justify-content-between">
        <span>{{instruction.steps[currentstep].title}}</span>
        <span class="text-muted small mt-1">{{currentstep + 1}}/{{instruction.countsteps}}</span>
      </h5>
      <hr />
      <p>{{instruction.steps[currentstep].description}}</p>

      <div class="btn-group btn-block" role="group" aria-label="Basic example">
        <button class="btn btn-light border" @click="currentstep--">Назад</button>
        <button class="btn btn-success" @click="currentstep++">Далее</button>
      </div>
    </div>
    <div v-else class="col-12 col-sm-8 col-md-6 col-xl-4">
      <h5 class="text-center">Инструкция не найдена</h5>
      <hr />
      <router-link to="/" class="text-center d-block">Вернуться к списку инструкций</router-link>
    </div>
  </div>
</template>

<script>
import { tooltip } from "popper.js";
export default {
  data() {
    return {
      currentstep: null,
      rate: null
    };
  },
  computed: {
    instruction() {
      return this.$store.getters.instructionById(this.$route.params.id);
    },
    user() {
      return this.$store.getters.user;
    }
  },
  watch: {
    currentstep(val) {
      if (val === this.instruction.countsteps || val === -1) {
        this.currentstep = null;
      }
    }
  },
  methods: {
    saveRate() {},
    removeInstruction() {
      if (
        confirm("Вы точно хотите удалить инструкцию?") &&
        confirm("Вы хорошо подумали?") &&
        confirm("Вы понимаете, что ее невозможно будет восстановить?")
      ) {
        this.$store.dispatch("removeInstruction", this.$route.params.id);
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scoped>
</style>