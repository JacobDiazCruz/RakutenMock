<template>
  <button v-bind="$attrs" v-on="$listeners" type="button">
    <svg :width="width" :height="height" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5.5 5.5 13 13m-13 0 13-13" class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round"></path></svg>
  </button>
</template>
<script>
export default {
  name: 'Close-Icon',
  props: {
    width: {
      type: String,
      default: '24'
    },
    height: {
      type: String,
      default: '24'
    }
  }
}
</script>