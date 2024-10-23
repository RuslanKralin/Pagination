import { makeAutoObservable } from 'mobx'
import Loading from 'models/Loading'
import { toast } from 'react-toastify'
import { API } from 'services'
import { TransportOrder } from 'shared/types'

class TransportOrderInfo {
  id: number | null = null
  name_cargo: string = ''
  places: string = ''
  weight: string = ''
  volume: string = ''
  collection_time: string = ''
  payer: string = ''
  payer_email: string = ''
  payer_tax: string = ''
  sender: string = ''
  sender_contact_person: string = ''
  sender_phone: string = ''
  sender_city: string = ''
  receiver: string = ''
  receiver_contact_person: string = ''
  receiver_phone: string = ''
  receiver_country: string = ''
  receiver_city: string = ''
  is_draft: boolean = false
  status: string = ''
  created_at: string = ''
  address_delivered: string = ''
  address_delivery_car: string = ''
  more_information: string = ''
  city_payment: {
    id: number
    name: string
  } = { id: 0, name: '' }

  LoadingModel: Loading

  constructor() {
    makeAutoObservable(this)
    this.LoadingModel = new Loading()
  }

  async get(id: string) {
    try {
      this.LoadingModel.begin()

      const data = await API.transport_order_info.get(id)
      console.log(data)
      this.id = data.id
      this.places = data.places
      this.name_cargo = data.name_cargo
      this.weight = data.weight
      this.volume = data.volume
      this.collection_time = data.collection_time
      this.payer = data.payer
      this.payer_email = data.payer_email
      this.payer_tax = data.payer_tax
      this.sender = data.sender
      this.sender_contact_person = data.sender_contact_person
      this.sender_phone = data.sender_phone
      this.sender_city = data.sender_city
      this.receiver = data.receiver
      this.receiver_contact_person = data.receiver_contact_person
      this.receiver_phone = data.receiver_phone
      this.receiver_country = data.receiver_country
      this.receiver_city = data.receiver_city
      this.is_draft = data.is_draft
      this.status = data.status
      this.created_at = data.created_at
      this.address_delivered = data.address_delivered
      this.address_delivery_car = data.address_delivery_car
      this.more_information = data.more_information
      this.city_payment = data.city_payment

      this.LoadingModel.end()
    } catch (err: any) {
      toast.error(err)
    }
  }
}

const model = new TransportOrderInfo()

export default model
