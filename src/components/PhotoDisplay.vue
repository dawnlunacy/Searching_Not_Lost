<template>
  <div class="photo-card">
    <div class="photo-image-display">
    <img src=""/>
    </div>
    <section class="photo-description">
      <h3 class="photographer-name"> <a href> Photographer: Name </a></h3>

    </section>

  </div>
</template>



<script>
export default {
  name: 'PhotoDisplay',

}
</script>



<style scoped>
.photo-card {
  width: 350px;
  height: 375px;
  border: 2px solid palevioletred;
  margin: 20px;
}

.photo-image-display {
  width: 275px;
  height: 275px;
  border: 2px solid black;
  margin: 35px 35px 0 35px;
}

.photographer-name {
  margin: 20px;
  }

a {
  text-decoration: none;
}
</style>