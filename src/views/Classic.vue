<template>
  <div class="classic">
      <Header />
      <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Classic",
  components: {
    Header,
    Footer
  }
};
</script>

<style></style>