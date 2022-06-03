import config from '@/static/config.json'

export default {
  async saveCurriculum(context, payload) {
    const res = await context.dispatch('postRequest', {
      url: `${config.API_URL}/curriculums/v1/add`,
      data: payload
    }, { root: true })
    return res
  },

  async updateCurriculum(context, payload) {
    const res = await context.dispatch('putRequest', {
      url: `${config.API_URL}/curriculums/v1/update/${payload.id}`,
      data: payload.data
    }, { root: true })
    return res
  },

  async listCurriculums(context) {
    const res = await context.dispatch('getRequest', {
      url: `${config.API_URL}/curriculums/v1/list`
    }, { root: true })
    return res
  },

  async getCurriculum(context, payload) {
    const res = await context.dispatch('getRequest', {
      url: `${config.API_URL}/curriculums/v1/get/${payload}`
    }, { root: true })
    return res
  },

  async getModuleData(context, payload) {
    const res = await context.dispatch('getRequest', {
      url: `${config.API_URL}/modules/v1/get/${payload}`
    }, { root: true })
    return res
  }
}