<template>
  <form class="search-box">
    <input 
    class="searchInput"
    type="text"
    placeholder="  Input Keyword to Search"
    name="search"
    />
  <button class="search-btn"> </button>

  </form>
</template>

<script>
export default {
  name: 'SearchForm',
 }
</script>

<style scoped>
  input {
    height: 50px;
    width: 500px;
    /* margin-top: 50px; */
    border-radius: 10px;
    text-align: center;
  }

  .search-btn {
    height: 50px;
    width: 50px;
    color: pink;
    border-radius: 10px;
  }

  .search-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  
</style>