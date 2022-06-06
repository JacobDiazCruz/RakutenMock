<template>
  <div class="properties-list-wrapper">
    <!----- Properties Header ----->
    <div class="properties-header">
      <h2 class="heading-h2">
        {{ cityLabel }}
        {{ getProperties.length }} 
        properties found
      </h2>
      <div class="header-filters mt-2 flex-space-between">
        <div 
          v-for="(filter, filterKey) in headerFilters"
          :key="filterKey"
          class="flex-btn text-14"
          :class="{ 'active' : filter.active }"
        >
          {{ filter.title }}
        </div>
      </div>
    </div>
    
    <!----- Pre loader ----->
    <SkeletonLoader v-if="loadingProperties"/>

    <!----- Properties list ----->
    <div
      class="properties-container flex-space-between"
      v-for="(property, i) in getProperties"
      :key="i"
    >
      <div
        v-for="(pckge, pckgeKey) in property.packages"
        :key="pckgeKey"
        class="flex-space-between properties-row"
      >
        <!----- Property Details ----->
        <div>
          <div class="property-details flex-nowrap">
            <PropertyImages
              :heroImage="property.property.heroImage.url"
              :gallery="property.property.gallery"
            />
            <PropertyDetails
              :property="property"
              :pckge="pckge"
            />
          </div>
        </div>

        <!----- Prices and Reviews ----->
        <PriceDetails
          :property="property"
          :pckge="pckge"
        />
      </div>
    </div>

    <!----- Empty and Error messages ----->
    <EmptyDisplay v-if="!getProperties.length && !searchError" />
    <ErrorDisplay v-if="searchError"/>
  </div>
</template>
<script>
import PropertyImages from "@/components/Images/PropertyImages"
import Button from "@/components/Buttons/Button"
import { mapGetters, mapActions } from "vuex"
import eventBus from "@/plugins/event-bus"
import ErrorDisplay from "./ErrorDisplay"
import EmptyDisplay from "./EmptyDisplay"
import SkeletonLoader from "./SkeletonLoader"
import PropertyDetails from "./PropertyDetails"
import PriceDetails from "./PriceDetails"

export default {
  name: "Properties",
  components: {
    PropertyImages,
    Button,
    SkeletonLoader,
    PropertyDetails,
    PriceDetails,
    ErrorDisplay,
    EmptyDisplay
  },
  data() {
    return {
      loadingProperties: false,
      searchError: false,
      cityLabel: "",

      headerFilters: [
        {
          title: "Popularity",
          active: true
        },
        {
          title: "Price (lowest first)",
          active: false
        },
        {
          title: "Reviews",
          active: false
        },
        {
          title: "Discount",
          active: false
        }
      ]
    }
  },

  computed: {
    ...mapGetters("cities", [
      "getProperties"
    ])
  },

  mounted() {
    this.setDependencies()
  },

  methods: {
    ...mapActions("cities", [
      "autoSuggestApi",
      "searchPropertiesApi"
    ]),

    /**
     * @description eventBus triggered from @/components/Menus/SearchMenu
     * @triggerFunction searchCity
     * @return N/A
     * @status Done 
     */
    setDependencies() {
      eventBus.$on("setDependencies", ({
        cityLabel, 
        searchError, 
        isLoading
      }) => {
        this.cityLabel = cityLabel + ':'
        this.loadingProperties = isLoading
        this.searchError = searchError
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.properties-list-wrapper {
  min-width: 750px;
}

.header-filters {
  min-width: 100%;
  background-color: transparent;
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: 1rem;

  .flex-btn {
    text-align: center;
    cursor: pointer;
    padding: 0.7rem;
    min-width: 12.5rem;
    background-color: #FFF;
    border-right: 1px solid #DDDDDD;

    &:nth-last-child(1) {
      border-right: 0px solid #FFF;
    }
  }

  .active {
    background-color: $primary !important;
    color: #FFF;
    font-weight: 600;
  }
}

.properties-container {
  background-color: #FFF;
  min-width: 100%;
  max-width: 100%;
  border-radius: 5px;
  padding: 1em 0;
  margin-top: 0.5em;

  &:hover {
    box-shadow: 0 0 0 2px #DDDDDD;
  }

  .properties-row {
    min-width: 100%;
  }
}

.property-details {
  max-width: 97%;
  padding-left: 1rem;
}

::v-deep .image-loader .v-skeleton-loader__button.v-skeleton-loader__bone {
  width: 190px;
  height: 190px;
}

::v-deep .long-line .v-skeleton-loader__button.v-skeleton-loader__bone {
  width: 580px;
  height: 20px;
}

::v-deep .short-line .v-skeleton-loader__button.v-skeleton-loader__bone {
  width: 260px;
  height: 20px;
}
</style>