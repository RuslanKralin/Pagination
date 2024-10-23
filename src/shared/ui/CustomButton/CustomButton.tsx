import React, { ReactNode } from 'react' // TO DO
import s from './Styles.module.scss'

type PropsType = {
  title: string
  bg: string
  type: 'button' | 'submit'
  startIcon?: ReactNode
  isDisable?: boolean

  //THEME  TO DO
  // isActive: boolean
  // setIsActive: void
}

function CustomButton(props: PropsType) {
  return (
    <button
      style={{ backgroundColor: props.bg }}
      className={`${s.btn} ${props.isDisable ? s.disable : ''}`}
    >
      <div className={s.btnItems}>
        {props.startIcon}
        {props.title}
      </div>
    </button>
  )
}

export default CustomButton
