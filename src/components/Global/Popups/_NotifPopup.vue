<template>
  <div class="notif-popup-review">
    <!-- <img src="@/assets/images/hi.png" alt="hi-image" class="hi-image"/> -->
    <div class="notif-popup-content">
      <p>
        Hi there! Help us improve our app by giving your feedback. 
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Notif-Popup',
  data() {
    return {
      open: true
    }
  }
}
</script>
<style scoped>
.notif-popup-review {
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: transparent;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 30px;
  margin-bottom: 30px;
  z-index: 999;
  font-size: 14px;
}

.notif-popup-content {
  padding: 1.2em;
  box-shadow: 0px 5px 12px #0000001A;
  background-color: #FFF;
}

.hi-image {
  width: 50px;
  position: absolute;
  margin-left: -40px !important; 
}
</style>