import axios from "axios";

export const state = () => ({
  authUser: null,
  articles: null,
  article: null
});

export const mutations = {
  SET_USER: function(state, user) {
    state.authUser = user;
  }
};

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit("SET_USER", req.session.authUser);
    }
  },

  /*
   * Login
   */
  async login({ commit }, { username, password }) {
    try {
      const { data } = await axios.post("/api/login", { username, password });
      commit("SET_USER", data);

      return username;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error("Bad credentials");
      }
      throw error;
    }
  },
  //

  /*
   * Logout
   */
  async logout({ commit }) {
    await axios.post("/api/logout");
    commit("SET_USER", null);
  },
  //

  /*
   * Articles
   */
  async articles({ commit }) {
    const { data } = await axios.post("/api/articles");
    return { data };
  },
  //

  /*
   * Article
   */
  async article({ commit }, selectId) {
    const { data } = await axios.post("/api/article", selectId);
    return { data };
  },
  //

  /*
   * Edit article
   */
  async editArticle(
    { commit },
    {
      _id,
      station,
      status,
      content,
      linesStation,
      linkBienvenue,
      explicationNom,
      events,
      audios,
      pictures,
      nextStep
    }
  ) {
    await axios.post("/api/editArticle", {
      _id,
      station,
      status,
      linesStation,
      linkBienvenue,
      explicationNom,
      events,
      audios,
      pictures,
      nextStep
    });
  },
  //

  /*
   * Remove article
   */
  async removeArticle({ commit }, selectId) {
    await axios.post("/api/removeArticle", selectId);
  },
  //

  /*
   * Create article
   */
  async createArticle(
    { commit },
    {
      station,
      status,
      content,
      linesStation,
      linkBienvenue,
      explicationNom,
      events,
      audios,
      pictures,
      nextStep
    }
  ) {
    const { msg } = await axios.post("/api/createArticle", {
      station,
      status,
      content,
      linesStation,
      linkBienvenue,
      explicationNom,
      events,
      audios,
      pictures,
      nextStep
    });
    return { msg };
  },
  //

  /*
   * Gallery
   */
  async gallery({ commit }) {
    const { data } = await axios.post("/api/gallery");
    return { data };
  },
  //

  /*
   * Select one article in the gallery
   */
  async galleryArticle({ commit }, selectId) {
    const { data } = await axios.post("/api/galleryArticle", selectId);
    return { data };
  },
  //

  /*
   * Edit article for the gallery
   */
  async editArticleGallery(
    { commit },
    {
      _id,
      link,
      legend,
      categorie,
      date
    }
  ) {
    await axios.post("/api/editArticleGallery", {
      _id,
      link,
      legend,
      categorie,
      date
    });
  },
  //

  
  /*
   * Remove article in the gallery
   */
  async removeArticleGallery({ commit }, selectId) {
    await axios.post("/api/removeArticleGallery", selectId);
  },
  //
};
