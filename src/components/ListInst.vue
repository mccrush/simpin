<template>
  <div class="col-12 col-sm-8">
    <h5 class="mt-2">Список инструкций</h5>
    <hr />
    <router-link to="/create/1" class="btn btn-success">Создать новую</router-link>
    <ul class="list-group list-group-item-action mt-3">
      <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(item, index) in listInst" :key="item.id">
        <span>{{index+1}}. {{item.title}}</span>
        <span>
          Edit |
          <router-link :to="'/show/'+item.id" class="btn btn-sm btn-primary">&gt;</router-link>
        </span>
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
    //console.log("this.listInst:", this.listInst);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
