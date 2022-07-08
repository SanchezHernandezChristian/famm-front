<template>
  <div>
    <Navbar />
    <DashboardInstructor />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/views/Navbar.vue";
import DashboardInstructor from "@/components/views/DashboardInstructor.vue";
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";

export default {
  name: "ViewDashboardInstructor",
  components: {
    Navbar,
    DashboardInstructor,
    FooterDashboardAdmin,
  },
};
</script>
