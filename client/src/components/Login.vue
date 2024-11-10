<template>
  <div class="login">
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username</label>
        <input
          v-model="username"
          type="text"
          id="username"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" :disabled="loading">
        {{ loading ? "Logging in..." : "Login" }}
      </button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "UserLogin", // Updated to a multi-word name
  setup() {
    const router = useRouter();
    const username = ref("");
    const password = ref("");
    const errorMessage = ref<string | null>(null);
    const loading = ref(false);

    const handleSubmit = async () => {
      loading.value = true;
      errorMessage.value = null;

      try {
        const response = await axios.post("http://localhost:3000/login", {
          username: username.value,
          password: password.value,
        });

        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          router.push("/dashboard");
        }
      } catch (error: any) {
        errorMessage.value =
          error.response?.data?.message || "An error occurred during login.";
      } finally {
        loading.value = false;
      }
    };

    return {
      username,
      password,
      errorMessage,
      loading,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
