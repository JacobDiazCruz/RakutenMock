import config from "@/static/config.json"

export default {
  async getChatsList(context, payload) {
    const res = await context.dispatch('getRequest', {
      url: `${config.API_URL}/chats/v1/list?conversationId=${payload.conversationId}&limit=${payload.limit}`
    }, { root: true })
    return res
  },

  async uploadFile(context, payload) {
    const res = await context.dispatch('postRequest', {
      url: `${config.API_URL}/chats/v1/upload`,
      data: payload
    }, { root: true })
    return res
  }
}