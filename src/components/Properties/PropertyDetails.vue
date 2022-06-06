<template>
  <div class="details-container">
    <div class="flex-nowrap">
      <h2 class="heading-h2">{{ property.property.name }}</h2>
      <div class="flex-nowrap ratings-container">
        <StarIcon v-for="i in 5" :key="i"/> 
      </div>
    </div>
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
</template>
<script>
import StarIcon from "@/components/Icons/StarIcon"

export default {
  name: "PropertyDetails",
  components: {
    StarIcon
  },
  props: {
    pckge: {
      type: Object,
      default: ()=> {}
    },
    property: {
      type: Object,
      default: ()=> {}
    }
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
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.details-container {
  padding-left: 1rem;  
}

.labels-box {
  border: 1.5px solid $secondary;
  color: $secondary;
  padding: 0 0.3em;
  margin-right: 0.5em;
}

.ratings-container {
  margin: 0.3rem 0 0 0.3rem;
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
</style>