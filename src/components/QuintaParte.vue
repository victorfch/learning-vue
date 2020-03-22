<template>
  <div>
    <h3 v-if="seen">{{mensaje}}</h3>
    <button @click="hideOrShow">Ocultar/Mostrar</button>
  </div>
</template>

<script>
export default {
  name: "QuintaParte",
  data() {
    return {
      seen: true,
      mensaje: 'Me escondo o me oculto'
    };
  },
  methods: {
    hideOrShow() {
      this.seen = !this.seen
    }
  }
};
</script>
