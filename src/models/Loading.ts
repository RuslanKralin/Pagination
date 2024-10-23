import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'
import { API } from 'services'
import { RootStore } from 'stores/Root'

class Loading {
  private loading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  has() {
    return this.loading
  }

  begin() {
    this.loading = true
  }
  end() {
    this.loading = false
  }
}

export default Loading
