<template>
  <FlexWrapper
    :wrapper="{
      backgroundColor: '#002D63',
      border: '#DDDDDD',
      minHeight: '70px'
    }"
  >
    <div class="flex-space-between">
      <div class="flex-nowrap">
        <AutoComplete 
          class="search-autocomplete-field"
        />
        <Button 
          type="secondary"
          class="mt-2 ml-2 search-btn"
        >Search</Button>
      </div>
    </div>
  </FlexWrapper>
</template>
<script>
import MainLogo from "@/components/Icons/MainLogo"
import FlexWrapper from "@/components/Wrappers/FlexWrapper"
import AutoComplete from "@/components/Fields/AutoComplete"
import Button from "@/components/Buttons/Button"

export default {
  name: "TopMenu",
  components: {
    MainLogo,
    FlexWrapper,
    AutoComplete,
    Button
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

.search-menu-wrapper {
  background-color: $primary;
  border: 1px solid #DDDDDD;
  z-index: 100;
  top: 0;
  position: sticky;
  color: #FFF;
}

.search-menu-container {
  height: 80px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;

  @include minWidth(1264px) {
    max-width: 1140px;
  }
}

.search-btn {
  min-height: 50px !important;
  max-height: 50px !important;
  min-width: 150px !important;
}

.search-autocomplete-field {
  min-width: 470px;
}
</style>