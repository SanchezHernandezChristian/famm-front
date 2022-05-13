<template>
  <div class="homeprincipal">
    <v-app>
      <Navbar />
      <Body />
      <SectionArea />
      <SectionBuy />
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Body from "./views/Body.vue";
import Navbar from "./views/Navbar.vue";
import Footer from "./views/Footer.vue";
import SectionBuy from "./views/SectionBuy.vue";
import SectionArea from "./views/SectionArea.vue";

export default {
  name: "Home",
  components: {
    Body,
    Navbar,
    SectionArea,
    SectionBuy,
    Footer,
  },
  data: () => ({ isMobile: false }),

    beforeDestroy () {
      if (typeof window === 'undefined') return

      window.removeEventListener('resize', this.onResize, { passive: true })
    },

    mounted () {
      this.onResize()

      window.addEventListener('resize', this.onResize, { passive: true })
    },

    methods: {
      onResize () {
        this.isMobile = window.innerWidth < 600
      },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
