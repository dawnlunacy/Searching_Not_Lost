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
    border-radius: 10px 0 0 10px;
    text-align: center;
  }

  .search-btn {
    height: 50px;
    width: 50px;
    color: pink;
    border-radius: 0 10px 10px 0;
  }

  .search-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  
</style>