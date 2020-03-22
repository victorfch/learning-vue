import Vue from 'vue'
import Router from 'vue-router'

import Inicial from '@/components/Inicial.vue'
import SegundaParte from '@/components/SegundaParte.vue'
import UsandoIf from '@/components/UsandoIf.vue'
import UsandoFor from "@/components/UsandoFor.vue"
import QuintaParte from "@/components/QuintaParte.vue"
import SextaParte from "@/components/SextaParte.vue"
import SeptimaParte from "@/components/SeptimaParte.vue"
import OctavaParte from "@/components/OctavaParte.vue"
import UsandoFiltros from "@/components/UsandoFiltros.vue"
import UsandoBus from '@/components/UsandoBus.vue'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/inicial',
            name: 'inicial',
            component: Inicial
            
        },
        {
            path: '/segunda',
            name: 'segunda',
            component: SegundaParte
        },
        {
            path: '/if',
            name: 'if',
            component: UsandoIf
        },
        {
            path: '/for',
            name: 'for',
            component: UsandoFor
        },
        {
            path: '/quinta',
            name: 'quinta',
            component: QuintaParte
        },
        {
            path: '/sexta',
            name: 'sexta',
            component: SextaParte
        },
        {
            path: '/septima',
            name: 'septima',
            component: SeptimaParte
        },
        {
            path: '/octava',
            name: 'octava',
            component: OctavaParte
        },
        {
            path: '/filtros',
            name: 'filtros',
            component: UsandoFiltros
        },
        {
            path: '/bus',
            name: 'bus',
            component: UsandoBus
        }
    ]
})