import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'
import { API } from 'services'
import { RootStore } from 'stores/Root'

class User {
  readonly rootStore: RootStore
  full_name: string = ''
  date_birth: null | string = null
  phone: string = ''
  email: string = ''

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }
}

export default User
