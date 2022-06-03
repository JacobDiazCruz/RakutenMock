<template>
  <div class="map-section">
    <div 
      class="map-image-container"
      :style="{
        backgroundImage: `url(https://s3-alpha-sig.figma.com/img/b99e/5cf0/e3ff5b67c6aab0316ce06a67ab71910b?Expires=1655078400&Signature=StQxQydFHfgIEcQhRb~tQaShN1LNd9PH9HFvEgRYhdXRUOgv~DwHu2ajFvtl7MDBEfoG2s~j4Zh94~xFlplelSsbEX3SGEXyD-p~Vv6sfgd63i6fJ5bNbW3cV8pOxQDQiAvuXlcxO7PPs0EcH1nISYb1qWbObPhbgYcN0OpEas8Nn1zM8fea5Bs58K1cP4g7eUhKI-du~ICs92VzQYhzG4-EZw18c1LWtKZpPEzjDacdMbjZFpNYongcD1HmRscXLxDb9E0HuJf55Kvae1-cuzW1b6W-jhi6cIbcy0ZnCbNi1bYTNzo5ISUikHaB5UcDNbTG6QEGYigT4YIez2vJqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)`
      }"
    >
      <div class="map-content">
        <Button 
          type="primary"
          class="show-map-btn"
        >
          Show on map
        </Button>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Buttons/Button"

export default {
  name: "MapSection",
  components: {
    Button
  }
}
</script>
<style lang="scss" scoped>
.map-image-container {
  width: 290px;
  height: 100px;
  overflow: hidden;
  background-size: cover;

  .map-content {
    margin: auto;
    width: 50%;
    padding-top: 5vh;
  }

  .show-map-btn {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>