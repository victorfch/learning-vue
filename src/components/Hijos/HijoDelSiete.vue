<template>
    <div>
        <h2>Pasando datos del padre al hijo</h2>
        <p>{{persona}}</p>
    </div>
</template>

<script>

export default {
    name: 'HijoDelSiete',
    props: {
        persona: String,
    },
}
</script>

<style scoped>
p {
    color: green;
}

</style>