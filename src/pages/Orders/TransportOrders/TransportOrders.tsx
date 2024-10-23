import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'

import { CustomButton } from 'shared/ui/CustomButton'
import plus from 'shared/assets/icons/plus.svg'
import { ROUTES } from 'shared/const'

import s from './Styles.module.scss'
import { FilterInput } from './ui'
import { SearchInput, Table } from './ui'
import { TransportOrdersModel } from './model'

function TransportOrders() {
  const [isWindowActive, setIsWindowActive] = useState(false)

  useEffect(() => {
    TransportOrdersModel.get()
  }, [])

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <h2>Заказы на перевозку</h2>

        <div className={s.btnGroup}>
          <FilterInput
            value="Все"
            isWindowActive={isWindowActive}
            onClick={() => setIsWindowActive(!isWindowActive)}
          />
          <Link to={ROUTES.CREATE_TRANSPORT_ORDER}>
            <CustomButton
              title="Добавить заказ"
              startIcon={<img src={plus} alt="icon" />}
              bg="#ff9718"
              type="button"
            />
          </Link>
        </div>
      </div>
      <div className={s.table_wrapper}>
        <SearchInput />
        {TransportOrdersModel.LoadingModel.has() ? <h2>Loading...</h2> : <Table />}
      </div>
    </div>
  )
}

export default observer(TransportOrders)
