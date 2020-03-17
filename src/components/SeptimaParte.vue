<template>
  <div class="padre">
      <h2>Componente padre</h2>
      <p>Pasando datos de padre a hijo</p>
      <input type="text" name="nombre" v-model="nombre">
      <hijo-del-siete :persona="nombre"/>
      <dd>
          <otro-hijo-del-siete v-for="item in listaCompra"
                :compra="item"
                :key="item.id"/>
      </dd>
  </div>
</template>

<script>
import HijoDelSiete from '@/components/Hijos/HijoDelSiete.vue';
import OtroHijoDelSiete from '@/components/Hijos/OtroHijoDelSiete.vue';

export default {
    name: 'SeptimaParte',
    data() {
        return {
            nombre: '',
            listaCompra: [
                { id: 0, texto: 'Vegetales' },
                { id: 1, texto: 'Queso' },
                { id: 2, texto: 'Cualquier otra cosa que se supone que los humanos coman' }
            ]
        }
    },
    components: {
        HijoDelSiete,
        OtroHijoDelSiete
    },
}
</script>
<style scoped>
.padre {
    border-style: solid;
}

</style>
