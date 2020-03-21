<template>
  <div class="create row justify-content-sm-center">
    <vueHeadful title="Создание инструкции" description="Создание инструкции" />
    <div class="col-12 col-sm-8 col-md-6 col-xl-6">
      <h5>Создание инструкции</h5>
      <hr />
      <form @submit.prevent="addInstruction">
        <div class="form-group">
          <label for="title">Название инструкции</label>
          <input type="text" class="form-control" id="title" v-model="title" maxlength="48" required placeholder="Обязательное поле" />
          <small class="form-text text-muted text-right">{{title.length}}/48</small>
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
import vueHeadful from "vue-headful";

export default {
  name: "create",
  components: {
    vueHeadful
  },
  data() {
    return {
      title: "",
      description: "",
      countsteps: 1
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
    addInstruction() {
      if (this.title.trim()) {
        let steps = [];
        for (let i = 1; i <= this.countsteps; i++) {
          steps.push({
            title: "Шаг " + i,
            description: "",
            step: i,
            imageurl: ""
          });
        }

        let instruction = {
          title: this.title,
          description: this.description,
          countsteps: this.countsteps,
          steps,
          id: this.getRandomInt(100, 999) + Date.now().toString(),
          status: "active",
          date: new Date(),
          user: this.user.uid
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