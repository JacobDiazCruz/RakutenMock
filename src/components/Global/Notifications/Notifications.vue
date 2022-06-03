<template>
  <div class="notif-dropdown-container" v-if="notifDropdown">
    <div class="notifications-wrapper" v-if="notifDropdown">
      <div class="notifications-container">
        <div class="notifications-row">
          <div 
            class="notifications-col" 
            v-for="(notif, index) in notifList" 
            :key="index"
            @click="$router.push('/claim-reward')"
          >
            <div>
              <img
                :src="notif.image"
                width="60"
                height="60"
                style="border-radius: 100%"
              />
            </div>
            <div class="pl-3 pt-2">
              <div v-html="notif.text" class="notif-content"></div>
              <p class="notif-time">1 hour ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: 'ProfileDropdown',

  props: {
    notifDropdown: {
      type: Boolean
    }    
  },

  data() {
    return {
      notifList: [
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg',
          text: "Hi! Here's the meme that you recently <b>purchased.</b>"
        },
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg',
          text: 'Congratulations! You have been chosen as a <b>winner</b>! kindly wait for another notification regarding the reward.'
        },
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg',
          text: 'Congratulations! You have been chosen as a <b>winner</b>! kindly wait for another notification regarding the reward.'
        },
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg',
          text: 'Congratulations! You have been chosen as a <b>winner</b>! kindly wait for another notification regarding the reward.'
        },
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg',
          text: 'Congratulations! You have been chosen as a <b>winner</b>! kindly wait for another notification regarding the reward.'
        },
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg',
          text: 'Congratulations! You have been chosen as a <b>winner</b>! kindly wait for another notification regarding the reward.'
        },
      ]
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.notif-dropdown-container {
  position: fixed;
  top: 65px;
  right: 0;
  margin-right: 150px;
  background-color: #FFF;
  color: #000;
  padding: 1em 0.8em 1em 0.8em;
  width: 350px;
  margin-left: 0px;
  border-radius: 4px;
  box-shadow: 0px 3px 6px #0000001A;

  p {
    font-weight: 500;
    font-size: 16px;
  }

  .dropdown-items {
    padding: 5px 10px;
    display: flex;
    &:hover {
      background-color: rgba(107, 83, 255, 0.1);
    }
  }
}

.notifications-wrapper {
  background-color: #F6F6F9; 
  // padding-top: 50px;
  // min-height: 100vh;
}

.notifications-container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 70px;
}

@media (min-width: 1264px) {
  .notifications-container {
    max-width: 1185px;
  }
}

.notifications-row {
  // width: 50%;
  margin-left: auto;
  margin-right: auto;
  background-color: #FFF;
  // box-shadow: 0 0 0 1px #DDDFE5;

  @include mobile(999px) {
    width: 100% !important;
  }
}

.notifications-col {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  border-bottom: 1px solid #DDDFE5;
}

div.notif-content {
  font-size: 14px;
}

p.notif-time {
  color: $primary;
  font-weight: bold;
  font-size: 12px !important;
}
</style>