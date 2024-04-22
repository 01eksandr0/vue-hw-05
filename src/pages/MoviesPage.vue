<template>
  <div>
    <search-bar @update="(newQuery) => (query = newQuery)" />
    <ul class="list" v-if="list.length">
      <li v-for="item in list" :key="item.id">
        <my-movie :item="item"></my-movie>
      </li>
    </ul>
  </div>
</template>

<script>
import requests from "../js/api";
import MyMovie from "../components/MyMovie.vue";
import SearchBar from "../components/SearchBar.vue";
export default {
  components: { MyMovie, SearchBar },
  data() {
    return {
      query: "",
      list: [],
    };
  },
  methods: {
    async getList() {
      const movieName = this.query || (await this.$route.query.query) || null;
      if (movieName === null) return;
      try {
        const {
          data: { results },
        } = await requests.getMoviesByWord(movieName);
        this.list = [...results];
      } catch (error) {
        console.log(error);
      }
    },
    changeQuery() {
      if (!this.query) return;
      const currentQuery = { ...this.$route.query };
      currentQuery.query = this.query;
      this.$router.push({ path: this.$route.path, query: currentQuery });
    },
  },
  mounted() {
    this.getList();
  },
  watch: {
    query() {
      this.changeQuery();
      this.getList();
    },
  },
};
</script>

<style lang="css" scoped>
.list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
