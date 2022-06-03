<template>
  <Button
    @click="$emit('facebook-login')"
    :loading="loading"
    type="shadow"
    id="facebook-btn"
    width="100%"
  >
    <svg t="1643534782507" class="icon mr-3" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4683" width="23" height="23"><path d="M1008 512C1008 238 786 16 512 16S16 238 16 512c0 247.56 181.38 452.76 418.5 490V655.38h-126V512h126v-109.28c0-124.3 74-192.96 187.34-192.96 54.28 0 111.04 9.68 111.04 9.68v122h-62.56c-61.6 0-80.82 38.24-80.82 77.46V512h137.56l-22 143.38h-115.56V1002C826.62 964.76 1008 759.56 1008 512z" p-id="4684" fill="#384ee4"></path></svg>
    Sign in with Facebook
  </Button>
</template>
<script>
import Button from "./Button"
export default {
  name: 'FacebookBtn',
  components: {
    Button
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>