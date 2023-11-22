<template>
   <div class="carousel">
        <Carousel :slides="slides" :interval="6000" controls indicators></Carousel>          
   </div>
   
</template>
<script>
import Carousel from './Carousel.vue';
export default {
    name: "CarouSlider1",
    components:{
        Carousel
    },
    data: () => ({
        slides: [
       require("@/assets/pc-cleaner.png"),
       require("@/assets/Projet11.jpg"),
       require("@/assets/Projet12.jpg"),
       require("@/assets/Projet13.jpg"),
       
       
        ],
    }),
   
};
</script>


<style>


</style>