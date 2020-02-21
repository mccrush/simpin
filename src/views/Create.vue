<template>
  <div class="create row justify-content-sm-center">
    <div class="col-12 col-sm-8 col-md-6 col-xl-4">
      <h5>Создание инструкции</h5>
      <hr />
      <form @submit.prevent="addInstruction">
        <div class="form-group">
          <label for="title">Название инструкции</label>
          <input type="text" class="form-control" id="title" v-model="title" maxlength="32" required placeholder="Обязательное поле" />
          <small class="form-text text-muted text-right">{{title.length}}/32</small>
        </div>
        <div class="form-group">
          <label for="description">Краткое описание</label>
          <textarea class="form-control" id="description" rows="3" v-model="description" placeholder="Не обязательно" maxlength="256"></textarea>
          <small class="form-text text-muted text-right">{{description.length}}/256</small>
        </div>
        <div class="form-group">
          <label for="countsteps">Количество шагов</label>
          <input type="number" class="form-control" id="countsteps" v-model.number="countsteps" min="1" max="32" step="1" />
          <small class="form-text text-muted text-right">{{countsteps}}/32</small>
        </div>
        <button type="submit" class="btn btn-block btn-success" :class="{disabled: !title.length}">Далее</button>
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
      countsteps: 1
    };
  },
  created() {},
  methods: {
    addInstruction() {
      if (this.title.trim()) {
        const instruction = {
          title: this.title,
          description: this.description,
          countsteps: this.countsteps,
          steps: [],
          id: Date.now(),
          status: "active",
          date: new Date()
        };

        this.$store.dispatch("createInstruction", instruction);
        this.$router.push("/createstep/" + instruction.id);
      } else {
        alert('Поле "Название инструкции" обязательно к заполнению!');
      }
    }
  }
};
</script>