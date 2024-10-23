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

import { useRootStore } from 'stores/Root'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/const'

function NavBar() {
  const { authorization } = useRootStore()

  const [subMenu, setSubMenu] = useState<boolean>(false)
  const [active, setActive] = useState<string>('Мои данные')

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
            title="Мои данные"
            isActive={active === 'Мои данные'}
            startIcon={<img src={user} alt="icon" />}
          />
        </Link>

        <NavButton
          onClick={() => setSubMenu(!subMenu)}
          title="Заказы"
          isActive={active === 'Заказы'}
          startIcon={<img src={order} alt="icon" />}
          endIcon={<img src={arrowRight} alt="icon" />}
        />
        {subMenu && (
          <div className={subMenu ? `${s.subMenu_active}` : `${s.subMenu}`}>
            <Link to={ROUTES.TRANSPORT_ORDERS} style={{ fontSize: '1.1rem' }}>
              <NavButton
                onClick={() => handleItemClick('Заказы на перевозку')}
                title="Заказы на перевозку"
                isActive={active === 'Заказы на перевозку'}
                startIcon={<img src={truck} alt="icon" />}
              />
            </Link>
            <Link to={ROUTES.MAIL_ORDERS} style={{ fontSize: '1.1rem' }}>
              <NavButton
                onClick={() => handleItemClick('Почтовые заказы')}
                title="Почтовые заказы"
                isActive={active === 'Почтовые заказы'}
                startIcon={<img src={mail} alt="icon" />}
              />
            </Link>
          </div>
        )}
        <NavButton title="Выйти" onClick={() => authorization.logout()} />
      </div>
    </div>
  )
}

export default NavBar
