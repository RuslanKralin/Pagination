import React from 'react'
import { observer } from 'mobx-react-lite'
import * as yup from 'yup'
import { Form, Formik } from 'formik'
import logo from 'shared/assets/logoNavBar.svg'
import {
  confirmPassword,
  emailValidation,
  nameValidation,
  passwordValidation,
  phoneValidation
} from 'shared/validation/common'
import { useRootStore } from 'stores/Root'
import { CustomInput } from 'shared/ui/CustomInput'
import rightArroy from 'shared/assets/icons/right-arrow.svg'

import styles from './Styles.module.scss'

function Registration() {
  const { authorization } = useRootStore()

  const validationSchema = yup.object().shape({
    email: emailValidation(),
    password: passwordValidation(),
    confirm_password: confirmPassword(),
    fullName: nameValidation(),
    phone: phoneValidation()
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal_window}>
        <div className={styles.content}>
          <div className={styles.logo_section}>
            <img src={logo} alt="logo" className={styles.logo} />
            <p className={styles.text_logo}>ТРАНСПОРТНАЯ КОМПАНИЯ</p>
          </div>
          <p className={styles.text_title}>Регистрация</p>
          <div className={styles.line}></div>
          <div className={styles.input_wrapper}>
            <Formik
              initialValues={{
                email: '',
                password: '',
                confirm_password: '',
                fullName: '',
                phone: ''
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                authorization.signUp(values)
              }}
            >
              {(
                { values, errors, touched, handleChange, handleBlur, handleSubmit } //TO DO
              ) => (
                <Form onSubmit={handleSubmit}>
                  <div className={styles.input_container}>
                    <div style={{ marginBottom: '2rem' }}>
                      <CustomInput
                        placeholder="example@mail.com"
                        type="email"
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors} //TO DO
                        star={true}
                      />
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                      <CustomInput
                        placeholder="********"
                        type="password"
                        label="Пароль"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur} //TO DO
                        star={true}
                      />
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                      <CustomInput
                        placeholder="********"
                        type="password"
                        label="Провторите пароль"
                        name="confirm_password"
                        value={values.confirm_password}
                        onChange={handleChange}
                        onBlur={handleBlur} //TO DO
                        star={true}
                      />
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                      <CustomInput
                        placeholder="Иванов Иван Иванович"
                        type="text"
                        label="ФИО"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur} //TO DO
                        star={true}
                      />
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                      <CustomInput
                        placeholder="+73908876749"
                        type="text"
                        label="Номер телефона"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur} //TO DO
                        star={true}
                      />
                    </div>

                    <button className={styles.btn} type="submit">
                      Завершить регисрацию <img src={rightArroy} alt="arroy" />
                    </button>
                    {/* TO DO */}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(Registration)
