<template>
    <div>
        <input type="text" v-model="texto"/><br>
        <span>{{texto | capitalize}}</span>

    </div>
</template>

<script>
export default {
    name: 'UsandoFiltros',
    data() {
        return {
            texto: ''
        }
    },
    filters: {
        capitalize: function(value) {
            if (!value) {
                return '';
            }
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)

        }
    }
        
}
</script>