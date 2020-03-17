<template>
  <ul>
      <li v-for="(alumno, index) in alumnos" :key='index'> {{index+1}}. {{alumno.nombre}} </li>
  </ul>
</template>

<script>
export default {
  name: "UsandoFor",
  data() {
    return {
      alumnos: [
          { nombre: "Frank" }, 
          { nombre: "Marta" },
          { nombre: "Guille" }
        ]
    };
  }
};
</script>
