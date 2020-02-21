<template>
  <div class="create row justify-content-sm-center">
    <div class="col-12 col-sm-8 col-md-6 col-xl-4">
      <h5 class="d-flex justify-content-between">
        <span>Создание шага</span>
        <span class="text-muted small mt-1">{{currentstep}}/{{instruction.countsteps}}</span>
      </h5>
      <hr />
      <form @submit.prevent="addStep">
        <div class="form-group">
          <label for="title">Название шага</label>
          <input type="text" class="form-control" id="title" v-model="title" maxlength="128" required placeholder="Обязательное поле" />
          <small class="form-text text-muted text-right">{{title.length}}/64</small>
        </div>
        <div class="form-group">
          <label for="description">Описание</label>
          <textarea class="form-control" id="description" rows="3" v-model="description" maxlength="256" required></textarea>
          <small class="form-text text-muted text-right">{{description.length}}/256</small>
        </div>
        <button type="submit" class="btn btn-block btn-success" :class="{disabled: !title.length}">Далее</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "createstep",
  data() {
    return {
      title: "",
      description: "",
      currentstep: 1
    };
  },
  computed: {
    instruction() {
      return this.$store.getters.instructionById(+this.$route.params.id);
    }
  },
  methods: {
    addStep() {
      if (this.title.trim()) {
        const step = {
          title: this.title,
          description: this.description,
          step: this.currentstep
        };

        this.$store.dispatch("createStep", {
          step,
          id: +this.$route.params.id
        });
        if (this.currentstep === this.instruction.countsteps) {
          this.$router.push("/instruction/" + this.$route.params.id);
        }
        this.title = "";
        this.description = "";
        this.currentstep++;
      } else {
        alert('Поле "Название шага" обязательно к заполнению!');
      }
    }
  }
};
</script>