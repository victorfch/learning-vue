<template>
  <b-container fluid id="app">
    <b-row class="text-center">
      <b-col><inicial /></b-col>
      <b-col><segunda-parte/></b-col>
    </b-row>
    <hr>
    <b-row class="text-center">
      <b-col><usando-if/></b-col>
      <b-col><usando-for/></b-col>
    </b-row>
    <hr>
    <b-row class="text-center">
      <b-col><quinta-parte/></b-col>
      <b-col><sexta-parte/></b-col>
    </b-row>
    <hr>
    <b-row class="text-center">
      <b-col><septima-parte/></b-col>
      <b-col><octava-parte/> </b-col>
    </b-row>
    <hr>
    <usando-filtros/>
  </b-container>
</template>

<script>
import Inicial from "@/components/Inicial.vue";
import SegundaParte from "@/components/SegundaParte.vue";
import UsandoIf from "@/components/UsandoIf.vue";
import UsandoFor from "@/components/UsandoFor.vue";
import QuintaParte from "@/components/QuintaParte.vue";
import SextaParte from "@/components/SextaParte.vue";
import SeptimaParte from "@/components/SeptimaParte.vue";
import OctavaParte from "@/components/OctavaParte.vue";
import UsandoFiltros from "@/components/UsandoFiltros.vue";

export default {
  name: "App",
  components: {
    Inicial,
    SegundaParte,
    UsandoIf,
    UsandoFor,
    QuintaParte,
    SextaParte,
    SeptimaParte,
    OctavaParte,
    UsandoFiltros
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 60px;
}
</style>
