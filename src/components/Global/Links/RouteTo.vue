<template>
  <div @click="$router.push(`${path}`)" class="router-style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'RouteTo',
  props: {
    path: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.router-style {
  cursor: pointer;
}
</style>