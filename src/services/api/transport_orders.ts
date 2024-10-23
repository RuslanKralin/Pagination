import axios from 'axios'
import { TransportOrders } from 'shared/types'

const ENDPOINT_BASE = 'https://api.tktat.by/api/v1'

export const get = async () => {
  try {
    let token = localStorage.getItem('ACCESS_TOKEN')

    const response = await axios.get<TransportOrders>(
      `${ENDPOINT_BASE}/orders/transportation/?page=1&ordering=&page_size=12`,

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
