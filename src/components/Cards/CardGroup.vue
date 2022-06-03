<template>
  <div class="home-cards">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'CardGroup',
  props: {
    itemsList: {
      type: Array,
      default: ()=> []
    }
  }
}
</script>
<script>
export default {
  name: 'Card'
}
</script>
<style scoped lang="scss">
// cards
.home-cards {
  background-color: #FFF;
  border-radius: 4px;
  // box-shadow: 0 1px 9px #e8e8e8;
  border: solid 1px #EAEAEA;
  width: 230px;
  height: 150px;
  margin: 0 15px 0 0;
  padding: 1.5em 1em 1em 1em;
  cursor: pointer;

  h2 {
    font-size: 18px;
  }

  &:hover {
    box-shadow: 0 5px 12px #e8e8e8;
  }
}
</style>