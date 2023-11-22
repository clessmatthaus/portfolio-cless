<template>
  <div class="carousel-indicators">
    <button
      class="carousel-indicators-item"
      :class="{ active: currentIndex === index }"
      v-for="(item, index) in swips"
      :key="index"
      @click="$emit('switch', index)"></button>
  </div>
</template>
<script>
export default {
  emits: ["switch"],
  props: ["swips", "currentIndex"],
};
</script>
<style scoped>
.carousel-indicators {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  z-index: z;
  bottom: 3em;
}
.carousel-indicators-item {
  width: 20px;
  height: 20px;
  border: none;
  margin: 0.2em;
  cursor: pointer;
  opacity: 0.5;
  border: 1px solid blue;
  border-radius: 50%;
  background: blue;
}
.active {
  opacity: 1;
  box-shadow: 0 0 10px white;
  border: 1px solid white;
}
</style>
