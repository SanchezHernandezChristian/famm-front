<template>
  <v-container fluid>
    <v-layout justify-start>
      <img src="@/assets/img/guelaguetza_oaxaca.png" alt="bann" />
    </v-layout>
    <v-container grid-list-md text-xs-center>
      <label color="primary"
        ><h1 class="display-5">
          <strong>Gestión y Venta de Servicios Turísticos</strong>
        </h1></label
      >
      <v-layout>
        <v-flex>
          <label>
            <strong>
              Identifica qué motiva la compra de tus consumidores y crea
              estrategias turísticas.
            </strong>
          </label>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <label color="blue"
            ><strong>200</strong> Estudiantes han tomado el curso
          </label>
        </v-flex>
        <v-flex>
          <label color="blue"><strong>20</strong> horas teóricas </label>
        </v-flex>
        <v-flex>
          <label color="blue"><strong>20</strong> horas prácticas </label>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-btn> INSCRÍBETE AHORA </v-btn>
      </v-layout>
      <v-layout>
        <label color="primary"
          ><h4>
            <strong>Equipo docente</strong>
          </h4></label
        >
      </v-layout>
      <v-layout>
        <v-layout>
          <v-flex xs2>
            <v-avatar size="100px">
              <img alt="Avatar" src="@/assets/img/docente.png" />
            </v-avatar>
          </v-flex>
        </v-layout>
        <v-layout justify-start column>
          <v-flex>
            <label>
              <strong>Luis González</strong>
            </label>
          </v-flex>
          <v-flex>
            <label>
              Líder de Investigación de Mercados y Comportamiento del Consumidor
            </label>
          </v-flex>
          <v-flex>
            <label> Oaxaca, México </label>
          </v-flex>
        </v-layout>
      </v-layout>
      <v-layout justify-center column>
        <v-flex>
          <v-card-title primary-title>
            <h3>¿Qué aprenderás en el curso?</h3>
          </v-card-title>
        </v-flex>
        <v-flex>
          <v-card flat>
            <v-card-text><span>{{ lorem }}</span></v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout>
          <v-card-title><h3>Temario</h3></v-card-title>
      </v-layout>
      <v-layout row>
          <v-card-title><h3>¿Qué necesitas para este curso?</h3></v-card-title>
          <v-card flat>
            <v-card-text><span>{{ lorem }}</span></v-card-text>
          </v-card>
      </v-layout>
      <v-layout row>
          <v-card-title><h3>Preguntas frecuentes</h3></v-card-title>
          <v-card flat>
            <v-card-text><span>{{ loremQuestion }}</span></v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text><span>{{ loremQuestion }}</span></v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text><span>{{ loremQuestion }}</span></v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text><span>{{ loremQuestion }}</span></v-card-text>
          </v-card>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
    loremQuestion: '¿Loremipsum dolor sit amet?',
  }),
};
</script>
