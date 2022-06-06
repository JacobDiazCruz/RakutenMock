<template>
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
    <div class="light-text text-12 avg-text">
      Nightly avg.
    </div>
    <div class="price-details">
      <div class="flex-space-between">
        <span class="light-text text-12 display-rate-text" v-if="pckge.displayRate.value > pckge.adjustedDisplayRate.value">
          SGD {{ pckge.displayRate.value }}
        </span>
        <h1 class="heading-h1">
          SGD {{ pckge.adjustedDisplayRate.value }}
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PriceDetails",
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
<style scoped lang="scss">
.price-details {
  padding: 0;
  display: flex;
  flex-direction: row-reverse;
  padding-right: 1rem;
}

.reviews-details {
  display: flex;
  flex-direction: row-reverse;
  padding-right: 1rem;
}

.reviews-and-price-container {
  display: flex;
  flex-direction: column;
  width: 33%;
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

.sale-display {
  background-color: #00A1E5;
  max-height: 20px;
  font-size: 12px;
  color: #FFF;
  text-align: center;
  margin: 5.5rem 1rem auto auto;
  padding: 0 0.3rem;
}

.avg-text {
  display: flex; 
  flex-direction: row-reverse; 
  padding-right: 1rem;
}

.display-rate-text {
  margin-top: 0.5625rem; 
  margin-right: 0.3rem;
  text-decoration: line-through
}
</style>