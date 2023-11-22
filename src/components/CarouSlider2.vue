<template>
    <div class="carousel">
         <Carousel :slides="slides" :interval="6000" controls indicators></Carousel>
    </div>
 </template>
 <script>
 import Carousel from './Carousel.vue';
 export default {
     name: "CarouSlider2",
     components:{
         Carousel
     },
     data: () => ({
         slides: [
        require("@/assets/Projet21.jpg"),
        require("@/assets/Projet23.jpg"),
        require("@/assets/Projet22.jpg"),
         ],
     }),
    
 };
 </script>
 
 
 <style>
 
 
 </style>