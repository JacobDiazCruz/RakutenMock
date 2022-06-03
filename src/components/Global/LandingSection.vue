<template>
  <div class="landing-wrapper">
    <div class="top-margin">
      <div style="padding: 20px;">
        <h1>Promoting <br/> software architects &amp; backend devs</h1>
        <p>Submit your architecture and let the top juries <br/>vote for your scores.</p>
        <button class="visit-btn mt-7">More info</button>
      </div>
      <div>
        <div style="width: 320px; margin-left: 150px;">
          <LandingIcon/>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.landing-wrapper {
  background-color: rgb(20, 21, 24);
  padding: 60px 50px;
  max-width: 1550px;
  border-radius: 13px;
  margin: 0 auto 70px auto;
}

@media (min-width: 1265px) and (max-width: 1600px) {
  .landing-wrapper {
    max-width: 1130px !important;
  }
}

.top-margin {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  color: $peach;
  font-weight: 800;
  font-size: 46px;
}

p {
  color: #FFF;
  font-size: 22px;
}

button {
  background-color: $peach;
  color: #FFF;
  font-weight: 600;
  border-radius: 50px;
  padding: 10px 20px;
}
</style>