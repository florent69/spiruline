<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/spiruline_1.png">
    <br><br>
    <router-link to="/suppliers" class="btn btn-success mr-1">Consulter la liste des fournisseurs</router-link>
    <router-link to="/map" class="btn btn-success mr-1">Voir la carte</router-link>
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
