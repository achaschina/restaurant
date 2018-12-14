<template>
  <div>
    <b-jumbotron id="home-page" :header="msg" lead>
      <p>Для просмотра детальной информации по заказу войдите в личный кабинет</p>
      <b-btn variant="secondary" to="/category">Категории</b-btn>
      <carousel :perPage=1 :autoplay="true">
        <slide>Slide 1 Content</slide>
        <slide>Slide 2 Content</slide>
        <slide>Slide 2 Content</slide>
        <slide>Slide 2 Content</slide>
        <slide>Slide 2 Content</slide>
        <slide>Slide 2 Content</slide>
        <slide>Slide 2 Content</slide>
      </carousel>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Категории товаров"
    };
  }
};
</script>

<style scoped>
</style>
