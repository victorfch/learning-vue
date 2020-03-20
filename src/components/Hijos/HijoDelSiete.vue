<template>
    <div>
        <h3>Componente hijo</h3>
        <p>{{persona}}</p>
    </div>
</template>

<script>
export default {
    name: 'HijoDelSiete',
    props: {
        persona: String
    },
}
</script>

<style scoped>
p {
    color: green;
}
div {
    background-color: aqua;
    padding-bottom: 1em;
}
</style>