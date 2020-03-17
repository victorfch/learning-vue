<template>
  <div id="app">
    <inicial/>
    <hr>
    <segunda-parte/>
    <hr>
    <usando-if/>
    <hr>
    <usando-for/>
    <hr>
    <quinta-parte/>
    <hr>
    <sexta-parte/>
    <hr>
    <septima-parte/>
    <hr>
    <octava-parte/>

  </div>
</template>

<script>
import Inicial from '@/components/Inicial.vue';
import SegundaParte from '@/components/SegundaParte.vue';
import UsandoIf from '@/components/UsandoIf.vue';
import UsandoFor from '@/components/UsandoFor.vue';
import QuintaParte from '@/components/QuintaParte.vue';
import SextaParte from '@/components/SextaParte.vue';
import SeptimaParte from '@/components/SeptimaParte.vue';
import OctavaParte from '@/components/OctavaParte.vue';

export default {
  name: 'App',
  components: {
    Inicial,
    SegundaParte,
    UsandoIf,
    UsandoFor,
    QuintaParte,
    SextaParte,
    SeptimaParte,
    OctavaParte
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 60px;
}
</style>
