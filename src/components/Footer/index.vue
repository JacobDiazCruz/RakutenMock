<template>
  <div class="footer-wrapper">
    <div class="footer-container">
      <div class="footer-row">
        <div class="footer-icon">
          <h2>w.</h2>
        </div>
        <div 
          v-for="(item, index) in footerItems" 
          :key="index"
          class="footer-list mt-5"
        >
          <h4>{{ item.title }}</h4>
          <div v-for="(child, childIndex) in item.children" :key="childIndex">
            <p class="mt-2">{{ child.name }}</p>
          </div>
          <div class=""></div>
        </div>
      </div>
      <div class="pb-8 flex-space-between">
        <div>
          <p>© 2021 w., All Rights Reserved.</p>
        </div>
        <div>
          <svg t="1640087994967" class="icon mr-2 mb-n2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6054" width="30" height="30"><path d="M1024.000427 512c0 282.773333-229.226667 512-512 512S0.000427 794.773333 0.000427 512h1024z" fill="#E94B35" p-id="6055"></path><path d="M1024.000427 512H0.000427C0.000427 229.226667 229.227093 0 512.000427 0s512 229.226667 512 512z" fill="#227FBB" p-id="6056"></path><path d="M149.97376 149.973333L512.000427 512 149.97376 874.026667A510.4 510.4 0 0 1 0.000427 512 510.4 510.4 0 0 1 149.97376 149.973333z" fill="#FFFFFF" p-id="6057"></path><path d="M160.000427 266.666667l-31.36 21.824 11.072-36.565334-30.442667-23.082666 38.186667-0.768L160.000427 192l12.544 36.074667 38.186666 0.768L180.267093 251.946667l11.050667 36.565333zM160.000427 778.666667l-31.36 21.824 11.072-36.565334-30.442667-23.082666 38.186667-0.768L160.000427 704l12.544 36.074667 38.186666 0.768L180.267093 763.946667l11.050667 36.565333zM416.000427 533.333333l-31.36 21.824 11.072-36.565333-30.442667-23.082667 38.186667-0.768 12.544-36.074666 12.544 36.074666 38.186666 0.768-30.442666 23.082667 11.050666 36.565333z" fill="#F2C500" p-id="6058"></path><path d="M192.000427 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#F2C500" p-id="6059"></path><path d="M163.86176 409.770667L192.000427 381.610667l28.138666 28.16-18.773333 65.642666H182.61376l-18.752-65.642666z m91.008 16.853333l39.573333 4.16-4.16 39.594667-62.826666 26.730666-11.797334-14.570666 39.210667-55.893334z m44.032 81.92L320.000427 542.250667l-33.749334 21.098666-59.754666-33.066666 4.224-18.261334 68.181333-3.52z m-36.757333 84.970667l-12.949334 37.632-37.632-12.949334-11.925333-67.242666 16.853333-8.213334 45.653334 50.773334z m-89.706667 24.682666l-37.632 12.949334-12.949333-37.632 45.653333-50.773334 16.853333 8.213334-11.925333 67.242666z m-74.688-54.826666L64.000427 542.272l21.098666-33.749333 68.181334 3.52 4.224 18.261333-59.754667 33.066667z m-4.053333-93.013334l-4.138667-39.573333 39.573333-4.16 39.210667 55.893333-11.797333 14.592-62.826667-26.730666z" fill="#F2C500" p-id="6060"></path></svg>
          <span>Philippines</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeFooter',
  data() {
    return {
      footerItems: [
        {
          title: '',
          children: [
            {
              name: 'Help Center',
              type: 'link',
              link: 'Here'
            },
            {
              name: 'Terms and Conditions',
              type: 'link',
              link: 'Here'
            },
            {
              name: 'Blogs (Coming Soon)',
              type: 'link',
              link: 'Here'
            }
          ]
        },
      ]
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.footer-wrapper {
  background-color: #f5f5f7;
}

.footer-container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  color: #57585a;
  background-color: #f5f5f7;
}

@media (min-width: 1264px) {
  .footer-container {
    max-width: 1400px;
  }
}

@media (min-width: 1265px) and (max-width: 1600px) {
  .footer-container {
    max-width: 1130px !important;
  }
}

.footer-row {
  padding: 40px 0 60px 0px;
  margin: auto;
  text-align: center;
  // display: -webkit-box;
  // display: -ms-flexbox;
  // display: flex;
  // -webkit-box-align: center;
  // -ms-flex-align: center;
  // align-items: center;
  // -webkit-box-pack: justify;
  // -ms-flex-pack: justify;
  // justify-content: space-between;
  // position: relative;
  // -ms-flex-wrap: nowrap;
  // flex-wrap: nowrap;

  @include mobile(999px) {
    padding: 40px 20px;
  }
}

.copyright-footer {
  @include mobile(999px) {
    text-align: center;
  }
}

ul {
  li {
    float: left;
    list-style-type: none;
  }
}
</style>