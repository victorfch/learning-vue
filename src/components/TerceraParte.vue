<template>
  <div>
    <span v-if="isBlue">
      <p class="blue-text">texto en azul</p>
    </span>
    <span v-else>
      <p class="red-text">texto en rojo</p>
    </span>
  </div>
</template>

<script>
export default {
    name: "TerceraParte",
    data() {
        return {
            isBlue: false
        };
    }
};
</script>

<style scoped>
.blue-text {
  color: blue;
}
.red-text {
  color: red;
}
</style>