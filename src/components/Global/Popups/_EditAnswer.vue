<template>
  <v-dialog
    v-model="dialog"
    :persistent="false"
    max-width="780px"
    style="overflow-y:hidden;"
  >
    <v-card>
      <div class="px-5 py-3" style="border-bottom: 1px solid #c5c6c7">
        <h1 @click="closeModal" style="font-size: 1.3rem; float: right; margin-right: 10px; cursor: pointer">X</h1>
        <h1 style="font-size: 1.32rem">Edit Answer</h1>
      </div>
      <div class="your-answer-container mt-5 ml-2">
        <div class="pl-3">
          <div>
            <client-only>
              <Editor v-model="requestData.answer"/>
            </client-only>
          </div>
          <div class="mt-3 pr-8 pb-6" style="display: flex; justify-content: space-between">
            <div></div>
            <div style="width: 25%">
              <Button 
                @click="editAnswer"
                :loading="loading.answerBtn"
                type="primary" 
                width="100%"
              >
                Submit Answer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
import Editor from '@/components/Editor'
import { mapMutations } from "vuex";

export default {
  name: 'EditAnswer',
  components: {
    Editor
  },
  props: {
    answerData: {
      type: Object
    }
  },

  data() {
    return {
      dialog: true,
      requestData: {
        answer: ''
      },
      loading: {
        answerBtn: false,
        answerData: true
      },

      required: [
        v => !!v || 'This field is required.'
      ],
    }
  },

  watch: {
    dialog(oldVal, newVal) {
      this.$emit('toggle-edit-modal', false)
    }
  },

  mounted() {
    this.requestData.answer = this.answerData.body
  },

  methods: {
    closeModal() {
      this.dialog = false
      this.$emit('toggle-edit-modal', false)
    },

    async editAnswer() {
      this.loading.answerBtn = true
      try {
        const requestData = {
          body: this.requestData.answer
        }
        const response = await this.$API.AnswersAPI.editData(this.answerData._id, requestData)
        const responseBody = response.data.body
        if(responseBody.success) {
          this.$emit('answers-remount')
          this.dialog = false 
          this.$store.commit('SUCCESS', { 
            show: true, 
            text: 'Answer updated successfully.'
          })
        } else {
          this.$store.commit('ERROR', { 
            show: true, 
            text: responseBody.error
          })
        }
      } catch(err) {
        console.log(err)
      } finally {
        this.loading.answerBtn = false
      }
    },
  }
}
</script>