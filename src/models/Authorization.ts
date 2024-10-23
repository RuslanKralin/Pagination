import { jwtDecode } from 'jwt-decode'
import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'

import { API } from 'services'

import { RootStore } from 'stores/Root'

const ACCESS_TOKEN = 'ACCESS_TOKEN'

class AuthorizationModel {
  readonly rootStore: RootStore
  accessToken: string | null = null
  isAuthorized: boolean = false

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore

    this.init()
  }

  init() {
    this.accessToken = this.getAccessToken()

    if (this.accessToken) {
      const decodeToken: any = jwtDecode(this.accessToken)
      if (decodeToken.exp < Date.now() / 1000) {
        this.isAuthorized = false
        console.log('LogOut')
      } else {
        this.isAuthorized = true
        // console.log('Good')
      }
    }
  }

  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN) ?? ''
  }

  setAccessToken(value: string) {
    this.accessToken = value
    localStorage.setItem(ACCESS_TOKEN, value)
  }

  async signUp(value: {
    email: string
    password: string
    confirm_password: string
    fullName: string
    phone: string
  }) {
    try {
      const data = await API.auth.signUp({
        email: value.email,
        password: value.password,
        password2: value.confirm_password,
        full_name: value.fullName,
        phone: value.phone
      })

      this.setAccessToken(data)
      this.isAuthorized = true
      console.log('SUCCES')
    } catch (err: any) {
      console.log(err)
      throw err
    } finally {
      console.log('ОТработала')
    }
  }

  async signIn(value: { email: string; password: string }) {
    try {
      const data = await API.auth.signIn({
        email: value.email,
        password: value.password
      })

      this.setAccessToken(data)

      this.isAuthorized = true
    } catch (err: any) {
      toast.error(err)
      console.log(err)
    } finally {
    }
  }

  logout() {
    localStorage.removeItem('ACCESS_TOKEN')
    this.isAuthorized = false
  }
}

export default AuthorizationModel
