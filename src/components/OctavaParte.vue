<template>
    <div class="padre">
        <h2>Otro padre</h2>
        <p>Pasando datos de hijo a padre</p>
        <p>{{texto}}</p>
        <hijo-del-ocho @desde-hijo="actualizarCambios"/> 
    </div>
</template>

<script>
import HijoDelOcho from '@/components/Hijos/HijoDelOcho.vue';
export default {
    name: 'OctavaParte',
    components: {
        HijoDelOcho,
    },
    data() {
        return {
            texto: '' 
        }
    },
    methods: {
        actualizarCambios(valorEnHijo) {
            this.texto = valorEnHijo;
        }
    },
}
</script>

<style scoped>
.padre {
    border-style: groove;
    padding-left: 1em;
}
</style>