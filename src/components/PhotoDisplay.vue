<template>
  <div class="photo-card">
    <div class="photo-image-display">
    <img class="photo" v-bind:src="picUrl"/>
    </div>
    <section class="photo-description">
      <h3 class="photographer-name"> <a href> Photographer: Name </a></h3>

    </section>

  </div>
</template>



<script>
export default {
  name: 'PhotoDisplay',
  props: {
    picUrl: String
  }

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
  max-width: 275px;
  max-height: 275px;
  border: 2px solid black;
  margin: 35px 35px 0 35px;
}
.photo {
  max-width: 275px;
  max-height: 275px;
}
.photographer-name {
  margin: 20px;
  }

a {
  text-decoration: none;
}
</style>