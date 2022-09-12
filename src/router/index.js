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
  {
    path: '/validacion-instructores',
    name: 'ViewValidacionInstructores',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewValidacionInstructores.vue')
  },
  {
    path: '/cursos-asignados',
    name: 'ViewCursosAsignadosAdministrador',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewCursosAsignadosAdministrador.vue')
  },
  {
    path: '/cursos-asignados-unidad',
    name: 'ViewCursosAsignadosUnidad',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewCursosAsignadosUnidad.vue')
  },
  {
    path: '/formatos-pago-registrados',
    name: 'ViewFormatosPagoRegistrados',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewFormatosPagoRegistrados.vue')
  },
  {
    path: '/form-formato-pago',
    name: 'ViewFormatoPago',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewFormatoPago.vue')
  },
  {
    path: '/login',
    name: 'ViewLoginTeacher',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewLoginTeacher.vue')
  },
  {
    path: '/docente-curso',
    name: 'ViewDocenteCurso',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewDocenteCurso.vue')
  },
  {
    path: '/dashboard-departamento-academico',
    name: 'ViewDashboardDepartamentoApoyoAcademico',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewDashboardDepartamentoApoyoAcademico.vue')
  },
  {
    path: '/dashboard-dt-academica',
    name: 'ViewDashboardDireccionTAcademica',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewDashboardDireccionTAcademica.vue')
  },
  {
    path: '/dashboard-departamento-supervision',
    name: 'ViewDashboardDepartamentoSupervisionAcademica',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewDashboardDepartamentoSupervisionAcademica.vue')
  },
  {
    path: '/cedula-pre-autorizada-dtacademica',
    name: 'ViewCedulasCursosRegistradasDireccionTA',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewCedulasCursosRegistradasDireccionTA.vue')
  },
  {
    path: '/cedula-pre-autorizada-apoyo',
    name: 'ViewCedulasCursosRegistradasDepartamentoApoyoA',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewCedulasCursosRegistradasDepartamentoApoyoA.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
