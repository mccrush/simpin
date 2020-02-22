<template>
  <div class="create row justify-content-sm-center">
    <div v-if="instruction" class="col-12 col-sm-8 col-md-6 col-xl-4">
      <h5>Редактирование инструкции</h5>
      <hr />
      <form @submit.prevent="updateInstruction">
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
        <button type="submit" class="btn btn-block btn-success" :class="{disabled: !title.length}">Сохранить и редактировать шаги</button>
        <router-link to="/" class="btn btn-block btn-light border">Отмена / К списку инструкций</router-link>
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
      description: ""
    };
  },
  mounted() {
    this.title = this.instruction.title;
    this.description = this.instruction.description;
  },
  computed: {
    instruction() {
      return this.$store.getters.instructionById(this.$route.params.id);
    }
  },
  methods: {
    updateInstruction() {
      if (this.title.trim()) {
        this.$store.dispatch("updateInstruction", {
          id: this.$route.params.id,
          title: this.title,
          description: this.description
        });
        this.$router.push("/editstep/" + this.$route.params.id);
      } else {
        alert('Поле "Название инструкции" обязательно к заполнению!');
      }
    }
  }
};
</script>