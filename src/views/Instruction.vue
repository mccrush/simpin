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

      <div class="btn-group btn-block" role="group" aria-label="Basic example">
        <button v-if="user" type="button" class="btn btn-secondary" @click="removeInstruction" title="Удалить инструкцию">
          <i class="far fa-trash-alt"></i>
        </button>

        <router-link v-if="user" :to="'/edit/'+instruction.id" type="button" class="btn btn-light border" title="Редактировать инструкцию">
          <i class="far fa-edit"></i>
        </router-link>

        <button v-if="instruction.steps.length" type="button" class="btn btn-success" @click="currentstep = 0" title="Запустить инструкцию">
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

      <!-- <div class="row" v-if="this.currentstep+1 === this.instruction.countsteps">
        <div class="col-12">
          <hr />Оцените инструкцию:
          <br />
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" v-model="rate" />
            <label class="form-check-label" for="inlineRadio1">1</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" v-model="rate" />
            <label class="form-check-label" for="inlineRadio2">2</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" v-model="rate" />
            <label class="form-check-label" for="inlineRadio3">3</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4" v-model="rate" />
            <label class="form-check-label" for="inlineRadio4">4</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="5" v-model="rate" />
            <label class="form-check-label" for="inlineRadio5">5</label>
          </div>
          <button class="btn btn-sm btn-success" @click="saveRate">Оценить</button>
        </div>
      </div>-->
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