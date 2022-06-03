<template>
  <div class="properties-list-wrapper">
    <div class=""></div>
    <div 
      class="properties-container flex-space-between"
      v-for="(property, i) in 2"
      :key="i"
    >
      <!-- Property Details -->
      <div class="flex-space-between">
        <div class="property-details flex-nowrap">
          <PropertyImages/>
          <div class="details-container pl-4">
            <h2 class="heading-h2">The Fullerton Bay Hotel</h2>
            <p>80 Collyer quay, Marina Bay, Singapore, Singapore, 049326 (view map)</p>

            <div class="mt-2">
              <p>“Excellent boutique hotel. Great rooms in excellent location. Awesome vibe. Beautiful beac...</p>
            </div>

            <div class="flex-wrap mt-3">
              <div class="labels-box text-12">
                Breakfast
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
        <div class="price-details">
          <!-- <span>SGD 120</span> -->
          <h1 class="heading-h1">SGD 100</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PropertyImages from "@/components/Images/PropertyImages"
export default {
  name: "PropertiesList",
  components: {
    PropertyImages
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.properties-list-wrapper {
  min-width: 750px;
}

.properties-container {
  background-color: #FFF;
  min-width: 100%;
  max-width: 100%;
  border-radius: 5px;
  padding: 1em;
  margin-bottom: 0.5em;
}

.property-details {
  max-width: 85%;
}

.labels-box {
  border: 1.5px solid $secondary;
  color: $secondary;
  padding: 0 0.3em;
}

.reviews-details {
  flex: 1 0 auto;
}

.reviews-and-price-container {
  display: flex; 
  flex-direction: column;
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
  flex-shrink: 0; padding: 20px;
}
</style>