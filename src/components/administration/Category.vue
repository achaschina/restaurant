<template>
  <div>
    <b-jumbotron :header="msg" lead>
      <div class="container">
        <div class="row">
          <transition-group name="fade">
            <b-card
              v-for="(element, index) in categoryList"
              v-bind:key="index"
              title
              :img-src="getImgUrl(element.pic)"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-4 mr-3"
            >
              <b-button :to="goto(element.id)" variant="primary">{{element.name}}</b-button>
            </b-card>
          </transition-group>
        </div>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
import testData from "../../utilities/testData.js";
export default {
  data() {
    return {
      categoryList: [],
      msg: ""
    };
  },
  methods: {
    getImgUrl(img) {
      return img ? require(`../../assets/${img}`) : "";
    },
    goto(id) {
      return `/category/${id}`;
    }
  },
  mounted() {
    this.categoryList = testData.category.filter(function(item) {
      return filtredArr(item.parentId);
    });
    function filtredArr(id) {
      return id !== "";
    }
  }
};
</script>

<style scoped>
.jumbotron {
  display: flex;
}
article {
  padding: 0.5rem;
  border-radius: 0rem;
}
.card-img-top {
  border-radius: 0rem;
  height: 70%;
}
.btn-primary,
.btn-primary:not(:disabled):not(.disabled):active {
  color: #017493;
  border-color: #017493;
  background: white;
  border-radius: 0rem;
  font-weight: 600;
}
.card-text {
  color: #017493;
  font-weight: 600;
}
.btn-primary:focus,
.btn-primary:not(:disabled):not(.disabled):active:focus {
  box-shadow: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
span {
    display: contents
}
</style>


