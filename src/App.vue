<template>
<main>
  <slider-navigation :data="sliderData"/>

  <router-view/>
</main>
</template>

<script>
import SliderNavigation from './components/Slider/SliderNavigation.vue';

export default {
  components: {
    SliderNavigation
  },
  data() {
    return {
      sliderData: [
        {
          title: "Главная",
          to: "/"
        },
        {
          title: "О нас",
          to: "/about",
          backgroundColor: "red"
        },
        {
          title: "Другие",
          to: "/"
        },
        {
          title: "Другие",
          to: "/"
        },
      ]
    }
  }
};
</script>


<style>
html, body {
  padding: 0;
  margin: 0;
}

@font-face {
  font-family: Trattatello;
  src: url('./assets/fonts/Trattatello.ttf');
}

body {
  background-image: url('./assets/img/background.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  width: 100%;
  height: 100%;
  font-family: Trattatello;
  letter-spacing: 0.02em;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

main {
  padding-top: 20px;
}


#app {
  font-family: Century Gothic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
