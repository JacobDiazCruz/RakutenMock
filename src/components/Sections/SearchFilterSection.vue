<template>
  <div class="search-filter-section">
    <TextField
      placeholder="e.g. Hilton, Ibis ..."
      v-model="search"
    />
  </div>
</template>
<script>
import TextField from "@/components/Fields/TextField"

export default {
  name: "SearchFilterSection",
  components: {
    TextField
  },
  data() {
    return {
      search: ""
    }
  }
}
</script>