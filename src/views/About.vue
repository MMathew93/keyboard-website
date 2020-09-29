<template>
  <div class="about">
    <Header />
    <section class="content section">
      <div class="container details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          accumsan scelerisque est et condimentum. Sed ultricies, massa at
          volutpat tincidunt, lectus risus accumsan diam, sed gravida leo quam
          dolor. Morbi ullamcorper tempor magna, non condimentum arcu lobortis
          a. Nunc iaculis lorem eu tortor molestie porta sit amet in dui. Nullam
          consectetur orci id tellus consectetur facilisis sit amet at lacus.
          Vivamus vestibulum ex in tempor iaculis. Suspendisse potenti. Nulla
          blandit sit amet risus sed lacinia. Phasellus ultricies aliquet felis
          ut euismod. Aenean dignissim mollis justo, in vulputate lorem iaculis
          non.
        </p>
        <p>
          Curabitur hendrerit auctor mauris cursus consectetur. Donec in viverra
          magna, ac rutrum massa. Morbi efficitur pharetra eleifend. Aliquam vel
          volutpat risus. Aliquam porttitor sodales mauris, non volutpat tortor
          ultrices sed. Vivamus bibendum tempor enim quis facilisis. Phasellus
          vulputate risus id pharetra rutrum. Phasellus ultricies tortor in
          massa elementum, ut vestibulum purus imperdiet. Nullam ullamcorper
          dapibus scelerisque. Nulla placerat augue sed dui volutpat accumsan.
          Integer sollicitudin nulla at nunc pharetra tincidunt.
        </p>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "About",
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.content {
  background-repeat: no-repeat;
  background-image: url(../assets/HHKB_Header_Landing_5.jpg);
  background-size: cover;
  background-position: center center;
  height: 80vh;
  margin: 0;
}

.details {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  padding: 4rem;
  color: white;
  text-align: center;
  font-size: 18px;
}
</style>
