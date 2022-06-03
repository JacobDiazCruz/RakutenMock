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

.edit-btn {
  border-radius: 100%;
  box-shadow: rgb(99 100 102 / 20%) 0px 0px 0px 1px inset;
  width: 35px;
  height: 35px;
  text-align: center;
  margin: auto;
}

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

.v-btn.primary.circle {
  border-radius: 50px !important;
  letter-spacing: 0;
  text-transform: none;
  color: #FFF !important;
  font-weight: 600 !important;
  background-color: $crimson !important;
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

.v-btn.primary.round {
  border-radius: 100% !important;
  width: 30px;
  height: 30px;
  letter-spacing: 0;
  text-transform: none;
  color: #FFF !important;
  font-weight: 600 !important;
  background-color: $crimson !important;
  transition: .1s;
}

.v-btn.primary.v-btn--disabled {
  // border-radius: 50px;
  letter-spacing: 0;
  text-transform: none;
  color: #FFF !important;
  font-weight: 600 !important;
  background-color: #f5f5f5 !important;
  transition: .1s;
  cursor: not-allowed !important;
}

// disabled
button.v-btn.v-btn--disabled.v-btn--has-bg.theme--light.v-size--default.primary {
  background-color: #f5f5f5;
  border: 1px solid #d9d9d9 !important;
  color: #000 !important;
  opacity: 0.5;
  cursor: not-allowed !important;
}

// bordered btn
.v-btn.bordered {
  // border-radius: 50px;
  letter-spacing: 0;
  text-transform: none;
  background-color: #FFF !important;
  border: 1px solid #545556;
  span {
    color: #221d11 !important;
  }
}

// shadow btn
.v-btn.shadow {
  letter-spacing: 0;
  text-transform: none;
  background-color: #FFF !important;
  // box-shadow: rgb(0 0 0 / 6%) 0px 5px 5px !important;
  box-shadow: 0 1px 3px #0000000d, 0 1px 1px #00000006 !important;
  border: 1px solid #d9d9d9;
  span {
    color: #221d11 !important;
  }
}

// primary with padding
.primary.button-padding {
  padding: 25px 35px 25px 35px !important;
}

.button-padding {
  padding: 25px 35px 25px 35px !important;
}

// dark btn
.v-btn.dark {
  // border-radius: 50px;
  letter-spacing: 0;
  color: #FFF;
  text-transform: none;
}

// light btn
.v-btn.light {
  letter-spacing: 0;
  text-transform: none;
}

// default
.v-btn__content {
  letter-spacing: 0;
  text-transform: none;
}
</style>