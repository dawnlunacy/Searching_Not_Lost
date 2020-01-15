<template>
  <form class="search-box">
    <input 
    class="searchInput"
    type="text"
    placeholder="  Input Keyword to Search"
    name="search"
    @change="this.handleChange"
    />
  <button class="search-btn" @click="this.submitSearch"> </button>

  </form>
</template>

<script>
export default {
  name: 'SearchForm',
  methods: {
    handleChange(e) {
      this.queryToSearch = e.target.value;
      console.log("testing DATA", this.queryToSearch)
          },
    submitSearch(e) {
      e.preventDefault();
    }
  },
  data() {
    return {
      queryToSearch: '',
    }
  }
 }
</script>

<style scoped>
  input {
    height: 50px;
    width: 500px;
    border-radius: 10px 0 0 10px;
    text-align: center;
    font-size: 2em;

  }

  .search-btn {
    height: 50px;
    width: 50px;
    background-color: pink;
    border-radius: 0 10px 10px 0;
    background-image: url("../assets/search-icon.png");
    background-size: 50px;

  }

  .search-box {
    display: flex;
    justify-content: center;
    align-items: center; 
  }

  
</style>