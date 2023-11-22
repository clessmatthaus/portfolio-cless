<template>
  <button class="carousel-control left" @click="$emit('prev')">
    <i class="ri-arrow-left-fill"></i>
  </button>
  <button class="carousel-control right" @click="$emit('next')">
    <i class="ri-arrow-right-fill"></i>
  </button>
</template>

<script>
export default {
  emits: ["prev", "next"],
};
</script>

<style>
.carousel-control {
  background: blue;
  border: 2px solid white;
  box-shadow: 0 0 10px white;
  color: white;
  border: none;
  display: inline-block;
  position: fixed;
  font-size: 27px;
  height: 50px;
  width: 50px;
  top: calc(50% - 25px);
  border-radius: 50px;
  transition: all 0.1s ease;
  cursor: pointer;
}
.carousel-control:hover {
  background: rgb(235, 167, 22);
  color: white;
  box-shadow: 0 0 10px white;
  border: 2px solid white;
  transform: scale(1.1);
}
.left {
  left: 35px;
}
.right {
  right: 35px;
}
@media (max-width: 200px){
  .carousel-control {
    background: blue;
    border: 2px solid white;
    box-shadow: 0 0 10px white;
    color: white;
    border: none;
    display: inline-block;
    position: fixed;
    font-size: 20px;
    height: 30px;
    width: 30px;
    top: calc(50% - 25px);
    border-radius: 50px;
    transition: all 0.1s ease;
    cursor: pointer;
  }
  .carousel-control:hover {
    background: rgb(235, 167, 22);
    color: white;
    box-shadow: 0 0 10px white;
    border: 2px solid white;
    transform: scale(1.1);
  }
  .left {
    left: 20px;
  }
  .right {
    right: 20px;
  }
}
</style>
