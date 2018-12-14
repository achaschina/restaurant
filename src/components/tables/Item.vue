<template>
  <b-container fluid>
    <b-row class="my-1">
      <b-col></b-col>
      <b-col cols="2">
        <label for="tablesCount">Введите количество столов, которые необходимо создать:</label>
      </b-col>
      <b-col cols="7">
        <b-form-input id="tablesCount" type="number" v-model="tablesQuantity"></b-form-input>
      </b-col>
      <b-col>
        <b-btn variant="secondary" @click="createTables">Создать</b-btn>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row class="my-1">
      <b-col cols="1"></b-col>
      <transition name="fade">
        <b-col id="tables-wrap" v-if="tablesArr.length !== 0">
          <div
            class="tables"
            v-for="(table, index) in tablesArr"
            v-bind:key="index"
            @mousedown="moveBlock($event)"
          > {{ index+1 }} </div>
        </b-col>
      </transition>
      <b-col cols="1"></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "tables",
  data() {
    return {
      msg: "Расположение столов ресторана",
      tablesQuantity: 7,
      tablesArr: []
    };
  },

  mounted() { },

  methods: {
    moveBlock(e) {
      let target = e.target;
      console.log(target.key);
      target.onmousedown = function(ev) {
        target.style.position = "absolute";
        console.log("onmousedown", target);
        moveAt(ev);
        document.body.appendChild(target);
        target.style.zIndex = 1000;
        function moveAt(ev) {
          target.style.left = ev.pageX - target.offsetWidth / 2 + "px";
          target.style.top = ev.pageY - target.offsetHeight / 2 + "px";
        }

        document.onmousemove = function(e) {
          moveAt(e);
        };

        target.onmouseup = function() {
          console.log("onmouseup");
          document.onmousemove = null;
          target.onmouseup = null;
        };
      };
    },
    createTables() {
      if (this.tablesArr.length > 0) {
        this.tablesArr = [];
      }
      for (let i = 0; i < this.tablesQuantity; i++) {
        this.tablesArr.push(i);
      }
    }
  }
};
</script>

<style scoped>
#tables-wrap {
  display: inline-flex;
  flex-wrap: wrap;
  /* position: absolute; */
  height: 100vh;
  padding-left: 150px;
}
.tables {
  width: 100px;
  height: 100px;
  background-color: #c3bfce;
  margin-left: 15px;
  margin-bottom: 15px;
  border: 1px solid #60557b;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>


