import React from 'react'
import s from './Styles.module.scss'
import search from 'shared/assets/icons/search.svg'

function SearchInput() {
  return (
    <div className={s.input_wrapper}>
      <div className={s.container}>
        <img src={search} alt="icon" className={s.img} />
        <input placeholder="Поиск" className={s.input} />
      </div>
    </div>
  )
}

export default SearchInput
