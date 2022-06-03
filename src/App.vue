<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex"
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>