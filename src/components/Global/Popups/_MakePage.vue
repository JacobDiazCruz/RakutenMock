<template>
  <v-dialog
    v-model="dialog"
    :persistent="false"
    max-width="500px"
    style="overflow-y:hidden;"
  >
    <v-card>
      <div class="px-5 py-3">
        <h1 @click="closeModal" style="font-size: 1.3rem; float: right; margin-right: 10px; cursor: pointer">X</h1>
        <h1 style="font-size: 1.32rem">Create a Space</h1>
        <p>Create a space for your blogs and writeups</p>
      </div>
      <v-row no-gutters class="px-5 pt-4" style="max-height: 500px">
        <TextField
          v-model="requestData.name"
          label="Name"
          class="border-global-text-field"
          cols="12"
          lg="12"
        />
        <TextField
          v-model="requestData.description"
          class="border-global-text-field mt-3"
          label="Brief description"
          cols="12"
          lg="12"
        />
        <v-col class="pt-4 pb-5" cols="12">
          <div style="display: flex; justify-content: space-between;">
            <div></div>
            <Button 
              type="primary" 
              width="20%"
              @click="$router.push('/space')"
            >
              Create
            </Button>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'MakePage',
  data() {
    return {
      dialog: true,

      requestData: {
        name: '',
        description: ''
      },

      required: [
        v => !!v || 'This field is required.'
      ],

      reasonsList: [
        'Spam', 
        'Contains inappropriate words', 
        'Abusive post', 
        'Others'
      ],
    }
  },
  watch: {
    dialog(oldVal, newVal) {
      this.$emit('show-make-page', false)
    }
  },

  methods: {
    closeModal() {
      this.dialog = false
      this.$emit('show-make-page', false)
    },
  }
}
</script>