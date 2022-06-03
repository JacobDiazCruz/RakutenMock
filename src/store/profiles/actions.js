import config from '@/static/config.json'

export default {
  async updateProfile(context, payload) {
    const res = await context.dispatch('putRequest', {
      url: `${config.API_URL}/profiles/v1/update`,
      data: payload
    }, { root: true })
    return res
  },

  async uploadProfile(context, payload) {
    const res = await context.dispatch('postRequest', {
      url: `${config.API_URL}/profiles/v1/upload`,
      data: payload
    }, { root: true })
    return res
  },

  async listProfiles(context) {
    const res = await context.dispatch('getRequest', {
      url: `${config.API_URL}/profiles/v1/list`
    }, { root: true })
    return res
  },

  async getProfile(context, id) {
    const res = await context.dispatch('getRequest', {
      url: `${config.API_URL}/profiles/v1/get/${id}`
    }, { root: true })
    return res
  }
}
