import vue from "vue"
import VueRouter from "vue-router"

import Formulario from './componentes/Formulario.vue'
import HttpClient from './componentes/HttpClient.vue'

vue.use(VueRouter)

export const router = new VueRouter({
    node: "history",
    routes: [
        {path: "/formulario", component: Formulario},
        {path: "/httpClient", component: HttpClient},
        {path: "/", redirect: "/formulario"}
    ]
})