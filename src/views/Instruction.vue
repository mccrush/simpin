<template>
  <div class="row justify-content-center">
    <div v-if="instruction && currentstep === null" class="col-12 col-sm-8 col-md-6 col-xl-4">
      <h5>{{instruction.title}}</h5>
      <hr />
      <p>{{instruction.description}}</p>
      <button class="btn btn-block btn-success" @click="currentstep = 0">Запустить инструкцию</button>

      <!-- Кнопки ниже отображать лишь при условии авторизации,
      и лишь на тех инструкциях, автором которых является пользователь-->
      <div class="row mt-2 mb-2">
        <div class="col-4">
          <button class="btn btn-block btn-secondary" @click="removeInstruction">Удалить</button>
        </div>
        <div class="col-8">
          <router-link :to="'/edit/'+instruction.id" class="btn btn-block btn-light border">Редактировать</router-link>
        </div>
      </div>

      <router-link to="/" class="btn btn-block btn-light border">К списку инструкций</router-link>
    </div>
    <div v-else-if="instruction && currentstep != null" class="col-12 col-sm-8 col-md-6 col-xl-4">
      <h5 class="d-flex justify-content-between">
        <span>{{instruction.steps[currentstep].title}}</span>
        <span class="text-muted small mt-1">{{currentstep + 1}}/{{this.instruction.countsteps}}</span>
      </h5>
      <hr />
      <p>{{instruction.steps[currentstep].description}}</p>

      <div class="row">
        <div class="col-6">
          <button class="btn btn-block btn-light border" @click="currentstep--">Назад</button>
        </div>
        <div class="col-6">
          <button class="btn btn-block btn-light border" @click="currentstep++">Далее</button>
        </div>
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
export default {
  data() {
    return {
      currentstep: null,
      rate: null
    };
  },
  computed: {
    instruction() {
      return this.$store.getters.instructionById(+this.$route.params.id);
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
      if (confirm("Точно удалить?")) {
        this.$store.dispatch("removeInstruction", +this.$route.params.id);
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scoped>
</style>