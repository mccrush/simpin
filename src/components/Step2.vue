<template>
  <div>
    <h5 class="mt-2 text-left">2. Заполните все шаги</h5>
    <div class="progress">
      <div class="progress-bar bg-success" role="progressbar" :style="barWidth" :aria-valuenow="tecStep" aria-valuemin="0" :aria-valuemax="allSteps">{{tecStep}} из {{allSteps}}</div>
    </div>
    <br />

    <div class="form-group text-left">
      <label for="title">Название шага</label>
      <input class="form-control" type="text" name="title" v-model.trim="title" required />
    </div>

    <div class="form-group text-left">
      <label for="description">Описание</label>
      <textarea class="form-control" name="description" v-model.trim="description" required autofocus></textarea>
    </div>

    <div class="row">
      <div class="col-3">
        <button class="btn btn-block btn-success" @click="prevStep">&nbsp;&#8617;&nbsp;</button>
      </div>
      <div class="col-9">
        <button class="btn btn-block btn-success" @click="saveNewStep">Далее</button>
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
      title: "Шаг 1",
      description: "",
      barWidth: "width: 0%"
    };
  },
  created() {
    this.tecInst = this.$store.state.instArr.length - 1;
    this.allSteps = this.$store.state.instArr[this.tecInst].countSteps;
    this.barWidth = "width:" + (this.tecStep * 100) / this.allSteps + "%;";
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
        this.title = "Шаг " + this.tecStep;
        this.description = "";
        this.barWidth = "width:" + (this.tecStep * 100) / this.allSteps + "%;";
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
