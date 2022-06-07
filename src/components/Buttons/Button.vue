<template>
  <v-btn
    :depressed="true"
    :loading="loading"
    :disabled="disabled"
    v-bind="$attrs"
    v-on="$listeners"
    :style="{
      width: width
    }"
    :class="type"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'Button',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'none'
    },
    text: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: '#ff424d'
    },
    height: {
      type: String,
      default: '40px'
    },
    textColor: {
      type: String,
      default: '#FFF'
    },
    borderRadius: {
      type: String,
      default: '4px'
    },
    margin: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    fontWeight: {
      type: String,
      default: '400'
    },
    borderColor: {
      type: String,
      default: 'transparent'
    },
    fontSize: {
      type: String,
      default: '14px'
    },
    leftIcon: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/styles/variables.scss";

// primary btn
.v-btn.primary {
  letter-spacing: 0;
  text-transform: none;
  color: #FFF !important;
  border-radius: 3px !important;
  font-weight: 600 !important;
  background-color: $primary !important;
  transition: .1s;
}

// blue btn
.v-btn.secondary {
  letter-spacing: 0;
  text-transform: none;
  border-radius: 3px !important;
  color: #FFF !important;
  background-color: $secondary !important;
  font-weight: 600 !important;
  transition: .1s;
}

// blue btn disabled
button.v-btn.v-btn--disabled.v-btn--has-bg.theme--light.v-size--default.blue {
  letter-spacing: 0;
  text-transform: none;
  color: #FFF !important;
  font-weight: 600 !important;
  background-color: #2e69ff !important;
  cursor: not-allowed;
  opacity: 0.3;
  transition: .1s;
}

// primary btn
.v-btn.blue-border {
  // border-radius: 50px;
  letter-spacing: 0;
  text-transform: none;
  border: 1px solid #2e69ff;
  background-color: #FFF;
  color: #2e69ff !important;
  font-weight: 600 !important;
  transition: .1s;
}

// primary btn
.v-btn.red-border {
  letter-spacing: 0;
  text-transform: none;
  border: 1px solid red;
  background-color: #FFF;
  color: red !important;
  font-weight: 600 !important;
  transition: .1s;
}

.v-btn.none {
  // border-radius: 6px !important;
  letter-spacing: 0;
  text-transform: none;
  color: $crimson !important;
  font-weight: 600 !important;
  background-color: transparent !important;
  transition: .1s;
}

.v-btn.primary.v-btn--disabled {
  letter-spacing: 0;
  text-transform: none;
  color: #FFF !important;
  font-weight: 600 !important;
  background-color: #f5f5f5 !important;
  transition: .1s;
  cursor: not-allowed !important;
}
</style>