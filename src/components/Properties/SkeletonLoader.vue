<template>
  <div>
    <div
      class="flex-space-between mt-5 ml-1"
      v-for="i in 2"
      :key="i"
    >
      <v-skeleton-loader
        v-bind="attrs"
        type="button"
        class="image-loader"
      ></v-skeleton-loader>
      <div class="mt-2">
        <v-skeleton-loader
          v-bind="attrs"
          type="button"
          class="long-line mt-2"
          v-for="n in 3"
          :key="n"
        ></v-skeleton-loader>
        <v-skeleton-loader
          v-bind="attrs"
          type="button"
          class="short-line mt-7"
        ></v-skeleton-loader>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SkeletonLoader"
}
</script>