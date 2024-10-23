import React, { useEffect } from 'react'

import { observer } from 'mobx-react-lite'
import { Link, useParams } from 'react-router-dom'
import { ROUTES } from 'shared/const'
import arrow from 'shared/assets/icons/right-arrow-for-btnNav.svg'
import { CustomButton } from 'shared/ui/CustomButton'

import s from './Styles.module.scss'
import { PayerCard, RecieverCard, SenderCard } from './ui'
import { TransportOrderInfoModel } from './model'

//TO DO

function TransportOrderInfo() {
  const { id } = useParams()

  useEffect(() => {
    id && TransportOrderInfoModel.get(id)
  }, [id])

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.crumbs}>
          <Link to={ROUTES.TRANSPORT_ORDERS} className={s.crumbs_link}>
            <h1>Заказы на перевозку</h1>
          </Link>
          <img src={arrow} alt="icon" className={s.img} />
          <p className={s.crumbs_text}>Инфо</p>
        </div>
        <div className={s.btnGroup}>
          <CustomButton title="Копировать" bg="#0b409b" type="button" />
          <CustomButton title="Скачать" bg="#0b409b" type="button" />
          <CustomButton title="Удалить" bg="#82868b" type="button" />
        </div>
      </div>
      <div className={s.content_wrapper}>
        <h4 className={s.id_title}>Номер заказа: {TransportOrderInfoModel.id}</h4>
        <div className={s.line}></div>
        <div style={{ width: '100%' }}>
          <div className={s.cards_wrapper}>
            <div style={{ width: '48%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {TransportOrderInfoModel.LoadingModel.has() ? <h2>Loading...</h2> : <PayerCard />}

              <div className={s.line}></div>
              {TransportOrderInfoModel.LoadingModel.has() ? <h2>Loading...</h2> : <RecieverCard />}
            </div>
            <div style={{ width: '48%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {TransportOrderInfoModel.LoadingModel.has() ? <h2>Loading...</h2> : <SenderCard />}{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(TransportOrderInfo)
