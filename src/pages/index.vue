<template>
  <PageWrapper backgroundColor="#F5F5F5">
    <div class="home-container flex-nowrap">
      <FiltersRow/>
      <PropertiesList/>
    </div>
  </PageWrapper>
</template>
<script>
import PageWrapper from "@/components/Wrappers/PageWrapper"
import FiltersRow from "@/components/Rows/FiltersRow"
import PropertiesList from "@/components/Properties/PropertiesList"

export default {
  name: "Home",
  components: {
    PageWrapper,
    FiltersRow,
    PropertiesList
  }
}
</script>