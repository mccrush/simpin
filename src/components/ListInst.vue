<template>
  <div>
    <h1>Список готовых инструкций</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in listInst" :key="item.title">{{index+1}}. {{item.title}} | steps: {{item.countSteps}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListInst",
  data() {
    return {
      listInst: []
    };
  },
  created() {
    //this.listInst = this.$store.commit("getInstArr");
    this.listInst = this.$store.state.instArr;
    console.log("this.listInst:", this.listInst);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
