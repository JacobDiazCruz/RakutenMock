import axios from "axios"

export default {
  // GET REQUEST
  async getRequest(context, payload = {}) {
    let accessToken = null // get if any

    const config = {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
      data: payload.data
    }

    try {
      const res = await axios.get(`${payload.url}`, config)
      return res
    } catch (error) {
      return error
    }
  },

  // POST REQUEST
  async postRequest(context, payload = {}) {
    let accessToken = null // get if any

    const config = {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
    }

    try {
      const res = await axios({
        method: 'POST',
        url: payload.url,
        data: payload.data,
        headers: config.headers
      })
      return res
    } catch (error) {
      return error
    }
  },

  // PUT REQUEST
  async putRequest(context, payload = {}) {
    let accessToken = null // get if any

    const config = {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
    }

    try {
      const res = await axios({
        method: 'PUT',
        url: payload.url,
        data: payload.data,
        headers: config.headers
      })
      return res
    } catch (error) {
      return error
    }
  }
}