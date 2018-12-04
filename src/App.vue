<template>
  <div id="app">
    <b-jumbotron :header="msg" lead="Рабочий кабинет ресторана">
      <p>Для просмотра детальной информации войдите в личный кабинет</p>
      <b-btn variant="secondary" href="#">Войти</b-btn>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Имя ресторана"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2rem;
}
.btn-secondary.focus, .btn-secondary:focus {
  box-shadow: none !important;
}

.display-3 {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1;
}
</style>
