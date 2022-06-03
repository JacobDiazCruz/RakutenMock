<template>
  <div 
    class="flex-wrapper"
    :style="{
      backgroundColor: wrapper.backgroundColor,
      border: border,
      minHeight: wrapper.minHeight
    }"
  >
    <div 
      class="flex-container"
      :style="{
        backgroundColor: container.backgroundColor,
        minHeight: minHeight
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
          minHeight: "100vh",
          border: '0px',
          padding: ""
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
          margin: "auto"
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
}

.flex-container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;

  @include minWidth(1264px) {
    max-width: 1050px;
  }
}
</style>