<template>
  <form>
    <input 
    className="searchInput"
    type="text"
    placeholder=" Input Keyword to Search"
    name="search"/>
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
    margin-top: 50px;
    border-radius: 10px;
  }
</style>