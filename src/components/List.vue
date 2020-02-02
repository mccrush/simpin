<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-8 col-md-6 col-xl-4">
      <div class="row">
        <div class="col-8 text-left">
          <h5 class="mt-2">Список инструкций</h5>
        </div>
        <div class="col-4 text-right">+</div>
      </div>

      <hr />

      <ul class="list-group list-group-item-action mt-3">
        <li v-if="!listArray.length" class="list-group-item d-flex justify-content-between align-items-center">Инструкций нет</li>
        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(item, index) in listArray" :key="item.id">
          <span>{{index+1}}. {{item.title}}</span>
          <span>
            <button class="btn btn-sm btn-light" @click="$emit('delete',item.id)">D</button>&nbsp;
            <button class="btn btn-sm btn-success" @click="$emit('show', item.id)">S ></button>
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
    listArray: Array,
    removeItem: Function
  },
  data() {
    return {};
  },
  methods: {
    deleteItem(id) {
      this.removeItem(id);
    }
  }
};
</script>

<style scoped>
</style>
