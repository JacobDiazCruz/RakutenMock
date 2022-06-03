export default {
  setNewMessage(state, data) {
    state.newMessage = data
  },

  appendConversationsList(state, data) {
    state.conversationsList.push(data)
  },

  setConversationsList(state, data) {
    state.conversationsList = data
  },

  emptyConversationsList(state, data) {
    state.conversationsList = data
  },

  setSelectedConvo(state, data) {
    state.selectedConvo = data
  },

  setNotifCount(state, data) {
    state.notifCount = data
  },

  seenUserConversation(state, data) {
    state.conversationsList.map((convo, index) => {
      if (convo.conversationId == data.conversationId) {
        state.conversationsList[index].lastMessage.seen = true
      }
    })
  },

  seenSelectedConvo(state, data) {
    state.selectedConvo.lastMessage.seen = data
  }
}