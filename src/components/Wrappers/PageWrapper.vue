<template>
  <div class="page-wrapper"
    :style="{
      backgroundColor: backgroundColor,
      minHeight: minHeight
    }"
  >
    <div class="page-container">
      <slot/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageWrapper',
  props: {
    backgroundColor: {
      type: String,
      default: '#FFF'
    },
    minHeight: {
      type: String,
      default: '100vh'
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.page-container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;

  @include minWidth(1264px) {
    max-width: 1100px;
  }
}
</style>