<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="m-0 p-0">
        <div class="indigo darken-4 text-center">
          <p class="white--text pt-3 mb-2">
            Facilitador para el Acceso a Módulos tecnológicos y Monitoreo
            educativo
          </p>
        </div>
      </v-col>
      <v-col cols="12" class="m-0 p-0">
        <div class="text-center">
          <h5>
            <p style="color: #394f79">
              <strong
                >CÉDULA DE PRE-AUTORIZACIÓN DE CURSOS DE CAPACITACIÓN</strong
              >
            </p>
            <p style="color: #394f79">
              <strong>FORMATO RUDC-06</strong>
            </p>
          </h5>
        </div>
      </v-col>
      <v-col cols="12" class="m-0 p-0">
        <div class="text-center">
          <p style="color: #aeacac">
            <strong
              >Rellena todos los campos para completar tu registro.</strong
            >
          </p>
          <p style="color: #aeacac">
            <strong>*Todos los campos son obligatorios.</strong>
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row
      ><br />
      <p></p
    ></v-row>
    <v-form ref="form_cedula">
      <v-layout row v-if="section1">
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2
              ><label>CURSO SOLICITADO</label></v-flex
            >
            <v-flex align-self-center xs3>
              <v-col>
                <v-select
                  v-model="selectCurso"
                  :items="items_cursos"
                  item-text="nombre_curso"
                  item-value="idCurso"
                  :rules="rules"
                  required
                  return-object
                  dense
                  outlined
                  class="bordeRedondoElement"
                ></v-select>
              </v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <!-- <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>CLAVE</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row> -->
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2
              ><label
                >NOMBRE DEL SOLICITANTE O REPRESENTANTE DEL GRUPO</label
              ></v-flex
            >
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  v-model="form_pre_aut.nombreRepresentante"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="start">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2>
              <label>QUIEN SOLICITA</label>
            </v-flex>
            <v-flex align-self-center xs4>
              <v-radio-group
                column
                :rules="rules"
                v-model="form_pre_aut.solicitaCurso"
              >
                <v-radio label="EMPRESA" value="EMPRESA"></v-radio>
                <v-radio label="ORGANIZACIÓN" value="ORGANIZACIÓN"></v-radio>
                <v-radio
                  label="GRUPO PRODUCTIVO"
                  value="GRUPO PRODUCTIVO"
                ></v-radio>
                <v-radio label="DEPENDENCIA" value="DEPENDENCIA"></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex align-self-center xs2> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>CUAL</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  v-model="form_pre_aut.nombreSolicitaCurso"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>REGIÓN</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  v-model="form_pre_aut.region"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>DISTRITO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  v-model="form_pre_aut.distrito"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>MUNICIPIO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-select
                  v-model="selectMunicipio"
                  :items="items_municipios"
                  item-text="Descripcion"
                  item-value="c_Municipio"
                  :rules="rules"
                  required
                  return-object
                  dense
                  outlined
                  class="bordeRedondoElement"
                ></v-select>
              </v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>LOCALIDAD</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  v-model="form_pre_aut.localidad"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>SEDE DEL CURSO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  v-model="form_pre_aut.sedeCurso"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <!-- <v-row justify="center" align="center">
        <v-layout row justify-center>
          <v-flex align-self-center xs4> </v-flex>
          <v-flex align-self-center xs2><label>NOMBRE</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field
                outlined
                class="bordeRedondoElement"
                :rules="rules"
              ></v-text-field
            ></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </v-row>
      <v-row justify="center" align="center">
        <v-layout row justify-center>
          <v-flex align-self-center xs4> </v-flex>
          <v-flex align-self-center xs2><label>RFC</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field
                outlined
                class="bordeRedondoElement"
                :rules="rules"
              ></v-text-field
            ></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </v-row>
      <v-row justify="center" align="center">
        <v-layout row justify-center>
          <v-flex align-self-center xs4> </v-flex>
          <v-flex align-self-center xs2><label>CURP</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field
                outlined
                class="bordeRedondoElement"
                :rules="rules"
              ></v-text-field
            ></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </v-row>
      <v-row justify="center" align="center">
        <v-layout row justify-center>
          <v-flex align-self-center xs4> </v-flex>
          <v-flex align-self-center xs2><label>PROFESIÓN</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field
                outlined
                class="bordeRedondoElement"
                :rules="rules"
              ></v-text-field
            ></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </v-row> -->
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>DOCENTE</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-select
                  v-model="form_pre_aut.idDocente"
                  :items="items_docentes"
                  item-text="nombre"
                  item-value="idDocente"
                  :rules="rules"
                  required
                  return-object
                  dense
                  outlined
                  class="bordeRedondoElement"
                ></v-select>
              </v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="start">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2>
              <label>MODALIDAD</label>
            </v-flex>
            <v-flex align-self-center xs5>
              <v-radio-group
                column
                :rules="rules"
                v-model="form_pre_aut.modalidadCurso"
              >
                <v-radio
                  label="CURSO DE COMPETENCIA LABORAL"
                  value="CURSO DE COMPETENCIA LABORAL"
                ></v-radio>
                <v-radio
                  label="CURSO REGULAR EBC"
                  value="CURSO REGULAR EBC"
                ></v-radio>
                <v-radio
                  label="CURSO REGULAR TRADICIONAL"
                  value="CURSO REGULAR TRADICIONAL"
                ></v-radio>
                <v-radio
                  label="CURSO DE CAPACITACIÓN ACELERADA ESPECÍFICA A DISTANCIA"
                  value="CURSO DE CAPACITACIÓN ACELERADA ESPECÍFICA A DISTANCIA"
                ></v-radio>
                <v-radio
                  label="CURSO DE EXTENSIÓN"
                  value="CURSO DE EXTENSIÓN"
                ></v-radio>
                <v-radio
                  label="EVALUACIÓN ROCO"
                  value="EVALUACIÓN ROCO"
                ></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex align-self-center xs1> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>TOTAL HORAS</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  type="number"
                  v-model="form_pre_aut.totalHorasCurso"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>COSTO HORA</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  type="number"
                  v-model="form_pre_aut.costoHora"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>COSTO TOTAL</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  type="number"
                  v-model="form_pre_aut.costoTotal"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
      </v-layout>
      <v-layout row v-if="section2">
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2
              ><label>PERIODO DE INICIO</label></v-flex
            >
            <v-flex align-self-center xs3>
              <v-col>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="form_pre_aut.periodoInicio"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="form_pre_aut.periodoInicio"
                      label="PERIODO DE INICIO"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :rules="rules"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="form_pre_aut.periodoInicio"
                    no-title
                    scrollable
                    locale="es-MX"
                    :rules="rules"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu.save(form_pre_aut.periodoInicio)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu></v-col
              >
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2
              ><label>PERIODO DE TÉRMINO</label></v-flex
            >
            <v-flex align-self-center xs3>
              <v-col>
                <v-menu
                  ref="menu2"
                  v-model="menu2"
                  :close-on-content-click="false"
                  :return-value.sync="form_pre_aut.periodoTermino"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="form_pre_aut.periodoTermino"
                      label="PERIODO DE TÉRMINO"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :rules="rules"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="form_pre_aut.periodoTermino"
                    no-title
                    scrollable
                    locale="es-MX"
                    :rules="rules"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu2 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu2.save(form_pre_aut.periodoTermino)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu></v-col
              >
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>TOTAL</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  label="DÍAS DE CAPACITACIÓN"
                  type="number"
                  v-model="form_pre_aut.totalDiasCapacitacion"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="start">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2>
              <label>ACCIÓN MÓVIL</label>
            </v-flex>
            <v-flex align-self-center xs4>
              <v-radio-group
                column
                :rules="rules"
                v-model="form_pre_aut.accionMovil"
              >
                <v-radio
                  label="DESPLAZAMIENTO INSTRUCTOR"
                  value="DESPLAZAMIENTO INSTRUCTOR"
                ></v-radio>
                <v-radio
                  label="DESPLAZAMIENTO INSTRUCTOR Y EQUIPO"
                  value="DESPLAZAMIENTO INSTRUCTOR Y EQUIPO"
                ></v-radio>
                <v-radio
                  label="DESPLAZAMIENTO INSTRUCTOR Y UNIDAD MÓVIL"
                  value="DESPLAZAMIENTO INSTRUCTOR Y UNIDAD MÓVIL"
                ></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex align-self-center xs2> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2
              ><label>TOTAL HORAS POR SEMANA</label></v-flex
            >
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  type="number"
                  v-model="form_pre_aut.totalHorasSemana"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>ESPECIALIDAD</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-select
                  v-model="selectEspecialidad"
                  :items="items_especialidades"
                  item-text="nombre_especialidad"
                  item-value="idEspecialidad"
                  :rules="rules"
                  required
                  return-object
                  dense
                  outlined
                  class="bordeRedondoElement"
                ></v-select>
              </v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>GRUPO ÉTNICO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  v-model="form_pre_aut.grupoEtnico"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2
              ><label>TOTAL PARTICIPANTES HOMBRES</label></v-flex
            >
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  type="number"
                  v-model="form_pre_aut.totalHombres"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2
              ><label>TOTAL PARTICIPANTES MUJERES</label></v-flex
            >
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  type="number"
                  v-model="form_pre_aut.totalMujeres"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2
              ><label>TOTAL INSCRITOS</label></v-flex
            >
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  type="number"
                  v-model="form_pre_aut.totalInscritos"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
      </v-layout>
    </v-form>
    <v-row style="height: 70px"></v-row>
    <v-row v-if="section1">
      <div class="text-center">
        <v-layout row justify-end>
          <v-flex align-self-center xs5></v-flex>
          <v-flex align-self-center xs2>
            <v-btn
              depressed
              color="#FFFFFF"
              elevation="0"
              class="ma-2"
              @click="pageSig"
              >Siguiente
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i
            ></v-btn>
          </v-flex>
          <v-flex align-self-center xs4></v-flex>
          <v-flex align-self-center xs1><label>Página 1 de 2</label></v-flex>
          <!-- <v-flex align-self-center xs1
            ><v-text-field
              value=" 1"
              outlined
              disabled
              style="width: 50px; height: 50px"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs1><label>de 3</label></v-flex> -->
          <!-- <v-flex align-self-center xs1
            ><v-pagination
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
            ></v-pagination
          ></v-flex> -->
        </v-layout>
      </div>
    </v-row>
    <v-row v-if="section2">
      <div class="text-center">
        <v-layout row justify-end>
          <v-flex align-self-center xs5></v-flex>
          <v-flex align-self-center xs1>
            <v-btn
              depressed
              color="#FFFFFF"
              elevation="0"
              class="ma-2"
              @click="pageAnt"
              ><i class="fa fa-long-arrow-left" aria-hidden="true">
                Anterior</i
              ></v-btn
            >
          </v-flex>
          <v-flex align-self-center xs1>
            <template>
              <div class="text-center">
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" v-bind="attrs" v-on="on">
                      GUARDAR
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="text-h5 white lighten-2">
                      ¡ATENCIÓN!
                    </v-card-title>
                    <v-card-text>
                      SI TODOS LOS DATOS SON CORRECTOS DA CLICK EN CONTINUAR
                    </v-card-text>
                    <v-card-actions>
                      <v-btn outlined color="gray" @click="dialog = false">
                        Cancelar
                      </v-btn>
                      <v-btn
                        outlined
                        style="color: #ffffff; background-color: #2b4c7b"
                        @click="createCedula"
                        >Continuar</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </template>
          </v-flex>
          <v-flex align-self-center xs1
            ><v-btn outlined color="gray" @click="clean">LIMPIAR</v-btn></v-flex
          >
          <v-flex align-self-center xs3></v-flex>
          <v-flex align-self-center xs1><label>Página 2 de 2</label></v-flex>
          <!-- <v-flex align-self-center xs1
            ><v-text-field
              value=" 1"
              outlined
              disabled
              style="width: 50px; height: 50px"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs1><label>de 3</label></v-flex> -->
          <!-- <v-flex align-self-center xs1
            ><v-pagination
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
            ></v-pagination
          ></v-flex> -->
        </v-layout>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  data() {
    return {
      rules: [(v) => !!v || "Campo requerido"],
      page: 1,
      menu: false,
      menu2: false,
      section1: true,
      section2: false,
      dialog: false,
      items_municipios: [],
      items_escolaridad: [],
      items_cursos: [],
      items_docentes: [],
      items_especialidades: [],
      form_pre_aut: {
        idCurso: null,
        c_Municipio: null,
        idDocente: null,
        idEspecialidad: null,
        solicitaCurso: null,
        nombreSolicitaCurso: null,
        nombreRepresentante: null,
        region: null,
        distrito: null,
        localidad: null,
        sedeCurso: null,
        modalidadCurso: null,
        totalHorasCurso: null,
        costoHora: null,
        costoTotal: null,
        periodoInicio: null,
        periodoTermino: null,
        totalDiasCapacitacion: null,
        accionMovil: null,
        totalHorasSemana: null,
        grupoEtnico: null,
        totalInscritos: null,
        totalHombres: null,
        totalMujeres: null,
      },
      selectMunicipio: {},
      selectCurso: {},
      selectEspecialidad: {},
      selectDocente: {},
    };
  },

  async mounted() {
    let me = this;
    if (me.$store.getters.isLoggedIn) {
      try {
        const response = await AuthService.getMunicipios();
        const response2 = await AuthService.getEscolaridad();
        const response3 = await AuthService.getCursos();
        const response4 = await AuthService.getDocentes();
        const response5 = await AuthService.getEspecialidades();
        me.items_municipios = response.municipios;
        me.items_escolaridad = response2.data;
        me.items_cursos = response3.cursos;
        me.items_docentes = response4.data;
        me.items_especialidades = response5.especialidades;
      } catch (error) {
        console.log("Error", error.response);
      }
    }
  },

  methods: {
    async createCedula() {
      let me = this;
      if (me.$refs.form_cedula.validate()) {
        try {
          me.form_pre_aut.c_Municipio = this.selectMunicipio.c_Municipio;
          me.form_pre_aut.idCurso = this.selectCurso.idCurso;
          me.form_pre_aut.idDocente = this.selectDocente.idDocente;
          me.form_pre_aut.idEspecialidad =
            this.selectEspecialidad.idEspecialidad;
          console.log(me.form_pre_aut);
          await AuthService.addCedulaPreAut(me.form_pre_aut);
          Object.assign(me.$data, me.$options.data());
          me.$refs.form_cedula.resetValidation();
          me.$swal(
            "Guardado",
            "Información guardada correctamente.",
            "success"
          ).then(() => {
            me.$router.push("/cedula-pre-autorizada");
          });
        } catch (error) {
          console.log(error.response);
          me.$swal(
            "Error",
            "Error al intentar guardar la información.",
            "error"
          );
        }
      } else {
        me.s1_valid = false;
        me.$swal(
          "Advertencia",
          "No ha completado la información solicitada.",
          "warning"
        );
      }
    },

    async pageSig() {
      this.page++;
      console.log("page: ", this.page);
      this.section1 = false;
      this.section2 = true;
    },

    async pageAnt() {
      this.page--;
      console.log("page: ", this.page);
      this.section2 = false;
      this.section1 = true;
    },

    async clean() {
      try {
        this.$refs.form_cedula.reset();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
