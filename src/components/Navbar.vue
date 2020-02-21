<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Simpin</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="/" tag="li" class="nav-item">
          <a class="nav-link" href="#">Инструкции</a>
        </router-link>

        <router-link to="/about" tag="li" class="nav-item">
          <a class="nav-link" href="#">О приложении</a>
        </router-link>
      </ul>
      <router-link to="/login" class="nav-link btn btn-sm btn-light border text-muted" title="Войти">
        <i class="fas fa-sign-in-alt"></i>
      </router-link>
      <!-- <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>-->
    </div>
  </nav>
</template>

