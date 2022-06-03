<template>
  <div class="image-wrapper">
    <div 
      class="image-container"
      :style="{
        width: width,
        height: height,
      }"
    >
      <!-- img tag is always relative to the container -->
      <!-- Fixed 100% -->
      <img 
        :src="origin === 'local' ? 
          require(`~/${path}`) : path"
        :alt="alt"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImageWrapper',
  props: {
    path: {
      type: String,
      default: ''
    },
    origin: {
      type: String,
      default: 'live'
    },
    height: {
      type: String | Number,
      default: '100'
    },
    width: {
      type: String | Number,
      default: '100'
    },
    alt: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="scss">
.image-container {
  overflow: hidden;
}

img {
  width: 100%;
  position: relative;
}
</style>