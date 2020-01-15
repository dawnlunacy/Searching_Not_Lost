<template>
  <div class="photo-card">
    <div class="photo-image-display">
    <img class="photo" v-bind:src="picInfo.urls.small"/>
    </div>
    <section class="photo-description">
      <h3 class="photographer-name"> <a v-bind:href="picInfo.photographer.unsplash_profile_url"> Photographer: {{picInfo.photographer.name}} </a></h3>
    </section>
  </div>
</template>



<script>
export default {
  name: 'PhotoDisplay',
  props: {
    picInfo: Object
  }
}
</script>



<style scoped>
.photo-card {
  width: 350px;
  max-height: 400px;
  margin: 20px;
  background-color: #C8C8C8;
  padding: 10px;
  break-inside: avoid;
}

.photo-image-display {
  max-width: 275px;
  max-height: 275px;
  margin: 35px 35px 0 35px;
}
.photo {
  max-width: 275px;
  max-height: 275px;
}
.photographer-name {
  margin: 25px;
  font-family: apple-chancery;
  color: pink;
  }

a {
  text-decoration: none;
  color: #FF3366;
}

a:hover {
cursor: pointer;
}
</style>