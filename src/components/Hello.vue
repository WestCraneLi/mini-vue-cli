<template>
  <div class="container">
    <h1>Hello Page</h1>
    <button @click="num++">点我</button>{{ num }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
};
</script>

<style scoped>
.container {
  width:100%;
  height:100%;
  background-image: url("@/assests/images/img.webp");
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
