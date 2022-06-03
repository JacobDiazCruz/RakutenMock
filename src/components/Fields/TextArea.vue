<template>
  <v-col :cols="cols" :sm="sm" :xs="xs" :lg="lg" :md="md" class="pa-0">
    <p class="input-label"><b>{{ label }}</b></p>
    <p class="description">{{ description }}</p>
    <v-textarea
      class="mt-1"
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
    </v-textarea>
    <label
      class="error-msg"
      v-if="required"
    >
      This field is required.
    </label>
    <div :style="{ width: `${width}`, textAlign: 'right'}">
      <p class="footnote mt-1">
        {{ footnote }}
      </p>
    </div>
  </v-col>
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
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

::v-deep .v-text-field__slot {
  textarea {
    border: 1px solid #ccc !important;
    width: 100px !important;
    border-radius: 4px;
    padding: 5px 10px;
    // max-height: 200px;
  }
}
</style>