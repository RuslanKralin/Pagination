import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { CustomButton } from 'shared/ui/CustomButton'

import { ProfileInfo } from './ui/ProfileInfo' //TO DO
import styles from './Styles.module.scss'
import { ProfileModel } from './model'

function Profile() {
  useEffect(() => {
    ProfileModel.get()
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.btnGroup}>
          <CustomButton title="Редактировать" bg="#ff9718" type="button" />
          <CustomButton title="Изменить пароль" bg="#82868b" type="button" />
        </div>
        {ProfileModel.LoadingModel.has() ? <h2>Loading...</h2> : <ProfileInfo />}
      </div>
    </div>
  )
}

export default observer(Profile)
