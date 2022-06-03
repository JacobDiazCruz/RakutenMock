
import config from '@/static/config.json'

export default {
  async getConversationsList(context) {
    const res = await context.dispatch('getRequest', {
      url: `${config.API_URL}/conversations/v1/list`
    }, { root: true })
    return res
  },

  async getConversation(context, payload) {
    const res = await context.dispatch('getRequest', {
      url: `${config.API_URL}/conversations/v1/get?conversationId=${payload}`
    }, { root: true })
    return res
  },

  async seenConversation(context, payload) {
    const res = await context.dispatch('putRequest', {
      url: `${config.API_URL}/conversations/v1/seen/${payload}`
    }, { root: true })
    return res
  }
}