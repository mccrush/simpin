<template>
  <div class="create row justify-content-sm-center">
    <div v-if="instruction" class="col-12 col-sm-8 col-md-6 col-xl-4">
      <h5 class="d-flex justify-content-between">
        <span>Редактирование шагов</span>
        <span class="text-muted small mt-1">{{currentstep + 1}}/{{instruction.countsteps}}</span>
      </h5>
      <hr />
      <form @submit.prevent="updateStep">
        <div class="form-group">
          <label for="title">Название шага</label>
          <input type="text" class="form-control" id="title" v-model="title" maxlength="32" required placeholder="Обязательное поле" />
          <small class="form-text text-muted text-right">{{title.length}}/32</small>
        </div>
        <div class="form-group">
          <label for="description">Описание</label>
          <textarea class="form-control" id="description" rows="3" v-model="description" placeholder="Не обязательно" maxlength="256"></textarea>
          <small class="form-text text-muted text-right">{{description.length}}/256</small>
        </div>

        <div class="btn-group btn-block" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-light border" @click="currentstep--">Назад</button>
          <button type="submit" class="btn btn-success">Далее</button>
        </div>

        <router-link :to="'/edit/'+ this.$route.params.id" class="btn btn-block btn-light border">Отмена</router-link>
      </form>
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
      title: "",
      description: "",
      currentstep: 0
    };
  },
  mounted() {
    this.steps = this.instruction.steps;
    this.title = this.steps[this.currentstep]
      ? this.steps[this.currentstep].title
      : "";
    this.description = this.steps[this.currentstep]
      ? this.steps[this.currentstep].description
      : "";
  },
  computed: {
    instruction() {
      return this.$store.getters.instructionById(this.$route.params.id);
    }
  },
  watch: {
    currentstep(val) {
      if (val === -1 || val === this.instruction.countsteps) {
        this.$router.push("/instruction/" + this.$route.params.id);
      } else {
        this.title = this.steps[val].title;
        this.description = this.steps[val].description;
      }
    }
  },
  methods: {
    updateStep() {
      if (this.title.trim()) {
        const step = this.steps[this.currentstep];
        this.steps[this.currentstep] = {
          ...step,
          title: this.title,
          description: this.description
        };

        this.$store.dispatch("updateStep", {
          id: this.$route.params.id,
          steps: this.steps
        });

        // if (this.currentstep + 1 === this.instruction.countsteps) {
        //   this.$router.push("/edit/" + this.$route.params.id);
        // }
        this.currentstep++;
      } else {
        alert('Поле "Название инструкции" обязательно к заполнению!');
      }
    }
  }
};
</script>