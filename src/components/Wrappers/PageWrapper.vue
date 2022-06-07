<template>
  <div class="page-wrapper">
    <div class="page-container">
      <slot/>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageWrapper"
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.page-wrapper {
  background-color: #F5F5F5;
}

.page-container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
  min-height: 100vh;

  @include minWidth(1264px) {
    max-width: 1100px;
  }
}
</style>