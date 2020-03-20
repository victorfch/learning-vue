<template>
    <div class="hijo">
        <h3>Hijo 1</h3>
        <p>Hijo uno va a enviar el mensaje por el bus</p>
        <input type="text" v-model="sms" @keyup.enter="enviarPorBus">

    </div>
</template>

<script>
import bus from '@/busdata.js'
export default {
    name: 'HijoUnoBus',
    data() {
        return {
            sms: ''
        }
    },
    methods: {
        enviarPorBus() {
            bus.$emit('mensajeBusHijo', this.sms)
        }
    }
}
</script>

<style scoped>
.hijo {
    background-color:cadetblue;
    padding-bottom: 2em;
}
</style>