export default {
  async autoSuggestApi(context) {
    const response = await context.dispatch('getRequest', {
      url: `https://heroku-newsletter-service.herokuapp.com/autosuggest`,
    }, { root: true })
    return response
  },

  async searchCityApi(context, cityCode) {
    const response = await context.dispatch('getRequest', {
      url: `https://heroku-newsletter-service.herokuapp.com/search/${cityCode}`
    }, { root: true })
    context.commit("setCities", response.data.outlets.availability.results)
    return response
  }
}