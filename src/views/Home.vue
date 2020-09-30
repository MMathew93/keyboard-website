<template>
  <div class="home">
    <Header />
    <section class="hero land">
      <div class="hero-body"></div>
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
.land {
  width: 100vw;
  height: 81vh;
  display: flex;
  justify-content: center;
}

.hero-body {
  background-image: url("../assets/HHKB_Header_Landing.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.landing {
  background-repeat: no-repeat;
  background-image: url(../assets/HHKB_Header_Landing.jpg);
  background-size: cover;
  background-position: center center;
}
</style>
