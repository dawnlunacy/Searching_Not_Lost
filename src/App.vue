<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <header> <SearchForm @showQuery="this.showQuery"> </SearchForm></header>
    <main>
      <h2> {{this.currentQuery}} </h2> 
      <PhotoDisplay 
      v-for="picUrl in this.currentPics"
      v-bind:picUrl="picUrl"
      > </PhotoDisplay>
    </main>
  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import SearchForm from './components/SearchForm';
import PhotoDisplay from './components/PhotoDisplay';
import { fetchDefaultPics }  from '../utils/apiCalls';

export default {
  name: 'app',
  components: {
    SearchForm,
    PhotoDisplay
  },
  methods: {
    showQuery(whatever) {
      this.currentQuery = whatever;
      console.log("hi")
      fetchDefaultPics()
      .then(res => this.currentPics = res.map(pic => pic.urls.small))
      .then(console.log("pics", this.currentPics))
      return this.currentQuery || '';
    },

  },
  data() {
    return {
      currentQuery: '',
      currentPics: []
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
} 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

header {
  background-color: #333;
  height: 150px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
