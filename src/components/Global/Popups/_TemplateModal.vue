<template>
  <v-dialog
    v-model="dialog"
    :persistent="false"
    max-width="800px"
  >
    <v-card>
      <div class="px-5 py-3">
        <h1 @click="closeModal" style="font-size: 1.3rem; float: right; margin-right: 10px; cursor: pointer">X</h1>
      </div>
      <div>
        <h1>qweqwe</h1>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
import GlobalMixin from '@/mixins/global'

export default {
  name: 'Checkout',
  mixins: [GlobalMixin], 

  props: {
    contentData: {
      type: Object,
      default: {}
    }
  },

  data() {
    return {
      dialog: true,
      step: 3,
      selectPaypal: false,
      selectCard: true,

      file: {
        file_name: '',
        path: ''
      },

      requestData: {
        fileToUpload: null,
        tags: []
      },
    }
  },

  watch: {
    dialog(oldVal, newVal) {
      this.$emit('toggle-submit-modal', false)
    }
  },

  methods: {
    closeModal() {
      this.dialog = false
      this.$emit('toggle-submit-modal', false)
    },

    fnChooseCard() {
      this.selectPaypal = false
      this.selectCard = true
    },

    fnChoosePaypal() {
      this.selectCard = false
      this.selectPaypal = true
    },

    /**
    * type: Upload Local image
    * Description: upload local image (vuex)
    * @type { input }
    */
    handleFileUpload(e) {
      let files = e.target.files || e.dataTransfer.files;
      this.requestData.fileToUpload = files[0]
      if (!files.length) return;
      this.createImage(files[0]);
      const data = {
        file_name: files[0].name,
        path: files[0]
      };
      this.file.file_name = data.file_name;
      this.file.path = data.path;
    },

    createImage(file) {
      let image = new Image();
      let reader = new FileReader();

      reader.onload = e => {
        this.file.path = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    removeFile() {
      this.file.file_name = ''
      this.file.path = ''
      this.requestData.fileToUpload = ''
    },

    async updateContent() {
      try {
        const requestData = {
          title: this.contentData.title,
          slug: this.contentData.slug,
          body: this.contentData.body,
          tags: this.requestData.tags,
          type_of_application: '',
          status: 'unpublished',
          marketing_link: this.contentData.marketing_link
        }
        let formData = new FormData()
        formData.append('file', this.requestData.fileToUpload)
        formData.append('body', JSON.stringify(requestData))
        const response = await this.$API.ContentsAPI.updateData({
          requestData: formData,
          contentId: this.contentData._id,
          accessToken: this.$store.getters.GET_accessToken
        })
        const data = response.data.body.data
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/styles/variables.scss";
.payment-wrapper {
  background-color: #FFF;
}

.payment-container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 0 40px 0;

  @include minWidth(1264px) {
    max-width: 1150px;
  }
}

.payment-box {
  border-radius: 13px;
  background-color: #FFF;
  padding: 0 40px;
}

.border-right {
  border-right: 1px solid #dddddd;
}

.stepper-container {
  width: 680px;
  margin: auto;
  display: block;
}

h1.payment-heading {
  font-size: 18px;
  font-weight: 900;
}

h3.payment-h3 {
  font-size: 14px;
}

.payment-options-row {
  display: flex;
}

.payment-options-col {
  padding: 0em 1.5em;
  margin: 0 1.5em 0 0;
  background-color: $input;
  cursor: pointer;
  // border: 1px solid #dddddd;
  border-radius: 4px;
}

.checkout-row {
  display: flex;
  justify-content: center;
}

.payment-options-col.isActive {
  border: 2px solid blue;
}

.paypal-container {
  margin: 10px;
}
</style>