export interface TransportOrder {
  id: number | null
  name_cargo: string
  weight: string
  places: string
  volume: string
  collection_time: string
  payer: string
  payer_email: string
  payer_tax: string
  sender: string
  sender_contact_person: string
  sender_phone: string
  sender_city: string
  receiver: string
  receiver_contact_person: string
  receiver_phone: string
  receiver_country: string
  receiver_city: string
  is_draft: boolean
  status: string
  created_at: string
  address_delivered: string
  address_delivery_car: string
  more_information: string
  city_payment: {
    id: number
    name: string
  }
}

export interface TransportOrders {
  count: number
  next: number | null
  previous: number | null
  results: TransportOrder[]
}
