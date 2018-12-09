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
      <b-col id="tables-wrap">
        <div class="table"></div>
      </b-col>
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
      tablesQuantity: 0
    };
  },
  methods: {
    createTables() {
      
      let tables = $(".table");
      console.log(this.tablesQuantity, tables);
    }
  }
};
</script>

<style scoped>
#tables-wrap {
    display: inline-flex;
    flex-wrap: wrap;
}
.table {
  width: 100px;
  height: 100px;
  background-color: #c3bfce;
  margin-left: 15px;
}
</style>


