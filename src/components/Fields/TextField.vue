<template>
  <v-text-field
    class="global-text-field mt-1"
    :placeholder="placeholder"
    :class="className"
    v-bind="$attrs"
    v-on="$listeners"
    dense
    flat
    solo
    :style="{
      borderColor: `${borderColor}`,
      backgroundColor: `${bgColor}`,
      height: `${height}`,
      width: `${width}`
    }"
  >
  </v-text-field>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: 'TextField',
  props: {
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      default: ''
    },
    footnote: {
      type: String,
      default: ''
    },
    sidenote: {
      type: String,
      default: ''
    },
    cols: {
      type: String,
      default: '12'
    },
    lg: {
      type: String,
      default: ''
    },
    md: {
      type: String,
      default: ''
    },
    xs: {
      type: String,
      default: ''
    },
    sm: {
      type: String,
      default: ''
    },
    column: {
      type: Boolean,
      default: true
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
      default: '100%'
    },
    bgColor: {
      type: String,
      default: '#FFF'
    },
    margin: {
      type: String,
      default: 'mt-n2'
    },
    className: {
      type: String,
      default: ''
    },
    model: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/styles/variables.scss";

.col {
  padding: 0 !important; 
}

.global-text-field {
  width: 100%;
  .v-input__slot {
    width: 100% !important;
    height: 40px !important;
    border: 1px solid #ccc;
    border-radius: 4px !important;
    background-color: #FFF !important;
    padding: 0 !important;
  }
  .v-text-field__slot {
    width: 100% !important;
    padding-left: 10px;
  }
}

.border-global-text-field {
  .v-input__slot {
    height: 40px !important;
    width: 100% !important;
    border: 1px solid #c5c6c7;
    background-color: #FFF !important;
    border-radius: 4px !important;
    padding: 0 !important;
  }
  .v-text-field__slot {
    width: 100% !important;
  }
}

// required error field
.required-field {
  .v-input__slot {
    background-color: #FFD8D8 !important;
    border:1px solid #D62F5C !important;
  }
}
</style>