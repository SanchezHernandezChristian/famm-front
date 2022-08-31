<template>
  <v-container fluid>
    <v-row class="mb-4">
      <v-col cols="12" class="d-flex flex-row">
        <h2 style="color: #2b4c7b">Usuarios registrados</h2>
        <v-btn small color="orange" dark class="ma-2" @click="addUser">
          CREAR NUEVO
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-data-table
        :headers="headers"
        :items="items_users"
        :items-per-page="5"
        :single-select="false"
        item-key="id"
        show-select
        class="elevation-1"
      >
        <template v-slot:[`item.fullname`]="{ item }">
          <div v-if="item.nombres || item.primer_apellido">
            {{ item.nombres }} {{ item.primer_apellido }}
            {{ item.segundo_apellido }}
          </div>
          <div class="font-italic" v-else>Sin nombre</div>
        </template>
        <template v-slot:[`item.idRol`]="{ item }">
          <v-chip :color="getColor(item.idRol)" dark>
            {{ item.nombre_rol }}
          </v-chip>
        </template>
        <template v-slot:[`item.adm`]="{}">
          <v-container class="px-0" fluid>
            <v-switch></v-switch>
          </v-container>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn text small @click="editItem(item.id)">
            <v-icon small class="mr-2"> mdi-pencil </v-icon>
            Editar
          </v-btn>
          <v-btn text small @click="deleteItem(item.id)">
            <v-icon small> mdi-delete </v-icon>
            Eliminar
          </v-btn>
        </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  name: "Users",
  data: () => ({
    headers: [
      { text: "NOMBRE", value: "fullname" },
      { text: "Rol de usuario", value: "idRol" },
      { text: "CORREO", value: "email" },
      { text: "FECHA DE ALTA", value: "created_at" },
      { text: "ADMINISTRAR", value: "adm" },
      { text: "OPCIONES", align: "center", value: "actions" },
    ],
    items_users: [],
  }),
  mounted() {
    this.getItems();
  },
  methods: {
    async getItems() {
      let me = this;

      if (me.$store.getters.isLoggedIn) {
        try {
          const response = await AuthService.fetchUsers();
          me.items_users = response.data;
        } catch (error) {
          console.log(error);
        }
      }
    },

    deleteItem(id) {
      this.$swal({
        title: "Desea eliminar?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar",
      })
        .then((result) => {
          if (result.isConfirmed) {
            return AuthService.deleteUser(id);
          }
        })
        .then((response) => {
          if (response && response.serverCode == 200) {
            this.$swal("Eliminado!", "El usuario se ha eliminado.", "success");
            this.getItems();
          }
        })
        .catch((error) => {
          console.log(error);
          this.$swal("Error!", "No se pudo eliminar el usuario.", "error");
        });
    },

    editItem(id) {
      this.$router.push({
        name: "ViewAddUser",
        params: {
          id: id,
        },
      });
    },

    addUser() {
      this.$router.push("agregar-usuario");
    },

    getColor(role) {
      if (role == 1) return "red";
      else if (role == 2) return "orange";
      else return "green";
    },
  },
};
</script>

<style scoped></style>
