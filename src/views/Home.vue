<template>
  <div class="row">
    <ListInst msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import ListInst from "@/components/ListInst.vue";

export default {
  name: "home",
  components: {
    ListInst
  }
};
</script>
