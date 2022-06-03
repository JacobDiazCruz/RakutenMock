<template>
  <v-dialog
    v-model="dialog"
    :persistent="false"
    max-width="600px"
    style="overflow-y:hidden;"
  >
    <v-card>
      <div class="px-5 py-3">
        <h1 @click="closeModal" style="font-size: 1.3rem; float: right; margin-right: 10px; cursor: pointer">X</h1>
        <h1 style="font-size: 1.32rem">Vote ballot</h1>
        <p>Create a space for your blogs and writeups</p>
      </div>
      <v-row no-gutters class="px-5 pt-4 pb-5">
        <v-col cols="12">
          <h4>Reliability</h4>
          <v-rating
            class="mt-2"
            v-model="rating.reliability"
            length="10"
          >
            <template v-slot:item="props">
              <v-icon
                :color="props.isFilled ? genColor(props.index) : 'grey lighten-1'"
                class="vote-maintainability"
                large
                @click="props.click"
              >
                {{ props.isFilled ? genCount(props.index) : genCount(props.index) }}
              </v-icon>
            </template>
          </v-rating>
        </v-col>
        <v-col cols="12" class="mt-5">
          <h4>Scalability</h4>
          <v-rating
            v-model="rating.scalability"
            class="mt-2"
            length="10"
          >
            <template v-slot:item="props">
              <v-icon
                :color="props.isFilled ? genColor(props.index) : 'grey lighten-1'"
                class="vote-scalability"
                large
                @click="props.click"
              >
                {{ props.isFilled ? genCount(props.index) : genCount(props.index) }}
              </v-icon>
            </template>
          </v-rating>
        </v-col>
        <v-col cols="12" class="mt-5">
          <h4>Security</h4>
          <v-rating
            v-model="rating.security"
            class="mt-2"
            length="10"
          >
            <template v-slot:item="props">
              <v-icon
                :color="props.isFilled ? genColor(props.index) : 'grey lighten-1'"
                class="vote-security"
                large
                @click="props.click"
              >
                {{ props.isFilled ? genCount(props.index) : genCount(props.index) }}
              </v-icon>
            </template>
          </v-rating>
        </v-col>
        <v-col cols="12" class="mt-5">
          <h4>Content</h4>
          <v-rating
            v-model="rating.content"
            class="mt-2"
            length="10"
          >
            <template v-slot:item="props">
              <v-icon
                :color="props.isFilled ? genColor(props.index) : 'grey lighten-1'"
                class="vote-content"
                large
                @click="props.click"
              >
                {{ props.isFilled ? genCount(props.index) : genCount(props.index) }}
              </v-icon>
            </template>
          </v-rating>
        </v-col>
        <v-col class="pt-4 pb-5" cols="12">
          <div style="display: flex; justify-content: space-between;">
            <Button 
              type="primary" 
              width="100%"
              @click="submitVote"
            >
              Submit Vote
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
      colors: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      count: ['1','2','3','4','5','6','7','8','9','10'],
      copied: false,
      dialog: true,
      rating: {
        reliability: 0,
        scalability: 0,
        security: 0,
        content: 0
      },

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
      this.$emit('show-votes-modal', false)
    }
  },

  methods: {
    closeModal() {
      this.dialog = false
      this.$emit('show-votes-modal', false)
    },

    genColor (i) {
      return this.colors[i]
    },

    genCount (i) {
      return this.count[i]
    },

    submitVote() {
      this.dialog = false
    }
  }
}
</script>
<style scoped lang="scss">
.v-icon.v-icon--link {
  font-size: 20px !important; 
}

// maintainability
.vote-maintainability {
  color: #000 !important;
  border: 1px solid black !important;
  border-radius: 0px !important;
  padding: 1em !important;
  &:hover {
    background-color: #287ee0 !important;
  }
}

.vote-maintainability.black--text {
  background-color: #287ee0 !important;

  &:hover {
    background-color: #287ee0 !important;
  }
}

// scalability
.vote-scalability {
  color: #000 !important;
  border: 1px solid black !important;
  border-radius: 0px !important;
  padding: 1em !important;
  &:hover {
    background-color: #25cf96 !important;
  }
}

.vote-scalability.black--text {
  background-color: #25cf96 !important;

  &:hover {
    background-color: #25cf96 !important;
  }
}

// security
.vote-security {
  color: #000 !important;
  border: 1px solid black !important;
  border-radius: 0px !important;
  padding: 1em !important;
  &:hover {
    background-color: #f0304d !important;
  }
}

.vote-security.black--text {
  background-color: #f0304d !important;

  &:hover {
    background-color: #f0304d !important;
  }
}

// content
.vote-content {
  color: #000 !important;
  border: 1px solid black !important;
  border-radius: 0px !important;
  padding: 1em !important;
  &:hover {
    background-color: #f0e769 !important;
  }
}

.vote-content.black--text {
  background-color: #f0e769 !important;

  &:hover {
    background-color: #f0e769 !important;
  }
}
</style>