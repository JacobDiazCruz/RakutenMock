<template>
  <div class="mt-15 text-center">
    <BigSearchIcon/>
    <div class="text-16 light-text mt-2">Oops, something went wrong.</div>
    <div class="text-12 light-text mt-2">error message here</div>
  </div>
</template>
<script>
import BigSearchIcon from "@/components/Icons/BigSearchIcon"

export default {
  name: "ErrorDisplay",
  components: {
    BigSearchIcon
  }
}
</script>