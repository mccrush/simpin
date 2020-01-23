<template>
  <div>
    <h4 class="mt-2">Шаг 2</h4>
    <hr />
    <p>Заполнение всех шагов в цикле: {{tecStep}} из {{allSteps}}</p>
    <div class="form-group text-left">
      <label for="title">Название шага</label>
      <input class="form-control" type="text" name="title" v-model.trim="title" required />
    </div>

    <div class="form-group text-left">
      <label for="description">Описание</label>
      <input class="form-control" type="text" name="description" v-model.trim="description" required />
    </div>

    <div class="row">
      <div class="col-3">
        <button class="btn btn-block btn-warning" @click="prevStep">&nbsp;&#8617;&nbsp;</button>
      </div>
      <div class="col-9">
        <button class="btn btn-block btn-primary" @click="saveNewStep">Далее</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step2",
  data() {
    return {
      tecInst: 1,
      tecStep: 1,
      allSteps: 1,
      title: "",
      description: ""
    };
  },
  created() {
    this.tecInst = this.$store.state.instArr.length - 1;
    this.allSteps = this.$store.state.instArr[this.tecInst].countSteps;
  },
  methods: {
    saveNewStep() {
      if (this.title == "") {
        alert("А как же название?");
        return false;
      }
      if (this.description == "") {
        alert("Что же это за инструкция без описания? А?");
        return false;
      }

      const res = this.$store.commit("setNewStep", {
        content: {
          title: this.title,
          description: this.description
        },
        index: this.tecInst
      });

      if (this.tecStep == this.allSteps) {
        this.$router.push("/create/3");
      } else {
        this.tecStep++;
        this.title = "";
        this.description = "";
      }
    },
    prevStep() {
      if (this.tecStep > 1) {
        this.tecStep--;
        const tecIndex = this.tecStep - 1;
        // console.log(
        //   "this.$store.state.instArr[this.tecInst].step[tecIndex]:",
        //   this.$store.state.instArr[this.tecInst].step[tecIndex]
        // );
        this.title = this.$store.state.instArr[this.tecInst].step[
          tecIndex
        ].title;
        this.description = this.$store.state.instArr[this.tecInst].step[
          tecIndex
        ].description;
      } else {
        this.$router.push("/create/1");
      }
    }
  }
};
</script>

<style scoped>
</style>
