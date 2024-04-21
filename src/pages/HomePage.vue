<template>
  <div>
    <ul class="list">
      <li v-for="item in list" :key="item.id">
        <my-movie :item="item"></my-movie>
      </li>
    </ul>
  </div>
</template>

<script>
import requests from "../js/api";
import MyMovie from "../components/MyMovie.vue";
export default {
  components: { MyMovie },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async getMovies() {
      try {
        const {
          data: { results },
        } = await requests.getTrendMovies();
        this.list = results;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  mounted() {
    this.getMovies();
  },
};
</script>
<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.list > li {
  list-style: none;
}
</style>
