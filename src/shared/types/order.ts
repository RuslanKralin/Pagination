export interface TransportOrder {
  id: number | null
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
  receiver_city: string
  is_draft: boolean
  status: string
  created_at: string
}

export interface TransportOrders {
  count: number
  next: number | null
  previous: number | null
  results: TransportOrder[]
}
