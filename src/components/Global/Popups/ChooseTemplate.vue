<template>
  <v-dialog
    v-model="dialog"
    :persistent="false"
    max-width="1000px"
    style="overflow-y:hidden;"
  >
    <v-card>
      <div class="flex-space-between px-15 py-5">
        <h1>Select a template</h1>
        <h1 @click="closeModal" style="font-size: 1.3rem; float: right; margin-right: 10px; cursor: pointer">X</h1>
      </div>
      <div class="pb-5">
        <div class="template-flex">
          <div class="template-col" v-for="(template, key) in templatesList" :key="key">
            <div class="template-image">
              <img :src="template.imageUrl">
            </div>
            <h2>{{ template.name }}</h2>
          </div>
        </div>

        <div class="flex-space-between px-15 py-5">
          <p></p>
          <Button type="primary">Select</Button>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'Signin',
  data() {
    return {
      dialog: true,
      templatesList: [
        { name: 'Blank template', imageUrl: 'https://image.freepik.com/free-vector/white-crumpled-paper-sheet-texture-background_1017-31714.jpg' },
        { name: 'Default template', imageUrl: 'https://image.freepik.com/free-vector/big-isolated-employee-working-office-workplace-flat-illustration_1150-41780.jpg' },
        { name: 'Company template', imageUrl: 'https://image.freepik.com/free-vector/tiny-content-writers-creating-web-articles-flat-illustration_74855-15537.jpg' },
      ]
    }
  },

  watch: {
    dialog(oldVal, newVal) {
      this.$emit('toggle-modal', false)
    }
  },

  methods: {
    closeModal() {
      this.dialog = false
      this.$emit('toggle-modal', false)
    },
  }
}
</script>
<style scoped lang="scss">
.signup-link {
  cursor: pointer;
}

.template-flex {
  display: flex;
  position: relative;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

}

.template-col {
  border: 1px solid rgba(0,0,0,.1)!important;
  border-radius: 4px;
  padding: 20px 0;
  width: 270px;
  height: 200px;
  margin: 15px 15px;
  text-align: center;

  h2 {
    font-size: 16px;
  }
}

.template-image {
  width: 200px;
  height: 145px;
  margin: auto;

  img {
    width: 100%;
  }
}
</style>