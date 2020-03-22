<template>
  <b-container fluid id="app">
    <b-nav>
      <b-nav-item to="/inicial">Inicial</b-nav-item>
      <b-nav-item to="/segunda">Segunda parte</b-nav-item>
      <b-nav-item to="/if">Usando if</b-nav-item>
      <b-nav-item to="/for">Usando for</b-nav-item>
      <b-nav-item to="/quinta">Usando botones</b-nav-item>
      <b-nav-item to="/sexta">Sexta parte</b-nav-item>
      <b-nav-item to="/septima">Envio padre a hijo</b-nav-item>
      <b-nav-item to="/octava">Envio hijo a padre</b-nav-item>
      <b-nav-item to="/filtros">Filtros</b-nav-item>
      <b-nav-item to="/bus">Bus</b-nav-item>
    </b-nav>
    <hr>
    <router-view/>
  </b-container>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 60px;
}
</style>
