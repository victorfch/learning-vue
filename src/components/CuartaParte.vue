<template>
  <ul>
      <li v-for="(alumno, index) in alumnos" :key='index'> {{index+1}}. {{alumno.nombre}} </li>
  </ul>
</template>

<script>
export default {
  name: "CuartaParte",
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
