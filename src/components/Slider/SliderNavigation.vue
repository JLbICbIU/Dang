<template>
  <nav>
    <splide :options="sliderOptions">
      <splide-slide v-for="item in data" :key="item.title">
        <card-button 
          :title="item.title"
          :to="item.to"
          :backgroundColor="item.backgroundColor"
        />
      </splide-slide>
    </splide>
  </nav>
</template>



<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import CardButton from "../Card/CardButton"
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

export default {
  components: {
    Splide,
    SplideSlide,
    CardButton
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      sliderOptions: {
        type: 'loop',
        arrows: false,
        lazyload: 'nearby'
      }
    }
  }
};
</script>