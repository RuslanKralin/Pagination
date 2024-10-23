import React, { useState } from 'react'
import s from './Styles.module.scss'
import arrrowDown from 'shared/assets/icons/down-arrow-for-btnNav.svg'

type PropsType = {
  value: 'Все' | 'заявки' | 'шаблоны' //TO DO
  onClick?: () => void
  isWindowActive: boolean
}

function FilterInput(props: PropsType) {
  //TO DO ДЕСТРУКТУРЕЗИРУЙ ПРОПСЫ И ПРОПС ТАЙП ЗАМЕНИТЬ interface Props
  const [activeItem, setActiveItem] = useState<null | number>(null)

  const handleItemClick = (index: number) => {
    setActiveItem(index)
  }
  return (
    <>
      <div className={s.input_wrapper}>
        <input
          type="text"
          value={props.value}
          readOnly
          onClick={props.onClick}
          className={s.input_value}
        />
        <img src={arrrowDown} alt="arrow icon" className={s.arrow_icon} onClick={props.onClick} />
        {props.isWindowActive && (
          <div className={s.modal_window_wrapper}>
            <div className={s.window_content}>
              <div
                className={`${s.window_item} ${activeItem === 0 ? s.active : ''}`}
                onClick={() => handleItemClick(0)}
              >
                Все
              </div>
              <div
                className={`${s.window_item} ${activeItem === 1 ? s.active : ''}`}
                onClick={() => handleItemClick(1)}
              >
                Заявки
              </div>
              <div
                className={`${s.window_item} ${activeItem === 2 ? s.active : ''}`}
                onClick={() => handleItemClick(2)}
              >
                Шаблоны
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default FilterInput
