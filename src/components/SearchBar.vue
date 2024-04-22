<template>
  <div class="container">
    <form @submit.prevent>
      <input
        type="text"
        :value="value"
        @input="value = $event.target.value"
      /><button type="button" @click="$emit('update', value)">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "search-bar",
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang="css" scoped>
.container {
  height: 50px;
  width: 100%;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
