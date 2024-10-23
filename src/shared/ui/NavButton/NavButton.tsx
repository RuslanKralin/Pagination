import React, { ReactNode } from 'react'
import s from './Styles.module.scss'

type PropsType = {
  title: string
  startIcon?: ReactNode
  endIcon?: ReactNode
  onClick?: () => void
  isActive?: boolean
  mainColor?: string
}

function NavButton(props: PropsType) {
  const buttonStyle = {
    color: props.title === 'Выйти' ? 'red' : 'grey'
  }

  return (
    <button
      onClick={props.onClick}
      className={`${s.container} ${props.isActive && s.active}`}
      style={buttonStyle}
    >
      <div className={s.btnItems}>
        <div className={`${s.icon_text} ${props.isActive && s.startItemsActive}`}>
          {props.startIcon}
          {props.title}
        </div>
        <div>{props.endIcon}</div>
      </div>
    </button>
  )
}

export default NavButton
