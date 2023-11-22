<template>
    <div class="carousel">
         <Carousel :slides="slides" :interval="6000" controls indicators></Carousel>
    </div>
 </template>
 <script>
 import Carousel from './Carousel.vue';
 export default {
     name: "CarouSlider3",
     components:{
         Carousel
     },
     data: () => ({
         slides: [
        require("@/assets/Zokiak1.jpg"),
        require("@/assets/Zodiak2.jpg"),
        require("@/assets/Zodiak3.jpg"),
        require("@/assets/Zodiak4.jpg"),
        require("@/assets/Zodiak5.jpg"),
        require("@/assets/Zodiak6.jpg"),
        require("@/assets/Zodiak7.jpg"),
        require("@/assets/ZodiaK8.jpg"),
         ],
     }),
    
 };
 </script>
 
 
 <style>
 </style>