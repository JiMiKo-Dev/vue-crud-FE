<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="text-center">Edit</h1>
      </div>
      <div class="col-12">
        <form @submit.prevent="submitForm">
          <div class="form-group py-2">
            <label for="fullname">Fullname</label>
            <input
              type="text"
              class="form-control"
              v-model="customerInfo.fname"
              required
            />
          </div>
          <div class="form-group py-2">
            <label for="Age">Age</label>
            <input
              type="number"
              class="form-control"
              v-model="customerInfo.age"
              required
            />
          </div>
          <div class="form-group py-2">
            <label for="location">Location</label>
            <input
              type="text"
              class="form-control"
              v-model="customerInfo.location"
              required
            />
          </div>

          <div class="form-group text-center py-4">
            <button type="submit" class="btn btn-outline-success w-100">
              Save
            </button>
            <router-link
              type="submit"
              class="btn btn-outline-primary w-100 mt-2"
              to="/"
            >
              Cancel
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      customerInfo: {},
    };
  },
  created() {
    this.getCustomerInfo();
  },
  methods: {
    getCustomerInfo() {
      const apiURL = `http://localhost:3301/api/customers/${this.$route.params.id}`;

      axios
        .get(apiURL)
        .then((res) => {
          this.customerInfo = res.data[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submitForm() {
      console.log(+this.$route.params.id);
      const apiURL = `http://localhost:3301/api/update-customers/${+this.$route
        .params.id}`;
        console.log(apiURL)
      axios
        .put(apiURL, this.customerInfo)
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
