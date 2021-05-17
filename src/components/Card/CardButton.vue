<template>
  <div class="card" :style="backgroundUrl">
    <h1>{{title}}</h1>
    <router-link :to="to">
      <p>Перейти</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
      default: "/",
    },
    backgroundColor: {
      type: String,
      required: false,
      default: 'blue'
    },
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      background: {
        blue: require('../../assets/img/card-blue.png'),
        red: require('../../assets/img/card-red.png')
      }
    }
  },
  computed: {
    backgroundUrl() {
      return 'background-image: url(\'' + this.background[this.backgroundColor] + '\')'
    }
  }
};
</script>

<style scoped>
.card {
  display: block;
  width: 250px;
  height: 350px;
  margin: auto;

  background-repeat: no-repeat;
  background-size: 100% 100%;

  border-radius: 25px;
}

.card-image {
  width: 250px;
}

h1 {
  font-family: Trattatello;
  font-weight: bolder;
  font-size: 40px;
}
</style>