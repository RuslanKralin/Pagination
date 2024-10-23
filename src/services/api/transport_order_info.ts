import axios from 'axios'
import { TransportOrder } from 'shared/types'

const ENDPOINT_BASE = 'https://api.tktat.by/api/v1'

export const get = async (id: string) => {
  try {
    let token = localStorage.getItem('ACCESS_TOKEN')

    const response = await axios.get<TransportOrder>(
      `${ENDPOINT_BASE}/orders/transportation/${id}`,

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
