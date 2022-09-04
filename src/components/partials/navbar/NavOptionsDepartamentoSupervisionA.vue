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
            </v-flex>
            <v-flex align-self-center xs2>
                <v-icon color="#bdbbbd">mdi-magnify</v-icon><input type="search" placeholder="Buscar...">
            </v-flex>
        </v-layout>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        items_preautorizacion: [
            {
                title: "Validar cédulas de identificación del instructor",
                value: "validacion-instructores",
            },
        ],
    }),
    methods: {
        selectItem(route) {
            if (route) {
                this.$router.push(route);
            }
        },

        seleccionDashboard() {
            this.$router.push("dashboard-admin-unidad");
        },

        async cursosAsignados() {
            try {
                this.$router.push("cursos-asignados-unidad");
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>