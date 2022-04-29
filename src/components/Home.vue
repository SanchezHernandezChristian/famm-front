<template>
  <div class="home">
    <Navbar />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Body from "./views/Body.vue";
import Navbar from "./views/Navbar.vue";
import Footer from "./views/Footer.vue";

export default {
  name: "Home",
  components: {
    Body,
    Navbar,
    Footer,
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
