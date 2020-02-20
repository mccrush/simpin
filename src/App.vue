<template>
  <div id="app">
    <Navbar />
    <div class="container pt-3 pb-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style>
.container {
  max-width: 960px;
}
</style>
