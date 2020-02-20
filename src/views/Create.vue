<template>
  <div class="create row justify-content-sm-center">
    <div class="col-12 col-sm-8 col-md-6 col-xl-4">
      <h5>Создание</h5>
      <hr />
      <form @submit.prevent="addInstruction">
        <div class="form-group">
          <label for="title">Название инструкции</label>
          <input type="text" class="form-control" id="title" v-model="title" maxlength="128" required placeholder="Обязательное поле" />
          <small class="form-text text-muted text-right">{{title.length}}/128</small>
        </div>
        <div class="form-group">
          <label for="description">Краткое описание</label>
          <textarea class="form-control" id="description" rows="3" v-model="description" placeholder="Не обязательно"></textarea>
          <small class="form-text text-muted text-right">{{description.length}}/1024</small>
        </div>
        <div class="form-group">
          <label for="steps">Количество шагов</label>
          <input type="number" class="form-control" id="steps" v-model.number="steps" min="1" max="32" step="1" />
        </div>
        <button type="submit" class="btn btn-block btn-light" :class="{disabled: !title.length}">Создать</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "create",
  data() {
    return {
      title: "",
      description: "",
      steps: 1
    };
  },
  created() {},
  methods: {
    addInstruction() {
      if (this.title.trim()) {
        const instruction = {
          title: this.title,
          description: this.description,
          steps: this.steps,
          id: Date.now(),
          status: "active",
          date: new Date()
        };

        this.$store.dispatch("createInstruction", instruction);
        this.$router.push("/");
      } else {
        alert('Поле "Название инструкции" обязательно к заполнению!');
      }
    }
  }
};
</script>