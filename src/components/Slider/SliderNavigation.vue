<template>
  <nav>
    <splide :options="sliderOptions">
      <splide-slide 
        v-for="item in data" :key="item.title">
        <card-button 
          @click="redirectTo(item.to)"
          :title="item.title"
          :to="item.to"
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
  },
  methods: {
    redirectTo(to) {
      console.log(to)
      this.$router.push({path: to})
    }
  }
};
</script>