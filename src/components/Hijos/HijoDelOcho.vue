<template>
    <div id=hijo>
        <h3>Hijo</h3>
        <input type="text" v-model="mensajeHijo" @keyup.enter="update">
    </div>
</template>

<script>
export default {
    name: 'HijoDelOcho',
    data() {
        return {
            mensajeHijo: ''
        }
    },
    methods: {
        update() {
            this.$emit('desde-hijo', this.mensajeHijo)
        }
    },
}
</script>

<style scoped>
#hijo {
    background-color: coral;
    padding-bottom: 1em;
}
</style>