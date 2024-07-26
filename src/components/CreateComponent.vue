<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="text-center py-4">Create</h1>

        <form @submit.prevent="submitForm">
          <div class="form-group py-2">
            <label for="fullname">Fullname</label>
            <input
              type="text"
              class="form-control"
              v-model="customers.fname"
              required
            />
          </div>
          <div class="form-group py-2">
            <label for="Age">Age</label>
            <input
              type="number"
              class="form-control"
              v-model="customers.age"
              required
            />
          </div>
          <div class="form-group py-2">
            <label for="location">Location</label>
            <input
              type="text"
              class="form-control"
              v-model="customers.location"
              required
            />
          </div>

          <div class="form-group text-center py-4">
            <button type="submit" class="btn btn-outline-success w-100">
              Create
            </button>
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
      customers: {
        fname: "",
        age: null,
        location: "",
      },
    };
  },
  methods: {
    submitForm() {
      let apiURL = "http://localhost:3301/api/create-users";

      axios
        .post(apiURL, this.customers)
        .then(() => {
          this.$router.push("/");
          this.customers = {
            fname: "",
            age: null,
            location: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
