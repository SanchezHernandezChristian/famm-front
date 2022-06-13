<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <br />
      <h2 style="color: #2b4c7b">Usuarios registrados</h2>
    </v-row>
    <v-row justify="center" align="center">
      <v-data-table
        :headers="headers"
        :items="items_users"
        :items-per-page="5"
        :single-select="false"
        item-key="id"
        show-select
        class="elevation-1 users"
      >
        <template v-slot:item.rolename="{ item }">
          <v-chip :color="getColor(item.role)" dark>
            {{ item.rolename }}
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
export default {
  name: "Users",
  data: () => ({
    headers: [
      { text: "NOMBRE", value: "fullname" },
      { text: "Rol de usuario", value: "rolename" },
      { text: "CORREO", value: "email" },
      { text: "FECHA DE ALTA", value: "date" },
      { text: "ADMINISTRAR", value: "adm" },
      { text: "OPCIONES", value: "actions" },
    ],
    items_users: [],
  }),
  mounted() {
    this.getItems();
  },
  methods: {
    getItems() {
      let me = this;
      let data = localStorage.getItem("adm_users")
        ? JSON.parse(localStorage.getItem("adm_users"))
        : {};

      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          const element = data[key];
          element.fullname =
            element.name + " " + element.surname + " " + element.lastname;
          me.items_users.push(element);
        }
      }
    },

    deleteItem() {
      this.$swal(
        "En construcción",
        "Esta funcionalidad está en desarrollo...",
        "info"
      ).then(() => {});
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

<style>
.users {
  height: 600px;
}
</style>
