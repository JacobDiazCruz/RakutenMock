<template>
  <v-app id="app">
    <TopMenu />
    <SearchMenu/>
    <router-view></router-view>
  </v-app>
</template>
<script>
import TopMenu from "@/components/Menus/TopMenu"
import SearchMenu from "@/components/Menus/SearchMenu"

export default {
  name: "DefaultLayout",
  components: {
    TopMenu,
    SearchMenu
  }
}
</script>