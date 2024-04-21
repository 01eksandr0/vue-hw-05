<template>
  <div class="header">
    <ul class="list">
      <li>
        <router-link class="link" :to="{ name: 'home-page', params: {} }"
          >Home</router-link
        >
      </li>
      <li>
        <router-link class="link" :to="{ name: 'movies-page', params: {} }"
          >Movies</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "my-header",
};
</script>

<style lang="css" scoped>
.header {
  height: 70px;
  width: 100%;
  background-color: blue;
  border-bottom: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
.list > li {
  list-style: none;
}
.link {
  text-decoration: none;
  color: #fff;
  font-size: 24px;
}
</style>
