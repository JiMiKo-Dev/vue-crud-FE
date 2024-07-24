<template>
  <div class="container-lg">
    <nav
      class="navbar bg-dark border-bottom border-body justyfy-content-between flex-nowrap flex-row"
      data-bs-theme="dark"
    >
      <div class="container-lg">
        <router-link class="navbar-brand float-left" to="/">CRUD FE</router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item p-2">
            <router-link class="nav-link" to="/">View Customers</router-link>
          </li>
          <li class="nav-item p-2">
            <router-link class="nav-link" to="/create"
              >Create Customers</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <!-- router view -->
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
#app {
  height: 100vh;
  width: 100% !important;
}
</style>
