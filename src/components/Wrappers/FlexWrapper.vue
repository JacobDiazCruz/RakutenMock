<template>
  <div 
    class="flex-wrapper"
    :style="{
      backgroundColor: wrapper.backgroundColor,
      border: border,
      height: wrapper.height,
      minHeight: wrapper.minHeight,
      maxHeight: wrapper.maxHeight
    }"
  >
    <div 
      class="flex-container"
      :style="{
        backgroundColor: container.backgroundColor,
        minHeight: container.minHeight,
        maxHeight: container.maxHeight
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FlexWrapper',
  props: {
    wrapper: {
      default: ()=> {
        return {
          backgroundColor: "#FFF",
          height: "100vh",
          border: '0px',
          padding: "",
          maxHeight: ""
        }
      }
    },

    container: {
      default: () => {
        return {
          backgroundColor: "transparent",
          maxWidth: "900px",
          minHeight: "100vh",
          padding: "",
          width: "",
          margin: "auto",
          maxHeight: ""
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.flex-wrapper {
  border: 1px solid #DDDDDD;
  z-index: 100;
  top: 0;
  position: sticky;
  overflow: hidden;
}

.flex-container {
  width: 100%;
  margin: auto;

  @include minWidth(1264px) {
    max-width: 1000px;
  }
}
</style>