<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-8 col-md-6 col-xl-4">
      <Createinst v-if="state == 'inst'" @changeState="state = 'step'" :addNewInst="addNewInst"></Createinst>
      <Createstep v-if="state == 'step'"></Createstep>
    </div>
  </div>
</template>

<script>
import Createinst from "@/components/Createinst.vue";
import Createstep from "@/components/Createstep.vue";

export default {
  name: "Create",
  props: {
    addNewInst: Function
  },
  components: {
    Createinst,
    Createstep
  },
  data() {
    return {
      state: "inst"
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
