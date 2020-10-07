<template>
  <div class="new-product">
    <Header />
    <section>
      <div class="basic container">
        <h1 class="title">Create Product</h1>
        <form class="form container" @submit="submitForm">
          <b-field label="Name">
            <b-input v-model="name" />
          </b-field>
          <b-field label="Description">
            <b-input
              v-model="details"
              maxlength="500"
              type="textarea"
            ></b-input>
          </b-field>
          <div class="field-body">
            <b-field label="Category">
              <b-select v-model="category" placeholder="Choose...">
                <option value="Keyboard">Keyboard</option>
                <option value="Accessory">Accessory</option>
              </b-select>
            </b-field>
            <b-field label="Price">
              <b-input v-model="price" />
            </b-field>
            <b-field label="Number In Stock">
              <b-input v-model="numberInStock" type="number" min="0" max="99" />
            </b-field>
          </div>
          <div class="button-box">
            <b-button>Submit</b-button>
            <b-button>Cancel</b-button>
          </div>
        </form>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "New-Product",
  components: {
    Header,
    Footer
  },

  data() {
    return {
      name: "",
      details: "",
      category: "",
      price: null,
      numberInStock: null
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      console.log(this.name);
      console.log(this.details);
    }
  }
};
</script>

<style>
.title {
  color: white;
  text-align: center;
}

.basic {
  margin: 10rem auto auto;
}

.form {
  display: flex;
  flex-direction: column;
  width: 66%;
}

.label {
  color: rgb(153, 145, 131);
}

.select,
.select select {
  width: 100%;
}

.button-box {
  display: flex;
  justify-content: center;
}

.button {
  margin: 15px;
}
</style>
