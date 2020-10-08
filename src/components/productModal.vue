<template>
  <div class="new-product">
    <Header />
    <section>
      <div class="basic container">
        <h1 class="title">Create Product</h1>
        <form class="form container" @submit="addProduct">
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
                <option
                  v-for="category in categoryData"
                  :key="category._id"
                  :value="category.name"
                >
                  {{ category.name }}
                </option>
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
            <b-button native-type="submit" name="submit" value="Submit"
              >Submit</b-button
            >
            <b-button @click="cancelSubmission">Cancel</b-button>
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
import axios from "axios";

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
      numberInStock: null,
      categoryData: [],
      hidden: true
    };
  },
  methods: {
    addProduct() {
      axios
        .post("http://localhost:3000/products", {
          name: this.name,
          description: this.details,
          price: this.price,
          numberInStock: this.numberInStock
        })
        .then(response => {
          console.log(response);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    cancelSubmission() {
      this.name = "";
      this.details = "";
      this.category = "";
      this.price = null;
      this.numberInStock = null;
      this.hidden = !!true;
    }
  },
  created() {
    axios
      .get("http://localhost:3000/categories/")
      .then(response => {
        this.categoryData = response.data;
      })
      .catch(error => {
        console.log(error);
      });
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
