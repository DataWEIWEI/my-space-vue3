<template>
  <ContentBase>
    <div class="row justify-content-md-center">
      <div class="col-3">
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="userename" class="form-label">Username</label>
            <input
              v-model="username"
              type="text"
              class="form-control"
              id="username"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="password"
            />
          </div>
          <div class="error-message">{{ error_message }}</div>
          <button type="login" class="btn btn-primary">login</button>
        </form>
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from "@/components/ContentBase.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import router from "@/router/index";

export default {
  name: "LoginView",
  components: {
    ContentBase,
  },
  setup() {
    let username = ref(""),
      password = ref(""),
      error_message = ref("");

    const store = useStore();

    const login = () => {
      error_message.value = '';
      
      store.dispatch('login', {
        username: username.value,
        password: password.value,
        success() {
          router.push({ name: 'UserListView' })
        },
        error() {
          error_message.value = 'username or password error'
        }
      })
    };

    return {
      username,
      password,
      error_message,
      login,
    };
  },
};
</script>

<style scoped>
button {
  width: 100%;
}

.error-message {
  color: red;
  text-align: center;
  margin-bottom: 10px;
}
</style>
