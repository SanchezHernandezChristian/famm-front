<template>
    <div style="float: right; text-align: right">
        <v-menu offset-y open-on-hover>
            <template v-slot:activator="{ on }">
                <v-avatar color="primary" size="38" v-on="on" class="clickable">
                    <v-icon dark> mdi-account-circle </v-icon>
                </v-avatar>
            </template>
            <v-list :class="color">
                <v-list-item
                    class="white--text"
                    v-for="(item, index) in items"
                    :key="index"
                    @click="selectItem(item)"
                >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>
<script>
import AuthService from "@/services/AuthService.js";

export default {
    props: {
        color: {
            type: String,
            required: true,
        },
    },
    data: () => ({
        items: [
            { title: "Configuración", icon: "mdi-cog-outline", value: 1 },
            { title: "Salir", icon: "mdi-arrow-right-bold-outline", value: 2 },
        ],
    }),

    methods: {
        async selectItem(item) {
            switch (item.value) {
                case 1:
                    break;
                case 2:
                    try {
                        await AuthService.logout();
                        this.logout_redirect();
                    } catch (error) {
                        if (error.response.status == 401)
                            this.logout_redirect();
                        console.log(error);
                    }
                    break;
                default:
                    break;
            }
        },

        logout_redirect() {
            this.$store.dispatch("logout");
            if (this.$route.name == "Home") this.$router.go();
            else this.$router.push("/");
        },
    },
};
</script>
