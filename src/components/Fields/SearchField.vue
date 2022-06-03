<template>
  <v-col :cols="cols" :sm="sm" :xs="xs" :lg="lg" :md="md" class="px-0">
    <v-text-field
      :placeholder="placeholder"
      :class="className"
      v-bind="$attrs"
      v-on="$listeners"
      dense
      flat
      solo
      :style="{
        borderColor: `${borderColor}`,
        height: `${height}`,
        width: `${width}`
      }"
    >
      <template v-slot:prepend-inner>
        <button class="ml-2 mr-1 search-icon" type="button" @click.prevent="$emit('action')">
          <svg t="1626447012052" class="icon mt-1 ml-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2106" width="15" height="15"><path d="M842 423.1c0 104.4-38 199.1-100.4 272.7l267.1 267.1c34.8 34-4.9 86.6-50.2 38.8-26.7-29.1-263-259.8-263-259.8-73.6 63.2-169.1 101.2-273.5 101.2-232.3 0-420-187.8-420-420s187.8-420 420-420c231.5 0 420 188.6 420 420zM422 70.3c-195 0-353.7 157.8-353.7 352.8S226.2 776.8 422 776.8c195 0 352.8-158.6 352.8-353.7S617.1 70.3 422 70.3z" fill="#000" p-id="2107"></path></svg>
        </button>
      </template>
    </v-text-field>
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
      default: '#f4f7f6'
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
      default: '#f4f7f6'
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

.search-icon {
  border-radius: 100%;
}

.search-text-field .v-text-field__slot {
  padding-left: 0px !important;
}

.search-text-field {
  .v-input__slot {
    height: 40px !important;
    border: 1px solid #f4f7f6;
    border-radius: 4px !important;
    background-color: #f4f7f6 !important;
    border-radius: 50px !important;
  }

  .v-text-field__slot {
    background-color: #f4f7f6 !important;
    padding-left: 15px;
  }

  input {
    width: 550px !important;

    @include mobile(999px) {
      width: 100% !important;
    }
  }

}

::v-deep .v-input__slot {
  background-color: black !important;
}

::v-deep .v-input.v-input--dense.theme--light.v-text-field.v-text-field--single-line.v-text-field--solo.v-text-field--solo-flat.v-text-field--is-booted.v-text-field--enclosed.v-text-field--placeholder.search-text-field{
  background-color: #000;
}
</style>