<template>
    <div class="carousel">
         <Carousel :slides="slides" :interval="6000" controls indicators>    
         </Carousel>
    </div>
 </template>
 <script>
 import Carousel from './Carousel.vue';
 export default {
     name: "CarouSlider4",
     components:{
         Carousel
     },
     data: () => ({
         slides: [
        require("@/assets/Projet41.jpg"),
        require("@/assets/Projet42.jpg"),
        require("@/assets/Projet43.jpg"),
         ],
     }),
    
 };
 </script>
 
 
 <style>
 </style>