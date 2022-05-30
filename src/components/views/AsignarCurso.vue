<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <br />
      <p></p>
      <h2 style="color: #2b4c7b">Eliminar curso</h2>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div>
        <v-layout row justify-center>
          <br />
          <p></p>
          <v-flex align-self-baseline xs2
            ><label>Clave del curso</label></v-flex
          >
          <v-flex align-self-baseline xs3>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              placeholder="Escribe la clave del curso"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-start xs2>
            <v-btn outlined color="gray" class="bordeRedondoElement"
              >BUSCAR</v-btn
            >
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 80px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2><label>Asignar a</label></v-flex>
          <v-flex align-self-center xs3>
            <v-combobox
              dense
              outlined
              class="bordeRedondoElement"
              placeholder="Selecciona la unidad"
            ></v-combobox>
          </v-flex>
          <v-flex align-self-center xs7> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="start" style="height: 80px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2></v-flex>
          <v-flex align-self-center xs2>
            <v-btn outlined color="gray" class="bordeRedondoElement"
              >ASIGNAR</v-btn
            >
          </v-flex>
          <v-flex align-self-center xs2>
            <v-btn outlined color="gray" class="bordeRedondoElement"
              >CANCELAR</v-btn
            >
          </v-flex>
          <v-flex align-self-center xs6></v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row>
        <div style="height: 450px;"></div>
    </v-row>
  </v-container>
</template>
