import config from '@/static/config.json'

export default {
  async loginGoogle(context, payload) {
    const res = await context.dispatch('postRequest', {
      url: `${config.API_URL}/users/v1/google/login`,
      data: payload
    }, { root: true })
    return res
  },

  async logoutUser(context) {
    const res = await context.dispatch('postRequest', {
      url: `${config.API_URL}/users/v1/logout`,
    }, { root: true })
    return res
  }
}