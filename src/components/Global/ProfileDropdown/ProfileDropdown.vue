<template>
  <div 
    class="profile-dropdown-container" 
    v-if="openDropdown" 
  >
    <div style="display: flex;">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg"
          height="60"
          width="60"
          style="border-radius: 100%"
        />
      </div>
      <div class="pl-3 pt-2">
        <p><b>John Doe</b></p>
        <p>Meme Engineer</p>
      </div>
    </div>
    <div @click="$router.push('/profile')" class="view-profile mt-1 mb-3">
      <p>View Profile</p>
    </div>
    <v-divider></v-divider>
    <div @click="$router.push('/')" class="dropdown-items mt-3 mb-3">
      <div>
        <svg t="1621834888128" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5158" width="23" height="23"><path d="M800.038 960.01H223.962c-52.98 0-95.984-43.003-95.984-95.983V224.134c0-52.98 43.004-95.983 95.984-95.983h447.925c17.718 0 31.995 14.277 31.995 31.994s-14.277 31.995-31.995 31.995H223.962c-17.545 0-31.994 14.449-31.994 31.994v639.893c0 17.717 14.449 31.995 31.994 31.995h575.904c17.717 0 31.994-14.278 31.994-31.995V351.94c0-17.718 14.277-31.995 31.995-31.995 17.717 0 31.994 14.277 31.994 31.995v511.914c0.173 52.98-43.003 96.156-95.811 96.156zM612.026 447.926c-8.256 0-16.341-3.097-22.706-9.461a31.873 31.873 0 0 1 0-45.24L907.374 75.342c12.557-12.557 32.683-12.557 45.24 0s12.557 32.683 0 45.24L634.56 438.636c-6.192 6.192-14.45 9.289-22.534 9.289z m-132.107 0H287.952c-17.718 0-31.995-14.277-31.995-31.995s14.277-31.995 31.995-31.995h191.967c17.718 0 31.995 14.278 31.995 31.995 0 17.718-14.277 31.995-31.995 31.995z m192.14 191.967H287.952c-17.718 0-31.995-14.277-31.995-31.994s14.277-31.995 31.995-31.995h383.935c17.718 0 31.995 14.277 31.995 31.995s-14.277 31.994-31.823 31.994z" p-id="5159"></path></svg>
      </div>
      <p class="ml-3">Give Feedback</p>
    </div>
    <v-divider></v-divider>
    <div @click="$router.push('/create-page')" class="dropdown-items mt-3">
      <div>
        <svg t="1621834851298" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4251" width="23" height="23"><path d="M865.28 640H297.6l186.432 194.24-43.296 45.44L149.504 576H865.28v64z m5.536-192H155.04v-64h567.392L535.968 189.76l43.616-45.44L870.784 448z" p-id="4252"></path></svg>
      </div>
      <p class="ml-3">Switch as Client</p>
    </div>
    <div @click="$router.push('/')" class="dropdown-items mt-3">
      <div>
        <svg t="1621834778357" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3328" width="23" height="23"><path d="M765.395478 667.158261l51.734261 51.712L1024 512l-206.870261-206.870261-51.734261 51.712 118.583652 118.583652H365.746087v73.149218H883.97913z" p-id="3329" fill="#333333"></path><path d="M821.693217 822.316522a435.934609 435.934609 0 0 1-310.316521 128.534261 436.023652 436.023652 0 0 1-310.316522-128.534261C118.160696 739.439304 73.149217 629.225739 73.149217 512c0-117.203478 45.011478-227.417043 127.910957-310.316522a436.023652 436.023652 0 0 1 310.316522-128.534261c117.225739 0 227.417043 45.634783 310.316521 128.534261 5.787826 5.787826 11.353043 11.709217 16.762435 17.741913h93.094957C839.034435 86.817391 685.345391 0 511.398957 0 228.61913 0 0 229.242435 0 512c0 282.779826 228.61913 512 511.398957 512 173.968696 0 327.657739-86.79513 420.151652-219.425391h-93.094957a445.217391 445.217391 0 0 1-16.762435 17.741913z" p-id="3330"></path></svg>
      </div>
      <p class="ml-3">Log out</p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: 'ProfileDropdown',

  props: {
    openDropdown: {
      type: Boolean
    }    
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.profile-dropdown-container {
  position: fixed;
  top: 60px;
  right: 0;
  margin-right: 150px;
  z-index: 100;
  background-color: #FFF;
  color: #000;
  padding: 1em 0.8em 1em 0.8em;
  width: 300px;
  margin-left: -180px;
  border-radius: 4px;
  box-shadow: 0px 3px 6px #0000001A;
  margin-top: 0.5rem;

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

.view-profile {
  border-radius: 50px;
  border: 1px solid $primary;
  padding: 0.1em 1em 0.1em 1em;
  text-align: center;
  color: $primary;
}
</style>