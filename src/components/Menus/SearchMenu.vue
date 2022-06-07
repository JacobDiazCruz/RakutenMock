<template>
  <FlexWrapper
    :wrapper="{
      backgroundColor: '#002D63',
      border: '#DDDDDD',
      maxHeight: '75px'
    }"
    :container="{
      maxHeight: '75px'
    }"
  >
    <div class="flex-space-between pt-3">
      <div class="flex-nowrap">
        <v-autocomplete
          class="global-autocomplete-field search-autocomplete-field"
          autocapitalize="off"
          placeholder="Singapore, Singapore"
          :items="suggestedList"
          item-text="label"
          return-object
          :loading="loadingField"
          v-bind="$attrs"
          v-model="cityCode"
          append-icon=""
          v-on.enter="searchCity"
          @keypress="autoSuggest"
          @change="searchCity"
          solo
          flat
        >
          <template v-slot:prepend-inner>
            <div class="pl-3 pr-1">
              <SearchIcon/>
            </div>
          </template>
          <template v-slot:item="data">
            <LocationIcon class="mr-2 mb-n1"/>
            <div class="text-14">
              {{ data.item.label }}
            </div>
          </template>
        </v-autocomplete>
        <Button 
          type="secondary"
          class="ml-2 search-btn"
          @click="searchCity"
        >
          Search
        </Button>
      </div>
    </div>
  </FlexWrapper>
</template>
<script>
import MainLogo from "@/components/Icons/MainLogo"
import FlexWrapper from "@/components/Wrappers/FlexWrapper"
import AutoComplete from "@/components/Fields/AutoComplete"
import Button from "@/components/Buttons/Button"
import SearchIcon from "@/components/Icons/SearchIcon"
import LocationIcon from "@/components/Icons/LocationIcon"
import eventBus from "@/plugins/event-bus"
import { mapActions } from "vuex"

export default {
  name: "TopMenu",
  components: {
    MainLogo,
    FlexWrapper,
    AutoComplete,
    SearchIcon,
    LocationIcon,
    Button
  },

  data() {
    return {
      cityCode: "",
      loadingField: false,
      suggestedList: [],
      searchList: []
    }
  },

  methods: {
    ...mapActions("cities", [
      "autoSuggestApi",
      "searchPropertiesApi"
    ]),

    /**
     * @description triggers upon user keypress on search field
     * @return N/A
     * @status Done 
     */
    async autoSuggest() {
      this.loadingField = true
      try {
        const response = await this.autoSuggestApi()
        this.suggestedList = response.data
      } catch(err) {
        console.log(err)
      } finally {
        this.loadingField = false
      }
    },

    /**
     * @description search city's properties api call
     * @return N/A
     * @status Done 
     */
    async searchCity() {
      if(this.cityCode) {
        eventBus.$emit("setDependencies", {
          cityLabel: this.cityCode.label,
          searchError: false,
          isLoading: true
        })
        try {
          // API Call (from vuex actions)
          const response = await this.searchPropertiesApi(this.cityCode.cityCode)

          // Response updates
          if(response != 400) {
            this.searchList = response
            eventBus.$emit("setDependencies", {
              cityLabel: this.cityCode.label,
              searchError: false,
              isLoading: false
            })
          } else {
            eventBus.$emit("setDependencies", {
              cityLabel: this.cityCode.label,
              searchError: true,
              isLoading: false
            })
          }
        } catch(err) {
          console.log(err)
        }
      }
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

::v-deep .search-autocomplete-field {
  min-width: 470px;

  .v-input__slot {
    min-height: 50px !important;
  }

  .v-input__control {
    min-height: 0px !important;
  }

  .v-messages {
    min-height: 0px !important;
  }
}

::v-deep .v-progress-linear.v-progress-linear--absolute.v-progress-linear--visible.theme--light {
  background-color: $secondary !important;
  border-color: $secondary !important; 
}
</style>