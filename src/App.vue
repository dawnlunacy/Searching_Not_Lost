<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <header> <SearchForm @showQuery="this.showQuery"> </SearchForm></header>
    <main>
        <h2> {{this.currentQuery}} </h2> 
        <PhotoDisplay 
        v-for="picInfo in this.currentPics"
        v-bind:picInfo="picInfo"
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
    showQuery(query) {
      this.currentQuery = query;
      // console.log("hello", query)
      fetchDefaultPics(this.currentQuery)
      .then(res => {
        console.log("meow", res)
        return res
      })
      .then(res => this.currentPics = res.results.map(pic => {
        let answer =  { 
          alt_discription: pic.alt_description,
          urls: {
            full: pic.urls.full,
            small: pic.urls.small
          },
          photographer: {
            name: pic.user.name,
            portfolio_url: pic.user.portfolio_url,
            unsplash_profile_url: pic.user.links.html
          }
        }
        console.log("answer", answer)
        return answer
      }))
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

main {
  column-count: 4;
  column-gap: 0;
  overflow: scroll;
  padding: 10px;
  break-inside: avoid;
  width: 100%
}

h2 {
  color: #FF3366;
  font-family: apple-chancery;
  font-size: 3em;
}
</style>
