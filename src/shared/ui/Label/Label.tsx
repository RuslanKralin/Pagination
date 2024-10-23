import React from 'react'
import s from './Styles.module.scss'

type PropsType = {
  label: string
  info: string
}

function Label(props: PropsType) {
  return (
    <div>
      <label className={s.label}>{props.label}</label>
      <div className={s.content}>{props.info}</div>
    </div>
  )
}

export default Label
