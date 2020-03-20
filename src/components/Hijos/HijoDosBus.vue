<template>
    <div class="hijo">
        <h3>Hijo 2</h3>
        <p>Este hijo va a recibir el mensaje del hermano mediante el bus</p>
        <p>{{mensaje}}</p>

    </div>
</template>

<script>
import bus from '@/busdata.js';
export default {
    name: 'HijoDosBus',
    data() {
        return {
            mensaje: ''
        }
    },
    created () {
        bus.$on('mensajeBusHijo', (datos) => this.mensaje = datos)
    },
}
</script>

<style scoped>
.hijo {
    background-color: aqua;
    padding-bottom: 2em;
}
</style>