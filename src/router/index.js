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
    path: '/dashboard-instructor',
    name: 'ViewDashboardInstructor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewDashboardInstructor.vue')
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
    path: '/users',
    name: 'ViewUsers',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewUsers.vue')
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
    path: '/asignar-curso',
    name: 'ViewAsignarCurso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewAsignarCurso.vue')
  },
  {
    path: '/centros-capacitacion',
    name: 'ViewCentrosCapacitacion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewCentrosCapacitacion.vue')
  },
  {
    path: '/agregar-especialidad',
    name: 'ViewAddEspecialidad',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewAddEspecialidad.vue')
  },
  {
    path: '/dashboard-admin-unidad',
    name: 'ViewDashboardAdminUnidad',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewDashboardAdminUnidad.vue')
  },
  {
    path: '/cedula-pre-autorizada',
    name: 'ViewCedulasCursosRegistradas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewCedulasCursosRegistradas.vue')
  },
  {
    path: '/form-cedula-cursos',
    name: 'ViewAddCedulaPreAutCursos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewAddCedulaPreAutCursos.vue')
  },
  {
    path: '/relacion-participantes-registrados',
    name: 'ViewRelacionParticipantesRegistrados',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewRelacionParticipantesRegistrados.vue')
  },
  {
    path: '/form-relacion-participantes',
    name: 'ViewAddRelacionParticipantes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewAddRelacionParticipantes.vue')
  },
  {
    path: '/cronograma',
    name: 'ViewCronograma',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewCronograma.vue')
  },
  {
    path: '/form-cronograma',
    name: 'ViewAddCronograma',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewAddCronograma.vue')
  },
  {
    path: '/factibilidad-justificacion-registradas',
    name: 'ViewFactibilidadJustificacionRegistradas',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewFactibilidadJustificacionRegistradas.vue')
  },
  {
    path: '/form-factibilidad-justificacion',
    name: 'ViewAddFactibilidadJustificacion',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewAddFactibilidadJustificacion.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
