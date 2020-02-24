<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-8 col-md-6 col-xl-4">
      <h5>О приложении</h5>
      <hr />
      <p class="text-left">Приложение для создания простых инструкций. Один шаг - одно простое действие. Создавайте и делитесь инструкциями с друзъями.</p>
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