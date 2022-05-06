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
import axios from "axios";

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

  mounted() {
    let me = this;
    me.items[0].title = "mail.example@outlook.com";

    axios({
      method: "get",
      url: "http://famm-back.test/api/user-profile",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
        Accept: "application/json",
      },
    })
      .then(function (response) {
        me.items[0].title = response.data.data.email;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  methods: {
    selectSection(item) {
      if (item.title == "Logout") this.logout();
    },

    logout() {
      let me = this;

      axios({
        method: "get",
        url: "http://famm-back.test/api/logout",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      })
        .then(function (response) {
          me.$emit("user_action", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script> 