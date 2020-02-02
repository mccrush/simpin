<template>
  <div id="app" class="container pb-3">
    <div id="nav">
      <a href="#" @click.prevent="state = 'list'">Список</a> |
      <a href="#" @click.prevent="state = 'login'">Вход</a> |
      <a href="#" @click.prevent="state = 'create'">Создать</a>
    </div>
    <List v-if="state == 'list'" :listArray="listArray"></List>
    <Login v-if="state == 'login'"></Login>
    <Create v-if="state == 'create'"></Create>
    <Show v-if="state == 'show'"></Show>
  </div>
</template>

<script>
import List from "@/components/List.vue";
import Login from "@/components/Login.vue";
import Create from "@/components/Create.vue";
import Show from "@/components/Show.vue";

export default {
  name: "app",
  components: {
    List,
    Login,
    Create,
    Show
  },
  data() {
    return {
      state: "list",
      listArray: [
        { id: "4234", title: "i1", description: "d1" },
        { id: "42sdfs34", title: "i2", description: "d2" }
      ]
    };
  }
};
</script>

<style>
.container {
  max-width: 960px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
