<template>
  <section class="container">
    <h1>ADMIN</h1>
    <form v-if="!$store.state.authUser" @submit.prevent="login">
      <!-- Connection -->
      <p v-if="formError" class="error">{{ formError }}</p>
      <p>
        Username:
        <input v-model="formUsername" type="text" name="username">
      </p>
      <p>
        Password:
        <input v-model="formPassword" type="password" name="password">
      </p>
      <button type="submit">Login</button>
    </form>

    <section v-else>
      <!-- Connected -->
      <h1>Hello {{ $store.state.authUser.username }}!</h1>
      <button @click="logout">Logout</button>
      <p>
        <NuxtLink to="./administrator/articles">Modifier des articles</NuxtLink>
        <br>
        <br>
        <NuxtLink to="./administrator/gallery">Modifier la galerie</NuxtLink>
      </p>
    </section>
    <br>
    <NuxtLink to="./">Revenir à la page principale</NuxtLink>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formError: null,
      formUsername: "",
      formPassword: "",
      articles: null
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("login", {
          username: this.formUsername,
          password: this.formPassword
        });
        this.formUsername = "";
        this.formPassword = "";
        this.formError = null;
      } catch (e) {
        this.formError = e.message;
      }
    },
    async logout() {
      try {
        await this.$store.dispatch("logout");
      } catch (e) {
        this.formError = e.message;
      }
    }
  }
};
</script>
