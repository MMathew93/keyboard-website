<template>
  <div class="header" section="header">
    <b-navbar class="has-background-black spaced">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="@/assets/HHKB-with-RF-logo-V3.png"
            alt="Happy Hacking Keyboard | RealForce"
          />
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item href="#">
          Shop
        </b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item tag="router-link" :to="{ path: '/about' }">
            About Us
          </b-navbar-item>
          <b-navbar-item href="https://github.com/MMathew93/keyboard-website">
            Source Code
          </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item href="#">
          Register
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  height: 60px;
}

.navbar {
  padding: 0 25px !important;
}

.navbar-item img {
  max-height: 4rem;
}
</style>
