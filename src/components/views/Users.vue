<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <br />
      <h2 style="color: #2b4c7b">Usuarios registrados</h2>
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
        <template v-slot:item.fullname="{ item }">
          <div v-if="item.nombres || item.primer_apellido">
            {{ item.nombres }} {{ item.primer_apellido }}
            {{ item.segundo_apellido }}
          </div>
          <div class="font-italic" v-else>Sin nombre</div>
        </template>
        <template v-slot:item.idRol="{ item }">
          <v-chip :color="getColor(item.idRol)" dark>
            {{ item.nombre_rol }}
          </v-chip>
        </template>
        <template v-slot:item.adm="{}">
          <v-container class="px-0" fluid>
            <v-switch></v-switch>
          </v-container>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item.id)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item.id)"> mdi-delete </v-icon>
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
      { text: "OPCIONES", value: "actions" },
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

    getColor(role) {
      if (role == 1) return "red";
      else if (role == 2) return "orange";
      else return "green";
    },
  },
};
</script>

<style scoped></style>
