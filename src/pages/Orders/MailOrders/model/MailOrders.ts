import { makeAutoObservable } from 'mobx'
import Loading from 'models/Loading'

class MailOrders {
  LoadingModel: Loading

  constructor() {
    makeAutoObservable(this)
    this.LoadingModel = new Loading()
  }
}

const model = new MailOrders()

export default model
