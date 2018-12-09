<template>
  <div>
    <b-jumbotron id="home-page" :header="msg" lead="Рабочий кабинет ресторана">
      <p>Для просмотра детальной информации войдите в личный кабинет</p>
      <b-btn variant="secondary" to="/tables">Столы</b-btn>
      <b-btn variant="secondary" to="/menu">Меню</b-btn>
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

<style scoped>


</style>
