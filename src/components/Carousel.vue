<!-- eslint-disable vue/valid-v-for -->
<template>
    <div class="carousel">
        <router-link to="./PortfolioView">
            <a><i class="ri-close-circle-fill" id="close-btns"></i></a>
        </router-link>
        <div class="carousel-inner">                                                 
           <CarouselItem v-for="(slide, index) in slides"
            :slide="slide" 
            :key="`item-${index}`"
            :current-slide="currentSlide"
            :index="index"
            :direction="direction"
            @mouseenter="stopSlideTimer"
            @mouseout="startSlideTimer"
            ></CarouselItem>
            <CarouselControls v-if="controls"
             @prev="prev" @next="next">
            </CarouselControls>
            <CarouselIndicators 
             v-if="indicators"
             :swips="slides.length" 
             :currentIndex="currentSlide"
              @switch="switchSlide($event)">
            </CarouselIndicators>            
        </div> 
    </div>
</template>
<script>
import CarouselItem from './CarouselItem.vue';
import CarouselControls from './CarouselControls.vue';
import CarouselIndicators from './CarouselIndicators.vue';

export default{
    props: {
        slides: {
            type: Array,
            required: true
        },
        controls: {
            type: Boolean,
            default: false
        },
        indicators: {
            type: Boolean,
            default: false
        },
        interval: {
            type: Number,
            default: 6000
        }
    },
    name:'CarouselView',
    components: {
        CarouselItem, 
        CarouselControls,
        CarouselIndicators,
    },
    data:() => ({
        currentSlide: 0,
        slideInterval: null,
        direction: "right"
    }),
    methods: {
        setCurrentSlide (index) {
            this.currentSlide = index;
        }, 
        //previous button 
        prev(step = -1){
          const index = this.currentSlide > 0 ? this.currentSlide + step : this.slides.length -1;
          this.setCurrentSlide(index);  
          this.direction = "left";
          this.startSlideTimer();
        },
        //next button 
        _next(step = 1){
          const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + step : 0;
          this.setCurrentSlide(index);  
          this.direction = "right";
        },
        next(step = 1){
          this. _next(step);
          this.startSlideTimer();
        },

        startSlideTimer(){
            this.stopSlideTimer();
            this.slideInterval = setInterval(() => {
            this._next();
            }, this.interval);
        }, 
        stopSlideTimer(){
            clearInterval(this.slideInterval);
        },
        switchSlide(index){
            const step = index - this.currentSlide;
            if(step > 0){
                this.next(step);
            }else{
                this.prev(step);
            }
        }
    },
    mounted () {
        this.startSlideTimer();
    },
    beforeUnmount () {
        this.stopSlideTimer();
    },
};

</script>
<style scoped>
.carousel{
    width: 100%;
    height: 100vh;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    position: absolute;
    overflow: hidden;
    margin-top: 0px;
    padding-top: 10px;
    padding-bottom: 15px;
    z-index: 50001;  
}
.carousel-inner{
    position: relative;
    width: 100%;
    height: 630px;
    overflow:hidden;
}
#close-btns{
    margin-top:20px;
    font-size: 25px;
    border: none;
    color: rgb(8, 1, 57);
    border-radius: 100%;
    background-color: white;
}
@media (max-width: 1290px){
    .carousel-inner{
        position: relative;
        width: 1100px;
        height: 630px;
        overflow:hidden;
    }
}
@media (max-width: 1190px){
    .carousel-inner{
        position: relative;
        width: 900px;
        height: 630px;
        overflow:hidden;
    }
}
@media (max-width: 1080px){
    .carousel-inner{
        position: relative;
        width: 800px;
        height: 630px;
        overflow:hidden;
    }
}
@media (max-width: 880px){
    .carousel-inner{
        position: relative;
        width: 700px;
        height: 630px;
        overflow:hidden;
    }
}
@media (max-width: 780px){
    .carousel-inner{
        position: relative;
        width: 600px;
        height: 630px;
        overflow:hidden;
    }
}
@media (max-width: 680px){
    .carousel-inner{
        position: relative;
        width: 480px;
        height: 630px;
        overflow:hidden;
    } 
}
</style>