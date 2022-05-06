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
              <li class="lista2">Marketing</li>
              <li class="lista2">Negocios y emprendimiento</li>
              <li class="lista2">Diseño</li>
              <li class="lista2">Desarrollo de sofware</li>
              <li class="lista2">Inglés</li>
              <li class="lista2">Recursos humanos</li>
              <li class="lista2">Unidades de capacitación</li>
              <li class="lista2">Campos de formación profesional</li>
              <li class="lista2">Cursos mejor valorados</li>
              <li class="lista2">Cursos nuevos</li>
              <li class="lista2">Cursos cerca de tu localidad</li>
            </ul>
          </li>
          <li class="lista1">
            <a>Especialidades</a>
            <ul>
              <li class="lista2"><router-link style="text-decoration: none; color: inherit;" to="/especialidad">Gestión y Venta de Servicios Turísticos</router-link></li>
              <li class="lista2">Hotelería</li>
              <li class="lista2">Informática</li>
              <li class="lista2">Estilismo y Diseño de Imagen</li>
              <li class="lista2">Inglés</li>
              <li class="lista2">Alimentos y Bebidas</li>
              <li class="lista2">Diseño y Fabricación de Muebles de Madera</li>
              <li class="lista2">Diseño y Elaboración de cerámica</li>
              <li class="lista2">Artesanías con fibras Textiles</li>
              <li class="lista2">Artesanías con Pastas, Pinturas y Acabados</li>
              <li class="lista2">Administración</li>
              <li class="lista2">Unidades de capacitación</li>
              <li class="lista2">Campos de formación profesional</li>
              <li class="lista2">Cursos mejor valorados</li>
              <li class="lista2">Cursos nuevos</li>
              <li class="lista2">Cursos cerca de tu localidad</li>
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
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
