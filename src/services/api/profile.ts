import axios from 'axios'
import { User } from 'shared/types'

const ENDPOINT_BASE = 'https://api.tktat.by/api/v1'

export const getInfo = async () => {
  try {
    //TO DO INTERSCOPTER FOR DATA
    //TO DO INTERSCOPTER FOR HEADERS
    let token = localStorage.getItem('ACCESS_TOKEN')

    const response = await axios.get<User>(
      `${ENDPOINT_BASE}/profile/`,

      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    return response.data
  } catch (error) {
    console.error('Ошибочка получилась, не расстраивайся:', error)
    throw error
  }
}
