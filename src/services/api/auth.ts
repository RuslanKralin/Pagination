import axios from 'axios'
import { toast } from 'react-toastify'

const ENDPOINT_BASE = 'https://api.tktat.by/api/v1'

export const signUp = async (value: {
  email: string
  password: string
  password2: string
  full_name: string
  phone: string
}) => {
  try {
    const response = await axios.post<{ access: string }>(`${ENDPOINT_BASE}/register/`, {
      ...value
    })

    return response.data.access
  } catch (error) {
    console.error('Ошибка во время регистрации:', error)
    throw error
  }
}

export const signIn = async (value: { email: string; password: string }) => {
  try {
    const response = await axios.post<{ access: string }>(`${ENDPOINT_BASE}/jwt/login/`, {
      ...value
    })

    // console.log(response.data.access)
    return response.data.access
  } catch (err: any) {
    toast.error(err.response.data.errors[0].detail)

    throw err
  }
}
