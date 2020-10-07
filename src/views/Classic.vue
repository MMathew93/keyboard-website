<template>
  <div class="accessories">
    <Header />
    <section>
      <div class="columns">
        <div class="column" v-for="product in products" :key="product._id">
          <p>{{ product.name }}</p>
          <p>{{ product.description }}</p>
          <p>{{ product.price }}</p>
          <p>{{ product.category }}</p>
          <p>{{ product.numberInStock }}</p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "Accessories",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then(response => {
        //this.products = response.data;
        this.products = response.data.filter(obj => obj.name === "Pro Classic");
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style></style>
