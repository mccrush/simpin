<template>
  <div class="row justify-content-sm-center">
    <ListInst />
  </div>
</template>

<script>
// @ is an alias to /src
import ListInst from "@/_components/ListInst.vue";

export default {
  name: "home",
  components: {
    ListInst
  }
};
</script>
