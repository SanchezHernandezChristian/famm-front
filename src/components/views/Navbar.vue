<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img class="navbar-brand-full" src="@/assets/img/logo.png" alt="FAMM" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mt-3">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Cursos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Especialidades</a>
          </li>
        </ul>
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
          <button class="btn btn-outline-danger m-4" type="submit">
            Registrarse
          </button>
          <button class="btn btn-outline-secondary m-4" type="submit">
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
