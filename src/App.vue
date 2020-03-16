<template>
  <div id="app">
    <inicial/>
    <hr>
    <segunda-parte/>
    <hr>
    <tercera-parte/>
    <hr>
    <cuarta-parte/>
    <hr>
    <quinta-parte/>
    <hr>
    <sexta-parte/>
    <hr>
    <septima-parte/>
  </div>
</template>

<script>
import Inicial from '@/components/Inicial.vue';
import SegundaParte from '@/components/SegundaParte.vue';
import TerceraParte from '@/components/TerceraParte.vue';
import CuartaParte from '@/components/CuartaParte.vue';
import QuintaParte from '@/components/QuintaParte.vue';
import SextaParte from '@/components/SextaParte.vue';
import SeptimaParte from '@/components/SeptimaParte.vue';

export default {
  name: 'App',
  components: {
    Inicial,
    SegundaParte,
    TerceraParte,
    CuartaParte,
    QuintaParte,
    SextaParte,
    SeptimaParte
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 60px;
}
</style>
