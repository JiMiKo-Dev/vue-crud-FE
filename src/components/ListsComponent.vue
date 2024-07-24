<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="text-center">List</h1>
      </div>
      <div class="col-12">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th class="text-center">#</th>
              <th class="text-center">Fullname</th>
              <th class="text-center">Age</th>
              <th class="text-center">Location</th>
              <th class="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="lists in listcustomer" :key="lists._id">
              <td>{{ lists.id }}</td>
              <td>{{ lists.fname }}</td>
              <td>{{ lists.age }}</td>
              <td>{{ lists.location }}</td>
              <td>
                <router-link
                  class="btn btn-outline-warning mx-2"
                  :to="{ name: 'edit', params: { id: lists.id } }"
                >
                  Edit
                </router-link>
                <button
                  type="button"
                  class="btn btn-outline-danger mx-2"
                  @click.prevent="deleteCustomer(lists.id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      listcustomer: [],
    };
  },
  created() {
    this.getCustomers();
  },
  methods: {
    deleteCustomer(id) {
      const apiURL = `http://localhost:3300/api/delete-customers/${id}`;

      if (window.confirm(`Do You want to delete ${id}`)) {
        axios
          .delete(apiURL)
          .then(() => this.getCustomers())
          .catch((error) => {
            console.log(error);
          });
      }
    },

    getCustomers() {
      axios
        .get("http://localhost:3300/api/customers")
        .then((res) => {
          this.listcustomer = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
