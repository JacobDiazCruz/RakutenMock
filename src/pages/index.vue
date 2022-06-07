<template>
  <PageWrapper>
    <div class="home-container flex-nowrap">
      <SideFilters/>
      <Properties/>
    </div>
  </PageWrapper>
</template>
<script>
import PageWrapper from "@/components/Wrappers/PageWrapper"
import SideFilters from "@/components/Properties/SideFilters"
import Properties from "@/components/Properties"

export default {
  name: "Home",
  components: {
    PageWrapper,
    SideFilters,
    Properties
  }
}
</script>