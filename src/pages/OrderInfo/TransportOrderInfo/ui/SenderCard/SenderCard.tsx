import { Label } from 'shared/ui/Label'
import s from './Style.module.scss'
import { TransportOrderInfoModel } from '../../model'

function SenderCard() {
  return (
    <div>
      <h4 className={s.card_title}>ОТПРАВИТЕЛЬ</h4>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Label label="Отправитель" info={TransportOrderInfoModel.sender} />
        <Label label="Город отправления" info={TransportOrderInfoModel.sender_city} />
        <Label
          label="Адрес подачи автомобиля"
          info={TransportOrderInfoModel.address_delivery_car || '-'}
        />
        <Label label="Телефон" info={TransportOrderInfoModel.sender_phone} />
        <Label label="Контактное лицо" info={TransportOrderInfoModel.sender_contact_person} />
        <Label
          label="Дополнительная информация"
          info={TransportOrderInfoModel.more_information || '-'}
        />
        <Label label="Город оплаты" info={TransportOrderInfoModel.city_payment.name} />
      </div>
    </div>
  )
}

export default SenderCard
