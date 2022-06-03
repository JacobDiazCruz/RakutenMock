<template>
  <v-autocomplete
    class="global-autocomplete-field mt-2"
    autocapitalize="off"
    :class="className"
    v-bind="$attrs"
    v-on="$listeners"
    hide-selected
    solo
    flat
    :style="{
      borderColor: `${borderColor}`,
      backgroundColor: `${bgColor}`,
      height: `${height}`,
      width: `${width}`
    }"
  ></v-autocomplete>
</template>
<script>
export default {
  name: 'AutoComplete',
  props: {
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    cols: {
      type: String,
      default: '12'
    },
    borderColor: {
      type: String,
      default: '#DADADA'
    },
    height: {
      type: String,
      default: '40px'
    },
    width: {
      type: String,
      default: null
    },
    bgColor: {
      type: String,
      default: '#FFF'
    },
    className: {
      type: String,
      default: ''
    },
    margin: {
      type: String,
      default: 'mt-n2'
    },
    model: {
      type: String,
      default: ''
    },
  }
}
</script>
<style lang="scss">
@import "@/assets/styles/variables.scss";

// autocomplete field
.global-autocomplete-field {
  .v-input__slot {
    border: 1px solid #c5c6c7 !important;
    background-color: #FFF !important;
    border-radius: 3px !important;
    height: 50px;
  }

  .v-select__slot {
    padding: 0px 10px !important;
  }
}

.border-autocomplete-field {
  .v-select__slot {
    border: 1px solid #c5c6c7;
    background-color: #FFF !important;
    border-radius: 3px !important;
    padding: 5px 12px;
    height: 40px;
  }

  .v-chip--select {
    background-color: rgba(107, 83, 255, 0.1) !important;
    color: $primary !important;
  }

  .v-label {
    margin-left: 10px;
  }

  .v-select__slot {
    height: 40px;
  }
}
</style>