<template>
  <router-link
    class="link"
    :to="{ name: 'more-info', params: { id: item.id } }"
  >
    <img
      height="170"
      width="170"
      :src="'https://image.tmdb.org/t/p/w500' + item.backdrop_path"
      alt=""
    />
    <span>{{ item.title }}</span></router-link
  >
</template>

<script>
export default {
  name: "my-movie",
  props: {
    item: Object,
  },
};
</script>

<style lang="css" scoped>
.link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 170px;
}
</style>
