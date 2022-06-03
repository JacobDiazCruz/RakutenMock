
import config from '@/static/config.json'

export default {
  async getMentorsList(context, payload) {
    let param = ''
    if (payload.filter_val.length > 0) {
      payload.filter_val.forEach((val, key, arr) => {
        param += `filter_val=${val}&`
      })
    } else {
      param = 'filter_val='
    }
    const res = await context.dispatch('getRequest', {
      url: `${config.API_URL}/mentors/v1/list?${param}`,
      data: payload
    }, { root: true })
    return res
  },

  async getMentorData(context, payload) {
    const res = await context.dispatch('getRequest', {
      url: `${config.API_URL}/mentors/v1/get?profileId=${payload}`
    }, { root: true })
    return res
  },

  async submitMentorRequest(context, payload) {
    const res = await context.dispatch('postRequest', {
      url: `${config.API_URL}/mentors/v1/request`,
      data: payload
    }, { root: true })
    return res
  }
}
