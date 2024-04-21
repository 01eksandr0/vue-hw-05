<template>
  <div>
    <h2>movies page</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      list: [],
    };
  },
  methods: {
    async getList() {
      const movieName = this.$route.query;
      console.log(movieName);
      try {
        const {
          data: { results },
        } = await requests.getMoviesByWord(movieName);
        this.list = results;
      } catch (error) {}
    },
    changeQuery() {
      if (!this.query) return;
      const currentQuery = { ...this.$route.query };
      currentQuery.query = this.query;
      this.$router.push({ path: this.$route.path, query: currentQuery });
    },
  },
  mounted() {},
  watch: {
    query() {
      this.changeQuery();
    },
  },
};
</script>

<style lang="scss" scoped></style>
import { log } from 'console';
