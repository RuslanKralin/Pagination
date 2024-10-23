import React, { useEffect } from 'react'
import s from './Style.module.scss'

import { Label } from 'shared/ui/Label'
import { TransportOrderInfoModel } from '../../model'

function PayerCard() {
  return (
    <div>
      <h4 className={s.card_title}>ПЛАТЕЛЬЩИК</h4>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Label label="Плательщик" info={TransportOrderInfoModel.payer} />
        <Label label="EMAIL" info={TransportOrderInfoModel.payer_email} />
        <Label label="Телефон" info={TransportOrderInfoModel.sender_phone} />
        <Label label="Контактное лицо" info={TransportOrderInfoModel.sender_contact_person} />
        <Label label="ИНН/УНП" info={TransportOrderInfoModel.payer_tax} />
        <Label label="Наименование груза" info={TransportOrderInfoModel.name_cargo} />
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'end'
          }}
        >
          <div>
            <Label label="Кол-во грузовых мест" info={TransportOrderInfoModel.places} />
          </div>
          <div>
            <Label label="Вес груза, кг" info={TransportOrderInfoModel.weight} />
          </div>
          <div>
            <Label label="Объем груза, м3" info={TransportOrderInfoModel.volume} />
          </div>
          <div>
            <Label
              label="Время забора"
              info={`${String(
                new Date(TransportOrderInfoModel.collection_time).getUTCDate()
              ).padStart(2, '0')}.${String(
                new Date(TransportOrderInfoModel.collection_time).getUTCMonth() + 1
              ).padStart(2, '0')}.${new Date(
                TransportOrderInfoModel.collection_time
              ).getUTCFullYear()} `}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PayerCard
