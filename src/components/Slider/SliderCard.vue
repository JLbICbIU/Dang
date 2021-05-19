<template>
    <splide :options="sliderOptions" class="splide">
      <splide-slide>
          <div>
            <img :src="'./img/'+ data.src +'.png'">
          </div>
      </splide-slide>
      <splide-slide v-for="(descr, index) in data.descriptions" :key="index">
          <div class="text-card">{{descr}}</div>
      </splide-slide>
    </splide>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

export default {
  components: {
    Splide,
    SplideSlide,
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      sliderOptions: {
        type: 'loop',
        arrows: false,
        lazyload: 'nearby',
        keyboard: false
      }
    }
  }
};
</script>

<style scoped>
.splide {
    margin: 15px 0;
}

.text-card {
    background-color: #100332;

    display: block;

    width: 250px;
    height: 350px;
    margin: auto;

    padding: 5px 10px;

    background-repeat: no-repeat;
    background-size: 100% 100%;

    border-radius: 25px;
}

img {
    width: 250px;
    height: 350px;
    margin: auto;
    border-radius: 25px;

}
</style>

