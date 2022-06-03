<template>
  <v-dialog
    v-model="dialog"
    :persistent="false"
    max-width="500px"
    style="overflow-y:hidden;"
  >
    <v-card>
      <div class="px-5 py-3" style="border-bottom: 1px solid #c5c6c7">
        <h1 @click="closeModal" style="font-size: 1.3rem; float: right; margin-right: 10px; cursor: pointer">X</h1>
        <h1 style="font-size: 1.32rem">Report</h1>
      </div>
      <v-row no-gutters class="px-5 pt-4" style="max-height: 500px">
        <v-col 
          class="mt-2" 
          cols="12"
          md="12"
          sm="12"
        >
          <p style="font-size: 18px"><b>Select a reason</b></p>
          <p>Let's improve the app by reporting inappropriate posts.</p>
          <v-radio-group
            v-model="requestData.reason"
            row
          >
            <v-row no-gutters>
              <v-col cols="12">
                <v-radio
                  v-for="(reason, index) in reasonsList"
                  :key="index"
                  class="mt-2"
                  :label="reason"
                  :value="reason"
                ></v-radio>
              </v-col>
            </v-row>
          </v-radio-group>
        </v-col>
        <v-col cols="12" v-if="requestData.reason == 'Others'">
          <TextField
            label="If others, please specify reason."
            placeholder="Reason"
            cols="8"
            lg="8"
          />
        </v-col>
        <v-col class="pt-4 pb-5" cols="12">
          <div style="display: flex; justify-content: space-between;">
            <div></div>
            <div>
              <Button 
                type="none" 
                width="20%"
                @click="closeModal"
              >
                Cancel
              </Button>
              <Button 
                type="primary" 
                width="50%"
                @click="submitReport"
              >
                Submit
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
  name: 'ReportPopup',
  props: {
    questionId: {
      type: String
    }
  },
  data() {
    return {
      dialog: true,
      requestData: {
        reason: ''
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
      this.$emit('toggle-report-modal', false)
    }
  },

  methods: {
    closeModal() {
      this.dialog = false
      this.$emit('toggle-report-modal', false)
    },

    async submitReport() {
      try {
        // API Request
        const response = await this.$API.QuestionsAPI.report({
          reason: this.requestData.reason,
          id: this.questionId,
          type: 'question_id'
        })
        // API Response
        const responseBody = response.data.body
        if(responseBody.success) {
          this.dialog = false
          this.$store.commit('SUCCESS', {
            show: true,
            text: responseBody.message
          })
        } else {
          this.$store.commit('ERROR', {
            show: true,
            text: responseBody.message
          })
        }
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>