import React from 'react'
import { observer } from 'mobx-react-lite'

import { CustomButton } from 'shared/ui/CustomButton'

import styles from './Styles.module.scss'

function MailOrder() {
  return (
    <div className={styles.wrapper}>
      transport
      <div className={styles.content}>
        <div className={styles.btnGroup}>
          <CustomButton title="Редактировать" bg="#ff9718" type="button" />
          <CustomButton title="Изменить пароль" bg="#82868b" type="button" />
        </div>
      </div>
    </div>
  )
}

export default observer(MailOrder)
