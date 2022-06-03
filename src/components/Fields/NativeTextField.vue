<template>
  <div>
    <p class="input-label">
      <b>{{ label }}</b>
    </p>
    <p class="description">
      {{ description }}
    </p>
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
    <label class="error-msg" v-if="required">
      This field is required.
    </label>
    <div :style="{ width: `${width}`, textAlign: 'right' }">
      <p class="footnote mt-1">
        {{ footnote }}
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "TextField",
  props: {
    label: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      default: ""
    },
    footnote: {
      type: String,
      default: ""
    },
    sidenote: {
      type: String,
      default: ""
    },
    cols: {
      type: String,
      default: "12"
    },
    lg: {
      type: String,
      default: ""
    },
    md: {
      type: String,
      default: ""
    },
    xs: {
      type: String,
      default: ""
    },
    sm: {
      type: String,
      default: ""
    },
    column: {
      type: Boolean,
      default: true
    },
    borderColor: {
      type: String,
      default: "#DADADA"
    },
    height: {
      type: String,
      default: "40px"
    },
    width: {
      type: String,
      default: "100%"
    },
    bgColor: {
      type: String,
      default: "#FFF"
    },
    margin: {
      type: String,
      default: "mt-n2"
    },
    className: {
      type: String,
      default: ""
    },
    model: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  }
};
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
    // border: 1px solid #c5c6c7;
    border-radius: 50px !important;
    background-color: #f2f3f5 !important;
    padding: 0 !important;
  }
  .v-text-field__slot {
    width: 100% !important;
    padding-left: 15px;
  }
}

.border-global-text-field {
  .v-input__slot {
    height: 40px !important;
    width: 100% !important;
    border: 1px solid #c5c6c7;
    background-color: #fff !important;
    border-radius: 4px !important;
    padding: 0 !important;
  }
  .v-text-field__slot {
    width: 100% !important;
  }
}

.round-text-field {
  .v-input__slot {
    height: 40px !important;
    width: 100% !important;
    border: 1px solid #c5c6c7;
    background-color: #fff !important;
    border-radius: 50px !important;
    padding: 0 !important;
  }
  .v-text-field__slot {
    width: 100% !important;
  }
}

.night-field {
  color: #fff !important;
  .v-input__slot {
    height: 40px !important;
    width: 100% !important;
    background-color: $night-500 !important;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 4px !important;
    padding: 5px 12px;
  }
  .v-text-field__slot {
    width: 100% !important;
    padding-left: 15px;
    color: #fff !important;

    ::placeholder {
      color: #fff !important;
    }
  }
}

.light-global-text-field {
  .v-input__slot {
    height: 40px !important;
    width: 100% !important;
    border: 1px solid #c5c6c7;
    background-color: #fff !important;
    border-radius: 4px !important;
    padding: 5px 12px;
  }
  .v-text-field__slot {
    width: 100% !important;
    padding-left: 15px;
  }
}

// required error field
.required-field {
  .v-input__slot {
    background-color: #ffd8d8 !important;
    border: 1px solid #d62f5c !important;
  }
}
</style>
