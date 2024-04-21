<template>
  <div>
    <button type="button" @click="$router.back()">Go back</button>
    <div v-if="info.title">
      <img
        :src="'https://image.tmdb.org/t/p/w500' + info.backdrop_path"
        alt=""
      />

      <h1>{{ info.original_title }}</h1>
      <p>User Score: {{ parseInt(info.vote_average * 10) }}%</p>
      <h2>Overview</h2>
      <p>{{ info.overview }}</p>
      <h2>Genres</h2>
      <p>{{ info.genres.map((i) => i.name).join(", ") }}</p>
    </div>
    <router-link
      :to="{ name: 'movie-cast', params: { id: info.id }, replace: true }"
      >Cast</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
import requests from "../js/api";
export default {
  data() {
    return { info: {} };
  },
  methods: {
    async getInfo() {
      try {
        const {
          params: { id },
        } = this.$route;
        const { data } = await requests.getDetailsMovie(id);
        this.info = data;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  mounted() {
    this.getInfo();
  },
};
</script>

<style lang="css" scoped></style>
