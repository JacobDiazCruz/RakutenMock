export default {
  setExpandChatBox(state, data) {
    state.expandChatbox = !state.expandChatbox
  },

  removeExpandChatBox(state, data) {
    state.expandChatbox = data
  },

  setExpandChatList(state, data) {
    state.expandChatlist = !state.expandChatlist
  },

  setUsersChats(state, data) {
    state.usersChats = data
  },

  appendUserChat(state, data) {
    state.usersChats.push(data)
  },

  setShowChatBox(state, data) {
    state.showChatBox = data
  }
}