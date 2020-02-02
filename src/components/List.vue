<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-8 col-md-6 col-xl-4">
      <div class="row">
        <div class="col-8 text-left">
          <h5 class="mt-2">Список инструкций</h5>
        </div>
        <div class="col-4 text-right">
          <router-link to="/create" class="btn btn-success">Создать</router-link>
        </div>
      </div>

      <hr />

      <ul class="list-group list-group-item-action mt-3">
        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(item, index) in listArray" :key="item.id">
          <span>{{index+1}}. {{item.title}}</span>
          <span>
            <router-link :to="'/create/'+item.id" class="btn btn-sm btn-success">E</router-link>|
            <router-link :to="'/show/'+item.id" class="btn btn-sm btn-success">&gt;</router-link>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    listArray: Array
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
