<template>
  <div class="filters-row">
    <!----- Map ----->
    <MapSection/>

    <div
      class="filter-cards mt-2"
      v-for="(filter, i) in filtersList"
      :key="i"
    >  
      <h2 class="heading-h3 mb-3">{{ filter.heading }}</h2>
      <!----- Price filters ----->
      <PriceFilterSection 
        v-if="filter.heading == 'Price per night'"
      />

      <!----- Search filters ----->
      <SearchFilterSection
        v-if="filter.heading == 'Hotel name'"
      />
      
      <!----- Checkbox filters ----->
      <div v-if="filter.items.length">
        <div
          v-for="(item, itemKey) in filter.items"
          :key="itemKey"
          class="flex-space-between"
        >
          <v-checkbox
            color="primary"
            :label="item.title"
            v-model="item.selected"
          ></v-checkbox>
          <p>{{ item.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardGroup from "@/components/Cards/CardGroup"
import TextField from "@/components/Fields/TextField"
import Button from "@/components/Buttons/Button"
import MapSection from "@/components/Sections/MapSection"
import PriceFilterSection from "@/components/Sections/PriceFilterSection"
import SearchFilterSection from "@/components/Sections/SearchFilterSection"

export default {
  name: "FiltersRow",
  components: {
    CardGroup,
    TextField,
    MapSection,
    PriceFilterSection,
    SearchFilterSection,
    Button
  },
  data() {
    return {
      // Reviews data
      filtersList: {
        pricePerNight: {
          heading: "Price per night",
          minValue: 0,
          maxValue: 10,
          items: []
        },

        reviews: {
          heading: "Reviews",
          items: [
            {
              selected: false,
              title: "Excellent",
              value: 999
            },
            {
              selected: false,
              title: "Very Good",
              value: 999
            },
            {
              selected: false,
              title: "Good",
              value: 999
            },
            {
              selected: false,
              title: "Fair",
              value: 999
            },
            {
              selected: false,
              title: "Poor",
              value: 999
            },
            {
              selected: false,
              title: "No review",
              value: 999
            },
          ]
        },

        starRatings: {
          heading: "Star rating",
          items: [
            {
              selected: false,
              title: "5",
              value: 999
            },
            {
              selected: false,
              title: "4",
              value: 999
            },
            {
              selected: false,
              title: "3",
              value: 999
            },
            {
              selected: false,
              title: "2",
              value: 999
            },
            {
              selected: false,
              title: "1",
              value: 999
            },
            {
              selected: false,
              title: 'No rating',
              value: 999
            },
          ],
        },

        hotelName: {
          heading: "Hotel name",
          search: "",
          items: []
        },

        reservations: {
          heading: "Reservations",
          items: [
            {
              selected: false,
              title: "Free cancellation",
              value: 999
            },
            {
              selected: false,
              title: "Book now, pay later",
              value: 999
            },
            {
              selected: false,
              title: "Pay at hotel",
              value: 999
            }
          ]
        },

        mealPlans: {
          heading: "Meal plan",
          items: [
            {
              selected: false,
              title: "Room only",
              value: 999
            },
            {
              selected: false,
              title: "Breakfast",
              value: 999
            },
          ]
        },

        propertyType: {
          heading: "Property type",
          items: [
            {
              selected: false,
              title: "Hotel",
              value: 999
            },
            {
              selected: false,
              title: "Hostel / Backpacker accomodation",
              value: 999
            },
            {
              selected: false,
              title: "Apartment",
              value: 999
            },
          ]
        },

        facilities: {
          heading: "Facilities",
          items: [
            {
              selected: false,
              title: "Swimming pool",
              value: 999
            },
            {
              selected: false,
              title: "Internet access",
              value: 999
            },
            {
              selected: false,
              title: "Non-smoking floor",
              value: 999
            },
          ]
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">
.filters-row {
  margin-right: 1em;
}

.filter-cards {
  background-color: #FFF;
  border-radius: 5px;
  padding: 1em;
  margin-bottom: 0.5em;
  max-width: 290px;
  min-width: 290px;
}

::v-deep .v-input--checkbox {
  margin-top: 0px;
  .v-messages {
    min-height: 0px;
  }
}
</style>