<template>
  <div id="app2">
    <span v-bind:title="mensaje">Titulo grande, mantener mouse en esta zona</span>
  </div>
</template>

<script>
export default {
  name: 'SegundaParte',
  data() {
      return {
          mensaje: 'Cargada esta página el ' + new Date().toLocaleString()
      }
  },
};
</script>
