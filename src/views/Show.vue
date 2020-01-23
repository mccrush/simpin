<template>
  <div class="create row justify-content-sm-center">
    <div class="col-12 col-sm-8">
      <h4 class="mt-2">{{tecInst[tecStep-1].title}}</h4>
      <hr />
      <p>{{tecInst[tecStep-1].description}}</p>
      <div class="row">
        <div class="col-3">
          <button class="btn btn-block btn-warning" @click="prevStep">&nbsp;&#8617;&nbsp;</button>
        </div>
        <div class="col-9">
          <button class="btn btn-block btn-primary" @click="nextStep">Далее</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "show",
  data() {
    return {
      tecIndex: 1,
      tecStep: 1,
      tecInst: []
    };
  },
  created() {
    this.tecIndex = this.$route.params.index;
    this.allSteps = this.$store.state.instArr[this.tecIndex].countSteps;
    this.tecInst = this.$store.state.instArr[this.tecIndex].step;
  },
  methods: {
    nextStep() {
      if (this.tecStep < this.allSteps) {
        this.tecStep++;
      } else {
        this.$router.push("/");
      }
    },
    prevStep() {
      if (this.tecStep > 1) {
        this.tecStep--;
      } else {
        this.$router.push("/");
      }
    }
  }
};
</script>