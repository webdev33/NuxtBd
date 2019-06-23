<template>
  <section class="index">
    <h1>Article</h1>

    <!-- Alert -->

    <p class="alert alert-primary alert-danger" v-show="formError != null">{{ formError }}</p>

    <p @click="selectArticle()">AA</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: null,
      currentId: 2,

      /* Error */
      formError: null,

      /* Article select informations */
      articleSelected: {
        _id: null,
        station: null,
        status: null,
        linesStation: null,
        linkBienvenue: null,
        explicationNom: null,
        events: null,
        pictures: null,
        audios: null,
        nextStep: null
      }
    };
  },

  methods: {
    /*
     * Load the select article
     */
    async selectArticle(select) {
      /* this.currentId = select; */
      try {
        console.log(this.currentId);
        let article = await this.$store.dispatch("article", {
          _id: this.currentId
        });

        /* Give data to articleSelected */
        this.articleSelected._id = article.data.data[0]._id;
        this.articleSelected.station = article.data.data[0].station;
        this.articleSelected.status = article.data.data[0].status;
        this.articleSelected.linesStation = JSON.parse(
          article.data.data[0].linesStation
        );
        this.articleSelected.linkBienvenue = article.data.data[0].linkBienvenue;
        this.articleSelected.explicationNom = JSON.parse(
          article.data.data[0].explicationNom
        );
        this.articleSelected.events = JSON.parse(article.data.data[0].events);
        this.articleSelected.audios = JSON.parse(article.data.data[0].audios);
        this.articleSelected.pictures = JSON.parse(
          article.data.data[0].pictures
        );
        this.articleSelected.nextStep = JSON.parse(
          article.data.data[0].nextStep
        );

        console.log(this.articleSelected)
      } catch (e) {
        this.formError = e.message;
      }
    }
    //
  },

  mounted: function mounted() {
    /*
     * Load articles
     */
    /* this.selectArticle(); */
    //
  }
};
</script>
