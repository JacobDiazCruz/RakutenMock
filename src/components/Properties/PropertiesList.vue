<template>
  <div class="properties-list-wrapper">
    <!----- Properties Header ----->
    <div class="properties-header">
      <h2 class="heading-h2">Singapore: 999 properties found</h2>
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
    
    <!----- Properties Results ----->
    <div 
      class="properties-container flex-space-between"
      v-for="(property, i) in getCities"
      :key="i"
    >
      <div
        v-for="(pckge, pckgeKey) in property.packages"
        :key="pckgeKey"
        class="flex-space-between properties-row"
      >
        <!-- Property Details -->
        <div>
          <div class="property-details flex-nowrap">
            <PropertyImages
              :heroImage="property.property.heroImage.url"
              :gallery="property.property.gallery"
            />
            <div class="details-container">
              <h2 class="heading-h2">{{ property.property.name }}</h2>
              <div class="text-12">80 Collyer quay, Marina Bay, Singapore, Singapore, 049326 (view map)</div>
              <div class="mt-2 text-12 ellipsis">
                {{ property.property.reviews ? property.property.reviews.summary.text : "" }}
              </div>

              <div class="flex-wrap mt-3">
                <div 
                  class="text-12 flex-wrap"
                >
                  <div
                    v-for="(label, labelKey) in displayLabel(pckge).slice(0, 3)"
                    :key="labelKey"
                    class="labels-box"
                  >
                    {{ label }}
                  </div>
                  <div 
                    v-if="displayLabel(pckge).length > 3 "
                    class="labels-box"
                  >
                    <v-tooltip bottom class="tooltip-top">
                      <template v-slot:activator="{ on, attrs }">
                        <span
                          v-bind="attrs"
                          v-on="on"
                        >
                          + {{ displayLabel(pckge).length - 3 }}
                        </span>
                      </template>
                      <div class="flex-wrap">
                        <div 
                          v-for="(label, labelKey) in displayLabel(pckge)" 
                          :key="labelKey"
                          style="flex: 50%;"
                        >
                          <svg t="1654529491236" class="mb-n1 icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2191" width="19" height="19"><path d="M864.554667 268.501333a42.666667 42.666667 0 0 1 0 60.330667L412.032 781.397333a42.453333 42.453333 0 0 1-22.613333 11.818667l-5.034667 0.597333H379.306667a42.496 42.496 0 0 1-27.648-12.416l-211.2-211.2a42.666667 42.666667 0 1 1 60.330666-60.330666l180.992 180.992 422.4-422.4a42.666667 42.666667 0 0 1 60.330667 0z" fill="#019501" p-id="2192"></path></svg>
                          {{ label }}
                        </div>
                      </div>
                    </v-tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Reviews and Price -->
        <div class="reviews-and-price-container">
          <div class="reviews-details">
            <div class="reviews-image-container">
              <img 
                src="https://s3-alpha-sig.figma.com/img/0c15/fc3b/7a8df3ed8b4da1590034f1a754910d6c?Expires=1655078400&Signature=Fs8lePa0zJQfGZC2KTUdcuqZKAvTkSv4JF5EIX0LwadnE1jxgV5kqjpDgMYbiU8NK4lZtiNqFdeITJv8dik7a3SoggjBCCQaOHAsifuQS-mJ5cwBqzsq2xKRlQzT2~PLeeuyX2cGkqh3f-RHtYny54YdOX8qzOA8b4UyJ-JoFkLR7GAyfuM6x9G3fxr79O-Yq-IpthLZ8xpMwpvB9y~Jtt-Z6tvPK796sdxK5v9YlrQfOpAvlHfV9qNLk3fjZTM6oIHHdstE-oSaaCVPgN1RShtVilYUA-6Q8uu1MIajpX3W3hiYgLICkaBons6HhrV-t3~Q-9vbL9ZVaLEOwnL2MQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" 
                alt="reviews-image"
                class="reviews-image"
              />
            </div>
          </div>
          <div class="sale-display">
            {{ displayRate(pckge) }}
          </div>
          <div class="light-text text-12" style="display: flex; flex-direction: row-reverse; padding-right: 1rem;">
            Nightly avg.
          </div>
          <div class="price-details">
            <div class="flex-space-between">
              <span class="light-text text-12" style="margin-top: 9px; margin-right: 0.3rem; text-decoration: line-through" v-if="pckge.displayRate.value > pckge.adjustedDisplayRate.value">
                SGD {{ pckge.displayRate.value }}
              </span>
              <h1 class="heading-h1">
                SGD {{ pckge.adjustedDisplayRate.value }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PropertyImages from "@/components/Images/PropertyImages"
import Button from "@/components/Buttons/Button"
import { mapGetters } from "vuex"

export default {
  name: "PropertiesList",
  components: {
    PropertyImages,
    Button
  },
  data() {
    return {
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
    ...mapGetters("cities",[
      "getCities"
    ])
  },

  methods: {
    displayLabel(pckge) {
      let labels = [
        "Breakfast",
        "Free cancellation",
        "Lunch",
        "Pay later",
        "Dinner",
        "Pay at hotel",
        "Half board",
        "Full board"
      ]
      if(!pckge.nonRefundable) {
        labels.splice(1, 1)
      }
      if(!pckge.payLater) {
        labels.splice(3, 1)
      }  
      if (pckge.payAtHotel) {
        labels.splice(5, 1)
      }  
      if (pckge.food) {
        labels.splice(7, 1)
      }
      return labels
    },

    displayRate(pckge) {
      let origRate = pckge.displayRate.value
      let adjustedRate = pckge.adjustedDisplayRate.value
      if(origRate > adjustedRate) {
        let percentage = Math.round((adjustedRate * 100) / origRate)
        return `SAVE ${percentage}% TODAY!`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.properties-list-wrapper {
  min-width: 750px;
}

.v-tooltip__content {
  background-color: #333 !important;
}

.v-tooltip__content::before {
  border-right: solid 8px transparent;
  border-left: solid 8px transparent;
  transform: translateX(-50%);
  position: absolute;
  z-index: -21;
  content: '';
  bottom: 100%;
  left: 50%;
  height: 0;
  width: 0;
}
.v-tooltip__content::before{
  border-bottom: solid 8px #333 !important;
}

.header-filters {
  min-width: 100%;
  background-color: transparent;
  overflow: hidden;
  border-radius: 5px;

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

.sale-display {
  background-color: #00A1E5;
  max-height: 20px;
  font-size: 12px;
  color: #FFF;
  text-align: center;
  margin: auto;
  padding: 0 0.3rem;
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

.labels-box {
  border: 1.5px solid $secondary;
  color: $secondary;
  padding: 0 0.3em;
  margin-right: 0.5em;
}

.reviews-details {
  display: flex;
  flex-direction: row-reverse;
  padding-right: 1rem;
}

.reviews-and-price-container {
  display: flex;
  flex-direction: column;
  width: 28%;
}

.reviews-image-container {
  width: 146px;
  height: 50.5px;

  img.reviews-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.price-details {
  padding: 0;
  display: flex;
  flex-direction: row-reverse;
  padding-right: 1rem;
}
</style>