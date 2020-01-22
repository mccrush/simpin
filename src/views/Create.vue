<template>
  <div class="create row">
    <div class="col-8">
      <h1>This is an Create page</h1>
      <hr />
      <Step1 v-if="step === 1" />
      <Step2 v-if="step === 2" />
      <Step3 v-if="step === 3" />
      <button v-if="step > 1" class="btn btn-warning" @click="step--">&nbsp;&#8617;&nbsp;</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Step1 from "@/components/Step1.vue";
import Step2 from "@/components/Step2.vue";
import Step3 from "@/components/Step3.vue";

export default {
  name: "create",
  data() {
    return {
      step: 1
    };
  },
  components: {
    Step1,
    Step2,
    Step3
  }
};
</script>