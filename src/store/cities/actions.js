export default {
  async autoSuggestApi(context) {
    const res = await context.dispatch('getRequest', {
      url: `https://heroku-newsletter-service.herokuapp.com/autosuggest`,
    }, { root: true })
    return res
  },

  async searchCityApi(context, cityCode) {
    const res = await context.dispatch('getRequest', {
      url: `https://heroku-newsletter-service.herokuapp.com/search/${cityCode}`
    }, { root: true })
    return res
  }
}
