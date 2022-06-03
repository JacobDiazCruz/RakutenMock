<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="timeout"
    class="success-snackbar"
  >
    <div style="display: flex;">
      <div v-html="icon"></div>
      <div class="ml-2">{{ GET_SUCCESS.text }}</div>
    </div>
    <template v-slot:action="{ attrs }">
      <v-btn
        color="blue"
        text
        v-bind="attrs"
        @click="$store.commit('SUCCESS', { success: false })"
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
      default: 999999999
    },
    icon: {
      type: String,
      default: '<svg t="1624788558977" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2763" width="23" height="23"><path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m236.32 294.144L408.896 633.536 259.84 484.544 192 552.416l216.896 216.928 407.296-407.296-67.872-67.904z" p-id="2764" fill="#3cc44b"></path></svg>'
    }
  },

  watch: {
    // set false to state upon timeout
    snackbar (value) {
      if (!value) {
        this.$store.commit('SUCCESS', { success: false })
      }
    }
  },

  computed: {
    ...mapGetters({
      GET_SUCCESS: "GET_SUCCESS"
    })
  },

  data() {
    return {
      snackbar: true,
    }
  },
}
</script>