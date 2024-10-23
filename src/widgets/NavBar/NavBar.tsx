import React, { useState } from 'react'
import s from './Styles.module.scss'
import logo from 'shared/assets/logoNavBar.svg'
import user from 'shared/assets/icons/user.svg'
import { NavButton } from 'shared/ui/NavButton'
import order from 'shared/assets/icons/tablet.svg'
import arrowRight from 'shared/assets/icons/right-arrow-for-btnNav.svg'
import arrowDown from 'shared/assets/icons/down-arrow-for-btnNav.svg'
import truck from 'shared/assets/icons/truck.svg'
import mail from 'shared/assets/icons/mail.svg'

import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/const'

function NavBar() {
  const [subMenu, setSubMenu] = useState<boolean>(false)
  const [active, setActive] = useState<string>('Infinity scroll')

  const handleItemClick = (title: string) => {
    setActive(title)
    console.log(title)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.logo_section}>
          <img src={logo} alt="logo" className={s.logo} />
          <p className={s.text}>
            ТРАНСПОРТНАЯ<br></br>КОМПАНИЯ
          </p>
        </div>

        <Link to={ROUTES.DEFAULT} style={{ fontSize: '1.1rem' }}>
          <NavButton
            onClick={() => handleItemClick('Мои данные')}
            title="Infinity scroll"
            isActive={active === 'Infinity scroll'}
          />
        </Link>

        <Link to={ROUTES.PAGINATION_COUNTRY} style={{ fontSize: '1.1rem' }}>
          <NavButton
            onClick={() => setSubMenu(!subMenu)}
            title="Pagination country"
            isActive={active === 'Pagination country'}
          />
        </Link>

        <Link to={ROUTES.PAGINATION_CITIES} style={{ fontSize: '1.1rem' }}>
          <NavButton
            onClick={() => setSubMenu(!subMenu)}
            title="Pagination cities"
            isActive={active === 'Pagination cities'}
          />
        </Link>

        <Link to={ROUTES.LIB_PAGINATE} style={{ fontSize: '1.1rem' }}>
          <NavButton
            onClick={() => setSubMenu(!subMenu)}
            title="LibPaginate"
            isActive={active === 'LibPaginate'}
          />
        </Link>
      </div>
    </div>
  )
}

export default NavBar
