<template>
  <div class="price-filter-card">
    <v-range-slider
      hide-details
      hint="Im a hint"
      :value="[0, 200]"
      max="400"
      min="0"
      color="#FFF"
    ></v-range-slider>
    <div class="flex-space-between">
      <TextField class="mr-2"/>
      <div class="line-through light-text"></div>
      <TextField class="ml-2"/>
    </div>
  </div>
</template>
<script>
import TextField from "@/components/Fields/TextField"
export default {
  name: "PriceFilter",
  components: {
    TextField
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

::v-deep .v-slider__track-background.primary.lighten-3 {
  background-color: $light-gray !important;
}

::v-deep .v-slider__track-container {
  height: 5px !important;
}

::v-deep .v-slider__track-fill {
  background-color: $secondary !important;
}

::v-deep .v-slider__thumb {
  outline: $secondary solid 2px !important;
}

.line-through {
  width: 30px;
  height: 1px;
  background-color: #000;
  margin: auto;
}
</style>