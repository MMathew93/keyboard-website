<template>
  <div class="register">
    <Header />
    <section>
      <div class="basic container">
        <h1 class="title">Thank you!</h1>
        <h2 class="subtitle">
          Fill out the form and receive a personalized thank you email just for
          taking the time to check out my silly project!
        </h2>
        <form class="form container" @submit="submitForm">
          <div class="field-body">
            <b-field label="First Name">
              <b-input v-model="firstname" />
            </b-field>
            <b-field label="Last Name">
              <b-input v-model="lastname" />
            </b-field>
          </div>
          <b-field label="Street Address">
            <b-input v-model="street" />
          </b-field>
          <div class="field-body">
            <b-field label="City">
              <b-input v-model="city" />
            </b-field>
            <b-field label="State">
              <b-select v-model="state" placeholder="Choose state">
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </b-select>
            </b-field>
          </div>
          <div class="field-body">
            <b-field label="Zip Code">
              <b-input v-model="zip" type="type" pattern="[0-9]{5}" />
            </b-field>
            <b-field label="Country">
              <b-select v-model="country" value="United States">
                <option value="United States">United States</option>
              </b-select>
            </b-field>
          </div>
          <b-field label="Email">
            <b-input v-model="email" type="email" maxlength="30"></b-input>
          </b-field>
          <b-button native-type="submit" name="submit" value="Submit"
            >Submit</b-button
          >
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
  name: "Register",
  components: {
    Header,
    Footer
  },

  data() {
    return {
      firstname: "",
      lastname: "",
      street: "",
      city: "",
      zip: "",
      state: "",
      country: "",
      email: ""
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      console.log(this.firstname);
      console.log(this.email);
    }
  }
};
</script>

<style>
.title,
.subtitle {
  color: white;
  text-align: center;
}

.basic {
  margin: 10rem auto auto;
}

.form {
  display: flex;
  flex-direction: column;
}

.label {
  color: rgb(153, 145, 131);
}

.select,
.select select {
  width: 100%;
}

.button {
  margin: 15px auto;
  width: auto;
}
</style>
