<template>
  <div class="card" :style="[isActive ? activeBackgroundUrl : backgroundUrl]">
    <h1>{{title}}</h1>
      <router-link :to="to">
        <div class="link-button" v-if="!isActive">
          Смотреть
        </div>
        <div class="link-button" v-else>
          Текущая
        </div>
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
      return 'background-image: url(\'' + this.background.blue + '\')'
    },
    activeBackgroundUrl() {
      return 'background-image: url(\'' + this.background.red + '\')'
    },

    isActive() {
      return this.$route.matched.some(({ path }) => path === this.to)
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

h1 {
  padding: 35px 5px;

  font-family: Trattatello;
  font-weight: bolder;
  font-size: 36px;
  line-height: 30px;
}

.link-button {
  position: absolute;

  bottom: 100px;
  left: 50%;
  right: 50%;

  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 50px;
  margin: auto;

  background-color: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(5px);

  border-radius: 10px;
  border: 2px solid rgb(0,0,0);

  color: white;

  font-size: 18px;
}
</style>