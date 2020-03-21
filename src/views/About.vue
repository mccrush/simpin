<template>
  <div class="row justify-content-center">
    <vueHeadful title="О приложении Simpin" description="Simpin - это приложение для создания простых инструкций" />
    <div class="col-12 col-sm-8 col-md-6 col-xl-6">
      <h5>
        О приложении
        <small>v1.0.2</small>
      </h5>
      <hr />
      <p class="text-left">Simpin - это приложение для создания простых инструкций. Один шаг - одно простое действие. Создавайте и делитесь инструкциями с друзьями.</p>
      <p>
        Для того чтобы создать инструкцию, необходимо
        <router-link to="/login?status=reg">зарегистрироваться</router-link>.
      </p>
      <p class="text-left">По всем вопросам пишите на почту: mccrush2027@gmail.com</p>
      <p class="p-1 text-center bg-dark text-white-50 text-monospace">
        Fork me on
        <a href="https://github.com/mccrush/simpin" target="_blank" class="text-light">
          <strong>GitHub</strong>
        </a>
      </p>
    </div>
  </div>
</template>
<script>
import vueHeadful from "vue-headful";

export default {
  components: {
    vueHeadful
  }
};
</script>