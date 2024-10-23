import React from 'react'
import arrow from 'shared/assets/icons/down-arrow-for-btnNav.svg'
import deleteIcon from 'shared/assets/icons/delete.svg'

import s from './Style.module.scss'
import { Link } from 'react-router-dom'
import { TransportOrder } from 'shared/types'
import { TransportOrdersModel } from 'pages/TransportOrders/model'

function Table() {
  const data = TransportOrdersModel.results

  function orderStatus(status: string) {
    if (status === 'new') {
      return 'заявка отправлена'
    } else {
      return 'обработай этот вариант'
    }
  }

  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr className={s.table_head_row}>
          <th className={`${s.table_row_item} ${s.table_id}`}>
            ID <img src={arrow} alt="icon" className={s.img} />
          </th>
          <th className={`${s.table_row_item} ${s.table_payer}`}>
            Плательщик <img src={arrow} alt="icon" className={s.img} />
          </th>
          <th className={`${s.table_row_item} ${s.table_sender}`}>
            Отправитель <img src={arrow} alt="icon" className={s.img} />
          </th>
          <th className={`${s.table_row_item} ${s.table_receiver}`}>
            Получатель <img src={arrow} alt="icon" className={s.img} />
          </th>
          <th className={`${s.table_row_item} ${s.table_status}`}>Статус заявки </th>
          <th className={`${s.table_row_item} ${s.table_date}`}>Дата создания заявки</th>
          <th className={`${s.table_row_item} ${s.table_delete}`}></th>
        </tr>
      </thead>

      {data &&
        data.map((i) => (
          <tbody className={s.table_body} key={i.id}>
            <tr className={s.table_body_row}>
              <td className={`${s.table_row_item} ${s.table_id}`}>
                <Link to={'#'} className={s.link}>
                  {i.id}
                </Link>
              </td>
              <td className={`${s.table_row_item} ${s.table_payer}`}>
                <div className={s.text_info}>
                  <p>{i.payer}</p>
                  <Link to={'#'} className={s.link}>
                    <p>{i.payer_email}</p>
                  </Link>
                </div>
              </td>
              <td className={`${s.table_row_item} ${s.table_sender}`}>
                <div className={s.text_info}>
                  <p>{i.sender}</p>
                  <p>{i.sender_contact_person}</p>
                  <p>Тел. 777777777777777777</p>
                  <p>Город: {i.sender_city}</p>
                </div>
              </td>
              <td className={`${s.table_row_item} ${s.table_receiver}`}>
                {' '}
                <div className={s.text_info}>
                  <p>{i.receiver}</p>
                  <p>{i.receiver_contact_person}</p>
                  <p>Тел. {i.receiver_phone}</p>
                  <p>Город: {i.receiver_city}</p>
                </div>
              </td>
              <td className={`${s.table_row_item} ${s.table_status}`}>{orderStatus(i.status)}</td>
              <td className={`${s.table_row_item} ${s.table_date}`}>
                {`${String(new Date(i.created_at).getUTCDate()).padStart(2, '0')}.${String(
                  new Date(i.created_at).getUTCMonth() + 1
                ).padStart(2, '0')}.${new Date(i.created_at).getUTCFullYear()}, `}
                {`${String(new Date(i.created_at).getUTCHours()).padStart(2, '0')}:${String(
                  new Date(i.created_at).getUTCMinutes()
                ).padStart(2, '0')}:${String(new Date(i.created_at).getUTCSeconds()).padStart(
                  2,
                  '0'
                )}`}
              </td>
              <td className={`${s.table_row_item} ${s.table_delete}`}>
                <img src={deleteIcon} alt="icon" />
              </td>
            </tr>
          </tbody>
        ))}
    </table>
  )
}

export default Table
