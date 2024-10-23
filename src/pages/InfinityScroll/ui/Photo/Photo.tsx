import React from 'react'
import s from './Style.module.scss'

type PropsType = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

function Photo(props: PropsType) {
  return (
    <div className={s.wrapper}>
      <h3 style={{ fontSize: '20px' }}>
        {props.id} {props.title}
      </h3>

      <div className={s.image}>
        <img src={props.thumbnailUrl} alt="#" />
      </div>
    </div>
  )
}

export default Photo
