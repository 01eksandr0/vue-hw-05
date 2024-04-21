<template>
  <div>
    <ul>
      <li v-for="i in list" :key="i.id">
        <img
          :src="'https://image.tmdb.org/t/p/w500' + i.profile_path"
          alt=""
          height="120"
          width="100"
        />
        <p>{{ i.name }}</p>
        <p>Character: {{ i.character }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import requests from "../js/api";
export default {
  name: "movie-cast",
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async getCast() {
      try {
        const {
          params: { id },
        } = this.$route;
        const {
          data: { cast },
        } = await requests.getCast(id);
        this.list = cast;
      } catch (error) {}
    },
  },
  mounted() {
    this.getCast();
  },
};
</script>

<style lang="css" scoped></style>
