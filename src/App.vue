<template>
<main>
  <slider-navigation :data="sliderData"/>

  <router-view class="article"/>
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
          title: "ДЭНГ!",
          to: "/"
        },
        {
          title: "СОСТАВ ИГРЫ",
          to: "/composition"
        },
        {
          title: "ЦЕЛЬ ИГРЫ",
          to: "/target"
        },
        {
          title: "ПОДГОТОВКА К ИГРЕ",
          to: "/preparations"
        },
        {
          title: "БУРГЕРЫ",
          to: "/burgers"
        },
        {
          title: "ХОД ИГРЫ",
          to: "/gameplay"
        },
        {
          title: "КОНЕЦ ИГРЫ",
          to: "/gameover"
        },
        {
          title: "КАРТЫ",
          to: "/cards"
        },
        {
          title: "СПОСОБНОСТИ",
          to: "/abilities"
        },
        {
          title: "ВАЖНЫЕ ПРАВИЛА",
          to: "/important-rules"
        },
        {
          title: "СОЗДАТЕЛИ",
          to: "/about"
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
  background-image: url('./assets/img/circle.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: contain;
  background-position: top;
  background-color: #100332;
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

.article {
  margin-top: 50px;
}

ul {
  padding: 0px;
}

li {
  list-style: none;
}
</style>
