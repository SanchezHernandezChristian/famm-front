<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid" style="height: 60px">
      <div>
        <img src="@/assets/img/logo.png" alt="FAMM" width="140" height="40" />
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul style="margin-top: 20px">
          <li class="lista1 primero">
            <a>Cursos</a>
            <ul>
              <li class="lista2">
                TODOS LOS CURSOS
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Marketing</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Negocios y emprendimiento</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Diseño</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Desarrollo de sofware</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Inglés</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Recursos humanos</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Unidades de capacitación</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Campos de formación profesional</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Cursos mejor valorados</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Cursos nuevos</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Cursos cerca de tu localidad</router-link
                >
              </li>
            </ul>
          </li>
          <li class="lista1">
            <a>Especialidades</a>
            <ul>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Gestión y Venta de Servicios Turísticos</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Hotelería</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Informática</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Estilismo y Diseño de Imagen</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Inglés</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Alimentos y Bebidas</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Diseño y Fabricación de Muebles de Madera</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Diseño y Elaboración de cerámica</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Artesanías con fibras Textiles</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Artesanías con Pastas, Pinturas y Acabados</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Administración</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Unidades de capacitación</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Campos de formación profesional</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Cursos mejor valorados</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Cursos nuevos</router-link
                >
              </li>
              <li class="lista2">
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/especialidad"
                  >Cursos cerca de tu localidad</router-link
                >
              </li>
              <li class="lista2">
                TODAS LAS ESPECIALIDADES
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <form class="d-flex">
          <div class="input-group m-4">
            <span class="input-group-text" id="basic-addon1"
              ><i class="fa fa-search"></i
            ></span>
            <input
              type="text"
              class="form-control"
              placeholder="Buscar"
              aria-label="Buscar"
              aria-describedby="basic-addon1"
            />
          </div>
          <button
            class="btn btn-outline-danger m-4"
            type="submit"
            style="height: 40px; width: 250px"
          >
            Registrarse
          </button>
          <button
            class="btn btn-outline-secondary m-4"
            type="submit"
            style="height: 40px; width: 250px"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
    <v-row justify="center" v-if="logged_in">
      <UserCard :token="token" v-on:user_action="userAction" />
    </v-row>
    <v-row justify="center" v-else>
      <v-col md="6">
        <Login v-on:user_action="userAction" />
      </v-col>
      <v-col md="6">
        <Registro />
      </v-col>
    </v-row>
  </nav>
</template>

<script>
import Login from "../Login.vue";
import Registro from "../Registro.vue";
import UserCard from "../UserCard.vue";

export default {
  name: "Navbar",
  components: {
    Login,
    Registro,
    UserCard,
  },
  data: () => ({
    logged_in: false,
    token: "",
  }),
  methods: {
    userAction(user_data) {
      let me = this;
      me.token = user_data.token ? user_data.token : me.token;
      me.logged_in = !me.logged_in;
    },
  },
};
</script>
