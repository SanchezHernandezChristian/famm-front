 <template>
  <div>
    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on }">
        <v-avatar color="primary" size="48" v-on="on">
          <span class="text-white"
            ><i class="fa fa-user-o" aria-hidden="true"
          /></span>
        </v-avatar>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="selectSection(item)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
 <script>
import AuthService from '@/services/AuthService.js';

export default {
  props: {
    token: String,
    required: function () {
      return true;
    },
  },
  data: () => ({
    items: [{ title: "" }, { title: "Profile" }, { title: "Logout" }],
  }),

  async mounted() {
    let me = this;
    me.items[0].title = "mail.example@outlook.com";

    if (this.$store.getters.isLoggedIn) {
      try {
        const response = await AuthService.getProfile();
        me.items[0].title = response.Email;
      } catch (error) {
        console.log(error);
      }
    }
  },

  methods: {
    selectSection(item) {
      if (item.title == "Logout") this.logout();
    },

    async logout() {
      try {
        await AuthService.logout();
        this.$store.dispatch('logout');
        this.$router.go();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script> 