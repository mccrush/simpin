<template>
  <div class="row">
    <vueHeadful title="Ошибка 404" description="Запрашиваемая страница не найдена" />
    <div class="col-12 col-sm-8 col-md-6 col-xl-6">
      <h5>Ошибка 404</h5>
      <hr />
      <p>Запрашиваемая страница не найдена</p>
      <router-link to="/" class="btn btn-block btn-light border">Вернуться к списку инструкций</router-link>
    </div>
  </div>
</template>

<script>
import vueHeadful from "vue-headful";
export default {
  name: "404",
  components: {
    vueHeadful
  }
};
</script>