<template>
  <div>
      <hijo-del-siete :persona="nombre"/>
      <ol>
          <otro-hijo-del-siete v-for="item in listaCompra"
                :compra="item"
                :key="item.id"/>
      </ol>
  </div>
</template>

<script>
import HijoDelSiete from '@/components/Hijos/HijoDelSiete.vue';
import OtroHijoDelSiete from '@/components/Hijos/OtroHijoDelSiete.vue';

export default {
    name: 'SeptimaParte',
    data() {
        return {
            nombre: 'Matt',
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
