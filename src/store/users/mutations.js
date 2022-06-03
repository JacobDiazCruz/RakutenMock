export default {
  setUserDetails: (state, data) => {
    state.userDetails.userId = data.userId
    state.userDetails.profileId = data.profileId
    state.userDetails.accessToken = data.accessToken
    state.userDetails.thumbProfileImage = data.thumbProfileImage
    state.userDetails.origProfileImage = data.origProfileImage
    state.userDetails.email = data.email
    state.userDetails.firstName = data.firstName
    state.userDetails.lastName = data.lastName
  },

  removeUserDetails: (state) => {
    state.userDetails.userId = null
    state.userDetails.profileId = null
    state.userDetails.accessToken = null
    state.userDetails.thumbProfileImage = null
    state.userDetails.origProfileImage = null
    state.userDetails.email = null
    state.userDetails.firstName = null
    state.userDetails.lastName = null
  },
}