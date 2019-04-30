<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/spiruline_1.png">
    <br><br>
    <h1>Que voulez-vous faire ?</h1>
    <br>
    <router-link to="/suppliers" class="btn btn-success mr-1"><small>Consulter la liste des fournisseurs</small></router-link>
    <router-link to="/map" class="btn btn-success mr-1"><small>Voir la carte</small></router-link>
    <br><br>
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
