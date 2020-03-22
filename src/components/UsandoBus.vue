<template>
    <div class="padre">
        <h2>Componente padre de bus</h2>
        <span>Enviar datos a traves del bus</span>
        <hijo-uno-bus/>
        <hijo-dos-bus/>
    </div>
</template>

<script>
import HijoUnoBus from '@/components/Hijos/HijoUnoBus.vue'
import HijoDosBus from '@/components/Hijos/HijoDosBus.vue'

export default {
    name: 'UsandoBus',
    components: {
        HijoUnoBus,
        HijoDosBus
    }
}
</script>

<style scoped>
.padre {
    border-style: solid;
}
</style>