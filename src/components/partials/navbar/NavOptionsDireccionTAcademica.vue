<template>
    <v-row>
        <v-layout>
            <v-flex align-self-center xs2>
                <v-menu transition="scroll-y-transition">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            depressed
                            color="#FFFFFF"
                            elevation="0"
                            class="ma-2"
                            v-bind="attrs"
                            v-on="on"
                            style="font-size: 13px; color: #8996a0"
                            @click="seleccionDashboard()"
                            ><v-icon color="#8996a0">mdi-home</v-icon>
                            Dashboard
                        </v-btn>
                    </template>
                </v-menu>
            </v-flex>
            <v-flex align-self-center xs2>
                <v-menu transition="scroll-y-transition">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            depressed
                            color="#FFFFFF"
                            elevation="0"
                            class="ma-2"
                            v-bind="attrs"
                            v-on="on"
                            style="font-size: 13px; color: #8996a0"
                            ><v-icon color="#8996a0">mdi-chart-bar</v-icon>
                            Graficas
                        </v-btn>
                    </template>
                </v-menu>
            </v-flex>
            <v-flex align-self-center xs3>
                <v-menu transition="scroll-y-transition">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            depressed
                            color="#FFFFFF"
                            elevation="0"
                            class="ma-2"
                            v-bind="attrs"
                            v-on="on"
                            style="font-size: 13px; color: #8996a0"
                            ><v-icon color="#8996a0"
                                >mdi-swap-horizontal-bold</v-icon
                            >
                            Pre autorización de cursos
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="(item, index) in items_preautorizacion"
                            :key="index"
                            @click="selectItem(item.value)"
                        >
                            <v-list-item-title>{{
                                item.title
                            }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-flex>
            <v-flex align-self-center xs2>
                <v-menu transition="scroll-y-transition">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            depressed
                            color="#FFFFFF"
                            elevation="0"
                            class="ma-2"
                            v-bind="attrs"
                            v-on="on"
                            style="font-size: 13px; color: #8996a0"
                            ><v-icon color="#8996a0">mdi-check-bold</v-icon>
                            Cursos activos
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="(item, index) in items_cursos"
                            :key="index"
                            @click="selectItem(item.value)"
                        >
                            <v-list-item-title>{{
                                item.title
                            }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-flex>
            <v-flex align-self-center xs2>
                <v-menu transition="scroll-y-transition">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            depressed
                            color="#FFFFFF"
                            elevation="0"
                            class="ma-2"
                            v-bind="attrs"
                            v-on="on"
                            style="font-size: 13px; color: #8996a0"
                            @click="cursosAsignados()"
                            ><v-icon color="#8996a0">mdi-check-all</v-icon>
                            Cursos asignados
                        </v-btn>
                    </template>
                </v-menu>
            </v-flex>
        </v-layout>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        items_cursos: [
            {
                title: "Registro de inscripción, acreditación y certificación",
                value: "",
            },
        ],
        items_preautorizacion: [
            {
                title: "Cédulas de pre-autorización de cursos de capacitación",
                value: "cedula-pre-autorizada-dtacademica",
            },
            {
                title: "Validación formato de pago",
                value: "",
            },
            { title: "Validación de oficio de autorización", value: "oficio-solicitud" },
        ],
    }),
    methods: {
        selectItem(route) {
            if (route) {
                this.$router.push(route);
            }
        },

        seleccionDashboard() {
            this.$router.push("dashboard-dt-academica");
        },

        async cursosAsignados() {
            try {
                //this.$router.push("cursos-asignados-unidad");
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>