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
    if (response.data.status != 400) {
      context.commit("setCities", response.data.outlets.availability.results)
      return response
    } else {
      context.commit("setCities", [])
      return response.data.status
    }
  }
}