<template>
    <div>
        <input type="text" placeholder="Introduce mensaje" v-model="msg">
        <p>{{msg}}</p>


    </div>
</template>

<script>
export default {
    name: 'SextaParte',
    data() {
        return {
            msg: ''
        }
    },
}
</script>
