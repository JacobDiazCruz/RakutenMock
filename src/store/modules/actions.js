import config from '@/static/config.json'

export default {
  async getModuleData(context, payload) {
    const res = await context.dispatch('getRequest', {
      url: `${config.API_URL}/modules/v1/get/${payload}`
    }, { root: true })
    return res
  },

  async addModule(context, payload) {
    const res = await context.dispatch('postRequest', {
      url: `${config.API_URL}/modules/v1/add`,
      data: payload
    }, { root: true })
    return res
  },

  async updateModule(context, payload) {
    const res = await context.dispatch('putRequest', {
      url: `${config.API_URL}/modules/v1/update/${payload.id}`,
      data: payload.data
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