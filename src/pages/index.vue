<template>
  <PageWrapper backgroundColor="#F5F5F5">
    <div class="home-container flex-nowrap">
      <FiltersRow/>
      <Properties/>
    </div>
  </PageWrapper>
</template>
<script>
import PageWrapper from "@/components/Wrappers/PageWrapper"
import FiltersRow from "@/components/Rows/FiltersRow"
import Properties from "@/components/Properties"

export default {
  name: "Home",
  components: {
    PageWrapper,
    FiltersRow,
    Properties
  }
}
</script>