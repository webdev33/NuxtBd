<template>
  <section class="admin">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
    >

    <br>
    <p
      class="alert alert-primary alert-success"
      v-show="formSuccess != null"
      role="alert"
    >{{ formSuccess }}</p>
    <p
      class="alert alert-primary alert-danger"
      v-show="formError != null"
      role="alert"
    >{{ formError }}</p>

    <section v-if="!$store.state.authUser">
      <h3>Vous êtes dans la partie administrateur !</h3>
      <br>
      <h4>Connectez-vous :</h4>
      <br>
      <form @submit.prevent="login">
        <!-- Connection -->
        <p v-if="formError" class="error">{{ formError }}</p>
        <article class="input__form">
          <p>Username:</p>
          <input
            class="form-control input__status"
            v-model="formUsername"
            type="text"
            name="username"
          >
        </article>

        <article class="input__form">
          <p>Password:</p>
          <input
            class="form-control input__status"
            v-model="formPassword"
            type="password"
            name="password"
          >
        </article>
        <button class="btn btn-success" type="submit">Se connecter</button>
      </form>
    </section>
    <section v-else>
      <!-- Connected -->
      <h3>Vous êtes bien connecté {{ $store.state.authUser.username }} !</h3>
      <br>
      <p>
        <NuxtLink to="./administrator/articles">Modifier des articles</NuxtLink>
        <br>
      </p>
      <br>
      <p>
        <NuxtLink to="./administrator/gallery">Modifier la galerie</NuxtLink>
      </p>
      <br>
      <button class="btn btn-danger" @click="logout">Logout</button>
    </section>

    <br>
    <NuxtLink to="./">Revenir à la page principale</NuxtLink>
  </section>
</template>

<script>
export default {
  data() {
    return {
      /* Message */
      formError: null,
      formSuccess: null,

      formUsername: "",
      formPassword: "",
      articles: null
    };
  },
  methods: {
    /*
     * Login
     */
    async login() {
      try {
        await this.$store.dispatch("login", {
          username: this.formUsername,
          password: this.formPassword
        });
        this.formUsername = "";
        this.formPassword = "";
        this.formError = null;
        this.formSuccess = `Vous êtes bien connecté`;
        this.removeAlert();
      } catch (e) {
        this.formError = e.message;
      }
    },
    //

    /*
     * Logout
     */
    async logout() {
      try {
        await this.$store.dispatch("logout");
        this.formSuccess = `Vous êtes bien déconnecté`;
        this.removeAlert();
      } catch (e) {
        this.formError = e.message;
      }
    },
    //

    /*
     * Remove alert
     */
    removeAlert() {
      setTimeout(() => {
        this.formSuccess = null;
      }, 3000);
    }
    //
  }
};
</script>
