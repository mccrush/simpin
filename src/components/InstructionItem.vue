<template>
  <router-link class="list-group-item list-group-item-action d-flex justify-content-between" :to="'/instruction/' + instruction.id">
    <span>{{instruction.title}}</span>
    <span class="small mt-1 text-muted">
      <!-- <i class="far fa-star mr-1 text-warning"></i> 4.6/5 -->
    </span>
  </router-link>
</template>

<script>
export default {
  props: {
    instruction: {
      type: Object,
      required: true
    }
  }
};
</script>