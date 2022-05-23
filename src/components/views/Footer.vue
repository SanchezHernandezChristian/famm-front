<template>
  <footer class="text-white pt-4">
    <div class="row" style="margin-top: 35px;">
      <div class="col" style="margin-top: -20px; margin-left: 25px;">
        <section class="md:w-5/12">
          <!--<strong>FAMM</strong>
          <p>
            Facilitador para el Acceso a Módulos tecnológicos y Monitoreo
            educativo
          </p>-->
          <v-col
            ><v-img
              max-height="100%"
              max-width="75%"
              src="@/assets/img/famm-footer.png"
            ></v-img
          ></v-col>
        </section>
      </div>
      <div class="col">
        <section class="md:w-5/12 left">
          <strong>TODOS NUESTROS CURSOS Y TALLERES</strong>
          <p>Unidades de capacitación</p>
          <p>Campos de formación profesional</p>
          <p>Cursos mejor valorados</p>
          <p>Cursos nuevos</p>
          <p>Cursos cerca de tu localidad</p>
        </section>
      </div>
      <div class="col">
        <section class="md:w-5/12 left">
          <strong>SUSCRÍBETE Y RECIBE NOTICIAS</strong>
          <p>Recibe promociones y descuentos</p>
          <v-container fluid>
            <v-layout justify-center>
              <v-flex>
                <v-text-field
                  v-model="email"
                  :rules="[rules.email]"
                  outlined
                  dark
                  label="Ingresa tu correo"
                  dense
                >
                </v-text-field>
              </v-flex>
              <v-flex>
                <v-btn small dark color="btnInscribirse">Inscribirse</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
          <p></p>
          <strong>DESCARGA LA APP DE FAMM</strong>
        </section>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-5" />
      <div class="col-1">
        <img class="logo-footer-b" src="@/assets/img/icapet.png" alt="FAMM" />
      </div>
      <div class="col-5" />
    </div>
    <div class="row mt-4">
      <div class="col">
        <section class="w-full text-center mt-16">
          <section>
            <p class="mb-4">Seguir a FAMM</p>
            <i class="fa fa-facebook-official m-1" aria-hidden="true"></i>
            <i class="fa fa-instagram m-1" aria-hidden="true"></i>
            <i class="fa fa-twitter m-1" aria-hidden="true"></i>
            <i class="fa fa-youtube-play m-1" aria-hidden="true"></i>
          </section>
        </section>
        <section class="w-full text-center mt-16">
          &copy; FAMM 2022 Todos los derechos reservados.
        </section>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      email: "",
      rules: {
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "E-mail inválido.";
        },
      },
    };
  },
};
</script>
