<template>
  <FlexWrapper
    :wrapper="{
      backgroundColor: '#FFF',
      border: '#DDDDDD',
      minHeight: '70px'
    }"
  >
    <div class="flex-space-between">
      <MainLogo/>
      <div>
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
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.top-menu-wrapper {
  background-color: #fff;
  border: 1px solid #DDDDDD;
  z-index: 100;
  top: 0;
  position: sticky;
  color: #000;
}

.top-menu-container {
  height: 80px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;

  @include minWidth(1264px) {
    max-width: 1140px;
  }
}
</style>