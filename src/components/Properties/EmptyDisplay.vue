<template>
  <div 
    style="text-align: center"
    class="mt-15"
  >
    <BigSearchIcon/>
    <div class="text-16 light-text mt-2">Sorry! We couldn't find any properties for your search.</div>
  </div>
</template>
<script>
import BigSearchIcon from "@/components/Icons/BigSearchIcon"
export default {
  name: "EmptyDisplay",
  components: {
    BigSearchIcon
  }
}
</script>