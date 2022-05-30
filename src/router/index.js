import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import '@/main.js';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/especialidad',
    name: 'Especialidad',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Especialidad.vue')
  },
  {
    path: '/form-registro',
    name: 'RegistroForm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistroForm.vue')
  },
  {
    path: '/page-principal',
    name: 'ProfileAlumno',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewPageAlumno.vue')
  },
  {
    path: '/form-registro-instructor',
    name: 'RegistroInstructorForm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistroInstructorForm.vue')
  },
  {
    path: '/dashboard-admin',
    name: 'ViewDashboardAdmin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewDashboardAdmin.vue')
  },
  {
    path: '/agregar-usuario',
    name: 'ViewAddUser',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewAddUser.vue')
  },
  {
    path: '/agregar-curso',
    name: 'ViewAddCurso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewAddCurso.vue')
  },
  {
    path: '/editar-curso',
    name: 'ViewEditarCurso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewEditarCurso.vue')
  },
  {
    path: '/borrar-curso',
    name: 'ViewDeleteCurso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewDeleteCurso.vue')
  },
  {
    path: '/autorizar-eliminar-curso',
    name: 'ViewAutorizarBorrarCurso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewAutorizarBorrarCurso.vue')
  },
  {
    path: '/asignar-curso',
    name: 'ViewAsignarCurso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewAsignarCurso.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
