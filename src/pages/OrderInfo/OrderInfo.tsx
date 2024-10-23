import React from 'react'
import { observer } from 'mobx-react-lite'

import { Link } from 'react-router-dom'

import arrow from 'shared/assets/icons/right-arrow-for-btnNav.svg'
import s from './Styles.module.scss'

import { ROUTES } from 'shared/const'
import { CustomButton } from 'shared/ui/CustomButton'
import { PayerCard, RecieverCard, SenderCard } from './ui'
//TO DO

function OrderInfo() {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.crumbs}>
          <Link to={ROUTES.TRANSPORT_ORDERS} className={s.crumbs_link}>
            <h1>Заказы на перевозку</h1>
          </Link>
          <img src={arrow} alt="icon" className={s.img} />
          <p className={s.crumbs_text}>Добавление</p>
        </div>
        <div className={s.btnGroup}>
          <CustomButton title="Оформить заявку" bg="#ff9718" type="button" isDisable={true} />
          <CustomButton title="Сохранить как шаблон" bg="#82868b" type="button" isDisable={true} />
        </div>
      </div>
      <div className={s.cards_wrapper}>
        <div style={{ width: '45%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <PayerCard />
          <div className={s.line}></div>
          <RecieverCard />
        </div>
        <div style={{ width: '45%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <SenderCard />{' '}
        </div>
      </div>
    </div>
  )
}

export default observer(OrderInfo)
