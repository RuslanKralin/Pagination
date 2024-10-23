import { Label } from 'shared/ui/Label'

import s from './Style.module.scss'
import { TransportOrderInfoModel } from '../../model'

function RecieverCard() {
  return (
    <div className={s.card_wrapper}>
      <h4 className={s.card_title}>ПОЛУЧАТЕЛЬ</h4>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Label label="Получатель" info={TransportOrderInfoModel.receiver} />
        <Label label="Страна назначения" info={TransportOrderInfoModel.receiver_country} />
        <Label label="Город назначения" info={TransportOrderInfoModel.receiver_city} />
        <Label label="Адрес доставки" info={TransportOrderInfoModel.address_delivered || '-'} />
        <Label label="Телефон" info={TransportOrderInfoModel.receiver_phone} />
        <Label label="Контактное лицо" info={TransportOrderInfoModel.receiver_contact_person} />
      </div>
    </div>
  )
}

export default RecieverCard
