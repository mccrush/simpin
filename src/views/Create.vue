<template>
  <div class="create row justify-content-sm-center">
    <div class="col-12 col-sm-8 border">
      <h1>This is an Create page</h1>
      <hr />
      <Step1 v-if="this.$route.params.step == '1'" />
      <Step2 v-if="this.$route.params.step == '2'" />
      <Step3 v-if="this.$route.params.step == '3'" />
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
    return {};
  },
  components: {
    Step1,
    Step2,
    Step3
  }
};
</script>