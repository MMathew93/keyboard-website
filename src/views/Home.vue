<template>
  <div class="home">
    <Header />
    <section class="hero">
      <div class="hero-body landing"></div>
    </section>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  min-height: 80vh;
}

.hero-body {
  padding: 0;
  min-width: 100vw;
}

.landing {
  background-repeat: no-repeat;
  background-image: url(../assets/HHKB_Header_Landing.jpg);
  background-size: cover;
  background-position: center center;
}
</style>
