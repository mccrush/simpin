<template>
  <div class="col-12 col-sm-8 border">
    <h3 class="mt-2">Список готовых инструкций</h3>
    <router-link to="/create/1" class="btn btn-success">Создать новую</router-link>
    <ul class="list-group list-group-item-action">
      <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(item, index) in listInst" :key="index">
        <span>{{index+1}}. {{item.title}} | steps: {{item.countSteps}}</span>
        <span>Edit | Run</span>
      </li>
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
