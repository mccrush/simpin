<template>
  <div>
    <h5 class="mt-2 text-left">3. Все готово</h5>
    <hr />
    <p>
      Поздравляем!
      <br />Вы создали прекрасную инструкцию!
    </p>
    <router-link :to="'/show/'+this.$store.state.tecValue.id" class="btn btn-block btn-success">Посмотреть инструкцию</router-link>
    <router-link to="/" class="btn btn-block btn-success">К списку инструкций</router-link>
  </div>
</template>

<script>
export default {
  name: "Step3"
};
</script>

<style scoped>
</style>
