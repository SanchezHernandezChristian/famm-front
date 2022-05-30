<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <br />
      <p></p>
      <h2 style="color: #2b4c7b">Añadir usuario</h2>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div>
        <v-layout row justify-center>
          <br />
          <p></p>
          <v-flex align-self-baseline xs2
            ><label>Nombre de usuario</label></v-flex
          >
          <v-flex align-self-baseline xs5>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div>
        <v-layout row justify-center>
          <br />
          <p></p>
          <v-flex align-self-baseline xs2
            ><label>Email</label></v-flex
          >
          <v-flex align-self-center xs5>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div>
        <v-layout row justify-center>
          <br />
          <p></p>
          <v-flex align-self-baseline xs2
            ><label>Nombres (s)</label></v-flex
          >
          <v-flex align-self-center xs5>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div>
        <v-layout row justify-center>
          <br />
          <p></p>
          <v-flex align-self-baseline xs2
            ><label>Apellidos (s)</label></v-flex
          >
          <v-flex align-self-center xs5>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div>
        <v-layout row justify-center>
          <br />
          <p></p>
          <v-flex align-self-baseline xs2
            ><label>Contraseña</label></v-flex
          >
          <v-flex align-self-center xs5>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div>
        <v-layout row justify-center>
          <br />
          <p></p>
          <v-flex align-self-baseline xs2
            ><label>Repetir contraseña</label></v-flex
          >
          <v-flex align-self-center xs5>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 80px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2
            ><label>Rol de usuario</label></v-flex
          >
          <v-flex align-self-center xs4>
            <v-combobox dense outlined class="bordeRedondoElement"></v-combobox>
          </v-flex>
          <v-flex align-self-center xs6>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row> <br /> </v-row>
    <v-row justify="center" align="start" style="height: 80px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-baseline xs1>
            <v-btn outlined color="gray" class="bordeRedondoElement"
              >Añadir otro</v-btn
            >
          </v-flex>
          <v-flex align-self-center xs11> </v-flex>
        </v-layout>
      </div>
    </v-row>
  </v-container>
</template>
