<template>
  <div class="type-s">
    <Header />
    <section>
      <div class="columns">
        <div class="column">
          <div class="content container">
            <div class="product-image">
              <img
                src="@/assets/products/keyboards/type-s/297301rev.png"
                width="250"
                height="250"
              />
            </div>
            <div class="info">
              <ul>
                <li>Product ID here</li>
                <li>Color: Charcoal</li>
                <li>Key Caps: Blank/Non-Printed</li>
              </ul>
            </div>
            <div class="buttons container">
              <div class="button-box">
                <b-button type="is-primary"> Info </b-button>
              </div>
              <div class="button-box">
                <b-button type="is-danger"> Add to cart </b-button>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="content container">
            <div class="product-image">
              <img
                src="@/assets/products/keyboards/type-s/297101rev.png"
                width="250"
                height="250"
              />
            </div>
            <div class="info">
              <ul>
                <li>Product ID here</li>
                <li>Color: White</li>
                <li>Key Caps: Blank/Non-Printed</li>
              </ul>
            </div>
            <div class="buttons container">
              <div class="button-box">
                <b-button type="is-primary"> Info </b-button>
              </div>
              <div class="button-box">
                <b-button type="is-danger"> Add to cart </b-button>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="content container">
            <div class="product-image">
              <img
                src="@/assets/products/keyboards/type-s/297201rev.png"
                width="250"
                height="250"
              />
            </div>
            <div class="info">
              <ul>
                <li>Product ID here</li>
                <li>Color: Charcoal</li>
                <li>Key Caps: Stamped</li>
              </ul>
            </div>
            <div class="buttons container">
              <div class="button-box">
                <b-button type="is-primary"> Info </b-button>
              </div>
              <div class="button-box">
                <b-button type="is-danger"> Add to cart </b-button>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="content container">
            <div class="product-image">
              <img
                src="@/assets/products/keyboards/type-s/297001rev.png"
                width="250"
                height="250"
              />
            </div>
            <div class="info">
              <ul>
                <li>Product ID here</li>
                <li>Color: White</li>
                <li>Key Caps: Stamped</li>
              </ul>
            </div>
            <div class="buttons container">
              <div class="button-box">
                <b-button type="is-primary"> Info </b-button>
              </div>
              <div class="button-box">
                <b-button type="is-danger"> Add to cart </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Type-S",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
section {
  margin: 2%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info {
  color: white;
  width: 241px;
}

.button-box {
  margin: 15px;
}
</style>
