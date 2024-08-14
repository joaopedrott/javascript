import axios from 'axios'

import { DEV_BOOKS_SESSION_KEY } from '../constants/storage'
import { Session } from '../context/AuthContext/AuthContext'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const api = axios.create({
  baseURL: API_BASE_URL
})

api.interceptors.request.use(
  (config) => {
    const session = localStorage.getItem(DEV_BOOKS_SESSION_KEY)

    if (session) {
      const parsedSession = JSON.parse(session) as Session

      config.headers['authorization'] = `Bearer ${parsedSession.accessToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const config = error.config

    const canTryRefresh =
      config.url !== '/user/signin' &&
      error.response &&
      error.response.status === 401 &&
      !config._retry

    if (!canTryRefresh) return Promise.reject(error)

    config._retry = true

    try {
      const session = localStorage.getItem(DEV_BOOKS_SESSION_KEY)

      if (!session) {
        throw new Error('Cannot refresh session')
      }

      const parsedSession = JSON.parse(session) as Session

      const response = await axios.post(
        `${API_BASE_URL}/user/refresh`,
        undefined,
        {
          headers: {
            authorization: `Bearer ${parsedSession.refreshToken}`
          }
        }
      )

      const { accessToken, refreshToken } = response.data

      localStorage.setItem(
        DEV_BOOKS_SESSION_KEY,
        JSON.stringify({ ...parsedSession, accessToken, refreshToken })
      )

      return api(config)
    } catch (error) {
      localStorage.clear()

      window.location.href = `${window.location.origin}/`

      return Promise.reject(error)
    }
  }
)