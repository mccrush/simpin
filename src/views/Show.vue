<template>
  <div class="create row justify-content-sm-center">
    <div class="col-12 col-sm-8">
      <h4 class="mt-2">{{tecInstArr[tecStep-1].title}}</h4>
      <hr />
      <p>{{tecInstArr[tecStep-1].description}}</p>
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
      instId: "",
      tecIndex: 1,
      tecStep: 1,
      tecInst: {},
      tecInstArr: []
    };
  },
  created() {
    this.instId = this.$route.params.id;
    //console.log("this.instId:", this.instId);
    this.tecInst = this.$store.state.instArr.find(
      item => item.id == this.instId
    );
    //console.log("this.tecInst:", this.tecInst);
    this.allSteps = this.tecInst.countSteps;
    //console.log("this.allSteps:", this.allSteps);
    this.tecInstArr = this.tecInst.step;
    //console.log("this.tecInstArr:", this.tecInstArr);
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