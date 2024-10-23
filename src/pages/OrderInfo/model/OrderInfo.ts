import { makeAutoObservable } from 'mobx'
import Loading from 'models/Loading'
import { toast } from 'react-toastify'
import { API } from 'services'
import { TransportOrder } from 'shared/types'

class OrderInfo {
  count: number = 1
  next: number | null = null
  previous: number | null = null
  results: TransportOrder[] = []

  LoadingModel: Loading

  constructor() {
    makeAutoObservable(this)
    this.LoadingModel = new Loading()
  }

  async get() {
    try {
      this.LoadingModel.begin()

      const data = await API.transport_orders.get()

      this.count = data.count
      this.next = data.next
      this.previous = data.previous
      this.results = data.results
      console.log(this.results)

      this.LoadingModel.end()
    } catch (err: any) {
      toast.error(err)
    }
  }
}

const model = new OrderInfo()

export default model
