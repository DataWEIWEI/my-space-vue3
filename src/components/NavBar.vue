<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'Home' }"
        >WEI's SPACE</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: 'Home' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'UserListView' }"
              >Friend List</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav" v-if="!$store.state.user.is_login">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'LoginView' }"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'RegisterView' }"
              >Regiser</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav" v-else>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'UserProfileView', params: { userId: $store.state.user.id } }"
              >{{ $store.state.user.username }}</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" style="cursor: pointer" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from 'vuex';

export default {
  name: "NavBar",
  setup() {
    const store = useStore();
    const logout = () => {
      store.commit('logout')
    }

    return {
      logout,
    }
  }
};
</script>

<style></style>
