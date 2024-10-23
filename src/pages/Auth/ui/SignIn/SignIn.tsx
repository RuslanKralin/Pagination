import React from 'react'
import * as yup from 'yup'
import { Form, Formik } from 'formik'

import { useRootStore } from 'stores/Root'
import logo from 'shared/assets/logoNavBar.svg'
import { emailValidation, passwordValidation } from 'shared/validation/common'
import { CustomInput } from 'shared/ui/CustomInput'
import rightArroy from 'shared/assets/icons/right-arrow.svg'

import styles from './Styles.module.scss'
import { ToastContainer, toast } from 'react-toastify'

type PropsType = {
  registration: boolean
  setRegistration: any
}

function SignIn(props: PropsType) {
  const { authorization } = useRootStore()

  const validationSchema = yup.object().shape({
    email: emailValidation(),
    password: passwordValidation()
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal_window}>
        <div className={styles.content}>
          <div className={styles.logo_section}>
            <img src={logo} alt="logo" className={styles.logo} />
            <p className={styles.text_logo}>ТРАНСПОРТНАЯ КОМПАНИЯ</p>
          </div>
          <p className={styles.text_title}>Вход</p>
          <div className={styles.line}></div>
          <div className={styles.input_wrapper}>
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                authorization.signIn(values)
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
                    <div style={{ marginBottom: '1rem' }}>
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
                    <p className={styles.text_question}>Забыли пароль?</p>
                    <button className={styles.btn} type="submit">
                      Войти <img src={rightArroy} alt="arroy" />
                    </button>
                    {/* TO DO */}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ display: 'inline-block' }}>Нет аккаунта? </p>

            <p
              style={{ display: 'inline-block', marginLeft: '5px', color: '#0b409b' }}
              onClick={() => props.setRegistration(true)}
            >
              {/* TO DO */}
              Зарегистрируйтесь
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
