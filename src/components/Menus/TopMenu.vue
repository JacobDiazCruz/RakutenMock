<template>
  <FlexWrapper
    :wrapper="{
      backgroundColor: '#FFF',
      border: '#DDDDDD',
      height: '60.93px'
    }"
  >
    <div class="flex-space-between mt-3">
      <MainLogo/>
      <div class="mt-1">
        <Button 
          v-for="(item, key) in itemsList"
          :key="key"
          class="mr-5"
        >
          {{ item.title }}
        </Button>
      </div>
    </div>
  </FlexWrapper>
</template>
<script>
import MainLogo from "@/components/Icons/MainLogo"
import FlexWrapper from "@/components/Wrappers/FlexWrapper"

export default {
  name: "TopMenu",
  components: {
    MainLogo,
    FlexWrapper
  },
  data() {
    return {
      itemsList: [
        {
          title: "English"
        },
        {
          title: "USD"
        },
        {
          title: "My Account"
        },
        {
          title: "Log out"
        }
      ]
    }
  }
}
</script>