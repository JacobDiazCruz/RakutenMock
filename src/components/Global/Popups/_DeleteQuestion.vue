<template>
  <v-dialog
    v-model="dialog"
    :persistent="false"
    max-width="400px"
    style="overflow-y:hidden;"
  >
    <v-card>
      <div class="px-5 py-3" style="border-bottom: 1px solid #c5c6c7">
        <h1 @click="closeModal" style="font-size: 1.3rem; float: right; margin-right: 10px; cursor: pointer">X</h1>
        <h1 style="font-size: 1.32rem">Delete Question?</h1>
      </div>
      <v-row no-gutters class="px-5 pt-4" style="max-height: 500px">
        <v-col cols="12">
          <p>Are you sure you want to delete this question? <br/>All answers and comments inside would be lost.</p>
        </v-col>
        <v-col class="pt-4 pb-5">
          <div style="display: flex; justify-content: space-between;">
            <div></div>
            <div>
              <Button 
                type="none" 
                width="20%"
                @click="closeModal"
              >
                No
              </Button>
              <Button 
                type="primary" 
                width="20%"
              >
                Yes
              </Button>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'DeleteQuestion',
  data() {
    return {
      dialog: true,
      form: {
        role: ''
      },

      required: [
        v => !!v || 'This field is required.'
      ],

      roleList: ['Software Architect', 'Software Engineer', 'Others'],
    }
  },
  watch: {
    dialog(oldVal, newVal) {
      this.$emit('toggle-delete-modal', false)
    }
  },

  methods: {
    closeModal() {
      this.dialog = false
      this.$emit('toggle-delete-modal', false)
    },
  }
}
</script>