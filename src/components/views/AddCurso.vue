<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <br />
      <p></p>
      <h2 style="color: #2b4c7b">Nuevo curso</h2>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div>
        <v-layout row justify-center>
          <br />
          <p></p>
          <v-flex align-self-baseline xs2
            ><label>Nombre del curso</label></v-flex
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
            ><label>Duración de horas</label></v-flex
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
          <v-flex align-self-baseline xs2><label>Clave de curso</label></v-flex>
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
          <v-flex align-self-baseline xs2><label>Especialidad</label></v-flex>
          <v-flex align-self-center xs5>
            <v-combobox dense outlined class="bordeRedondoElement"></v-combobox>
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2><label>Descripción</label></v-flex>
          <v-flex align-self-center xs5>
            <v-textarea outlined name="input-7-4" label="" value=""></v-textarea>
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2><label></label></v-flex>
          <v-flex align-self-center xs5>
            <label
              >*Revisa que la información esté correcta y da click en el botón
              de "AGREGAR"</label
            >
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row> <br /> </v-row>
    <v-row justify="center" align="start" style="height: 80px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2></v-flex>
          <v-flex align-self-center xs5>
            <v-btn outlined color="gray" class="bordeRedondoElement"
              >Agregar</v-btn
            >
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
  </v-container>
</template>
