<template>
  <p class="demo zoom" :href="imgSrc" ref="image">
       <img :src="imgSrc" alt="alt" class="thumb">
  </p>
</template>
<script>
export default {
    mounted () {
      import('luminous-lightbox').then(Luminous => {
          new LuminousGallery([this.$refs.image], {'caption':this.alt});
      });
    },
    props:['imgSrc', 'alt']
}
</script>
<style>
img.thumb{
    width: 50%;
    display: block;
    margin: 0 auto;
}
.lum-lightbox.lum-open{
    background-color: rgba(0, 0, 0, 0.4);
    display: block;
    z-index: 999;
}
.lum-lightbox-image-wrapper{
    background-color: transparent !important;
}
</style>