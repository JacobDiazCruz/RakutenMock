<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="timeout"
    class="error-snackbar"
  >
    <div style="display: flex;">
      <div v-html="icon"></div>
      <div class="ml-2">{{ GET_ERROR.text }}</div>
    </div>
    <template v-slot:action="{ attrs }">
      <v-btn
        color="blue"
        text
        v-bind="attrs"
        @click="$store.commit('ERROR', { show: false })"
      >
        <CloseIcon/>
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: {
    timeout: {
      type: Number,
      default: 6000
    },
    icon: {
      type: String,
      default: '<svg t="1624791183006" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4016" width="23" height="23"><path d="M554.069333 554.069333v-256.426666h-84.138666v256.426666h84.138666z m0 172.288v-86.186666h-84.138666v86.186666h84.138666zM512 85.333333c77.952 0 150.101333 19.498667 216.405333 58.453334a404.394667 404.394667 0 0 1 151.808 151.808A419.626667 419.626667 0 0 1 938.666667 512a419.626667 419.626667 0 0 1-58.453334 216.405333 404.394667 404.394667 0 0 1-151.808 151.808A419.626667 419.626667 0 0 1 512 938.666667a419.626667 419.626667 0 0 1-216.405333-58.453334 412.032 412.032 0 0 1-151.808-152.832A417.706667 417.706667 0 0 1 85.333333 512a417.706667 417.706667 0 0 1 58.453334-215.381333A419.925333 419.925333 0 0 1 296.618667 143.786667 417.706667 417.706667 0 0 1 512 85.333333z" fill="#d81e06" p-id="4017"></path></svg>'
    }
  },

  watch: {
    // set false to state upon timeout
    snackbar (value) {
      if (!value) {
        this.$store.commit('ERROR', { show: false })
      }
    }
  },

  computed: {
    ...mapGetters({
      GET_ERROR: "GET_ERROR"
    })
  },

  data() {
    return {
      snackbar: true,
    }
  },
}
</script>