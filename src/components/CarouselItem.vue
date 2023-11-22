<!-- eslint-disable vue/require-v-for-key -->
<template>
  <Transition :name="transitionEffect">
    <div
      class="carousel-item"
      v-show="currentSlide === index"
      @mouseenter="$emit('mouseenter')"
      @mouseout="$emit('mouseout')">
      <img :src="slide" />
    </div>
  </Transition>
</template>

<script>
export default {
  emits: ["mouseenter", "mouseout"],
  props: ["slide", "currentSlide", "index", "direction"],
  computed: {
    transitionEffect() {
      return this.direction === "right" ? "slide-out" : "slide-in";
    },
  },
};
</script>

<style>
.carousel-item {
  display: flex;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.carousel-item img {
  height: 580px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid rgb(204, 203, 203);
}
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.slide-out-enter-from {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transform: translateX(-100%);
}

@media (max-width: 780px) {
  .carousel-item {
    width: 100%;
  }
  .carousel-item img {
    width: 770px;
  }
}
@media (max-width: 680px) {
  .carousel-item {
    width: 100%;
  }
  .carousel-item img {
    width: 670px;
  }
}
@media (max-width: 580px) {

  .carousel-item {
    width: 100%;
   
  }
  .carousel-item img {
    width: 570px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid rgb(204, 203, 203);
}
}
@media (max-width: 480px) {

  .carousel-item {
    width: 100%;
   
  }

  .carousel-item img {
    width:470px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid rgb(204, 203, 203);
}
}

@media (max-width: 400px) {

  .carousel-item {
    width: 100%;
   
  }

  .carousel-item img {
  width: 390px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid rgb(204, 203, 203);
}
}
@media (max-width: 380px) {

  .carousel-item {
    width: 100%;
   
  }

  .carousel-item img {
  width: 370px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid rgb(204, 203, 203);
}
}
@media (max-width: 360px) {

.carousel-item{
  width: 100%;
 
}

.carousel-item img {
width: 350px;
justify-content: center;
align-items: center;
border-radius: 5px;
border: 2px solid rgb(204, 203, 203);
}
}
@media (max-width: 320px) {
  .carousel-item {
    width: 100%;
   
  }

  .carousel-item img {
  width: 310px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid rgb(204, 203, 203);
}
}
@media (max-width: 230px) {
  .carousel-item {
    width: 100%;
   
  }

  .carousel-item img {
  width: 220px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid rgb(204, 203, 203);
}
}
@media (max-width: 200px) {
  .carousel-item img {
    width: 100%;
   
  }

  .carousel-item img {
  width: 195px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid rgb(204, 203, 203);
}
}
</style>
