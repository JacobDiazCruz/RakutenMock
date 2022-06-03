<template>
  <div>
    <div class="main-image">
      <img 
        src="https://s3-alpha-sig.figma.com/img/91d2/f63e/11f1eaf5a3de169f60750694b1c57fb3?Expires=1655078400&Signature=AGIozhW59yw4kOGqkxnchB7o1hWwNNMZe1IicgL4tzmAZfmS~alXqpm04Hhz8bgIa0si2tduVWqxL5fDsEHbi~h20mpzmsk1mB~C8SX0~Bx8-8465pd10H3nXnBPCP8Pep6bLvgm-yTfjjcfht7D1Bd70VCVNlYB8GHrryZpWPbP8VQA0djobvMJy9Hjmp2y3cnmTBYS6EZLRhQXhwBi8XFcz~ieRNdZpYgUC3K7rLLY~yS7lG6-g7gfbBh86iyMbw7ZWoufD12-IFGXjtpA4Xdlgs2eJ8tcAMHVIBqojW72Orv9eHSCIq1cqkfGWBdHQeScuiyO~XS2dlFQ6Nvhmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt="property-image"
        class="main-property-image"
      />
    </div>
    <div class="sub-images flex-space-between mt-1">
      <div 
        v-for="(image, imageKey) in subImages"
        :key="imageKey"
        class="sub-image-container">
        <img 
          :src="image.path"
          alt="property-image"
          class="sub-property-image"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PropertyImages",
  data() {
    return {
      subImages: [
        {
          path: 'https://s3-alpha-sig.figma.com/img/91d2/f63e/11f1eaf5a3de169f60750694b1c57fb3?Expires=1655078400&Signature=AGIozhW59yw4kOGqkxnchB7o1hWwNNMZe1IicgL4tzmAZfmS~alXqpm04Hhz8bgIa0si2tduVWqxL5fDsEHbi~h20mpzmsk1mB~C8SX0~Bx8-8465pd10H3nXnBPCP8Pep6bLvgm-yTfjjcfht7D1Bd70VCVNlYB8GHrryZpWPbP8VQA0djobvMJy9Hjmp2y3cnmTBYS6EZLRhQXhwBi8XFcz~ieRNdZpYgUC3K7rLLY~yS7lG6-g7gfbBh86iyMbw7ZWoufD12-IFGXjtpA4Xdlgs2eJ8tcAMHVIBqojW72Orv9eHSCIq1cqkfGWBdHQeScuiyO~XS2dlFQ6Nvhmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
          path: 'https://s3-alpha-sig.figma.com/img/91d2/f63e/11f1eaf5a3de169f60750694b1c57fb3?Expires=1655078400&Signature=AGIozhW59yw4kOGqkxnchB7o1hWwNNMZe1IicgL4tzmAZfmS~alXqpm04Hhz8bgIa0si2tduVWqxL5fDsEHbi~h20mpzmsk1mB~C8SX0~Bx8-8465pd10H3nXnBPCP8Pep6bLvgm-yTfjjcfht7D1Bd70VCVNlYB8GHrryZpWPbP8VQA0djobvMJy9Hjmp2y3cnmTBYS6EZLRhQXhwBi8XFcz~ieRNdZpYgUC3K7rLLY~yS7lG6-g7gfbBh86iyMbw7ZWoufD12-IFGXjtpA4Xdlgs2eJ8tcAMHVIBqojW72Orv9eHSCIq1cqkfGWBdHQeScuiyO~XS2dlFQ6Nvhmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
          path: 'https://s3-alpha-sig.figma.com/img/91d2/f63e/11f1eaf5a3de169f60750694b1c57fb3?Expires=1655078400&Signature=AGIozhW59yw4kOGqkxnchB7o1hWwNNMZe1IicgL4tzmAZfmS~alXqpm04Hhz8bgIa0si2tduVWqxL5fDsEHbi~h20mpzmsk1mB~C8SX0~Bx8-8465pd10H3nXnBPCP8Pep6bLvgm-yTfjjcfht7D1Bd70VCVNlYB8GHrryZpWPbP8VQA0djobvMJy9Hjmp2y3cnmTBYS6EZLRhQXhwBi8XFcz~ieRNdZpYgUC3K7rLLY~yS7lG6-g7gfbBh86iyMbw7ZWoufD12-IFGXjtpA4Xdlgs2eJ8tcAMHVIBqojW72Orv9eHSCIq1cqkfGWBdHQeScuiyO~XS2dlFQ6Nvhmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
          path: 'https://s3-alpha-sig.figma.com/img/91d2/f63e/11f1eaf5a3de169f60750694b1c57fb3?Expires=1655078400&Signature=AGIozhW59yw4kOGqkxnchB7o1hWwNNMZe1IicgL4tzmAZfmS~alXqpm04Hhz8bgIa0si2tduVWqxL5fDsEHbi~h20mpzmsk1mB~C8SX0~Bx8-8465pd10H3nXnBPCP8Pep6bLvgm-yTfjjcfht7D1Bd70VCVNlYB8GHrryZpWPbP8VQA0djobvMJy9Hjmp2y3cnmTBYS6EZLRhQXhwBi8XFcz~ieRNdZpYgUC3K7rLLY~yS7lG6-g7gfbBh86iyMbw7ZWoufD12-IFGXjtpA4Xdlgs2eJ8tcAMHVIBqojW72Orv9eHSCIq1cqkfGWBdHQeScuiyO~XS2dlFQ6Nvhmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.main-image {
  width: 200px;
  height: 160px;
  overflow: hidden;

  img.main-property-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.sub-image-container {
  width: 48px;
  height: 48px;
  overflow: hidden;

  img.sub-property-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>