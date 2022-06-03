<template>
  <v-col :cols="cols">
    <p class="input-label">{{ label }}</p>
    <v-select
      class="global-autocomplete-field"
      autocapitalize="off"
      :class="className"
      v-bind="$attrs"
      v-on="$listeners"
      solo
      flat
      :style="{
        borderColor: `${borderColor}`,
        backgroundColor: `${bgColor}`,
        height: `${height}`,
        width: `${width}`
      }"
    ></v-select>
  </v-col>
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
  .v-input__control {
    min-height: 40px !important;
  }

  .v-input__slot {
    border: 1px solid #c5c6c7 !important;
    // background-color: #FFF !important;
    border-radius: 4px !important;
    height: 40px;
  }

  .v-select__slot {
    padding: 0px 10px !important;
  }
}

.border-autocomplete-field {
  .v-select__slot {
    border: 1px solid #c5c6c7;
    background-color: #FFF !important;
    border-radius: 4px !important;
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
.v-text-field.v-text-field--solo .v-input__control {
  min-height: 0 !important;
}

// required error field
.required-field {
  .v-input__slot {
    background-color: #FFD8D8 !important;
    border:1px solid #D62F5C !important;
  }
}
</style>