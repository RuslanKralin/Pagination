import React from 'react'
import * as yup from 'yup'
import s from './styles.module.scss'
import { CustomInput } from 'shared/ui/CustomInput'
import { Form, Formik } from 'formik'
import { emailValidation, nameValidation, phoneValidation } from 'shared/validation/common'
import { User } from 'shared/types'
import { ProfileModel } from 'pages/Profile/model'

function ProfileInfo() {
  // console.log(props.full_name, props.email, props.phone)

  const validationSchema = yup.object().shape({
    email: emailValidation(),
    fullName: nameValidation(),
    phone: phoneValidation()
  })

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <h3 style={{ padding: '1.5rem' }}>Основная информация</h3>
        <div className={s.line}></div>
      </div>

      <Formik
        initialValues={{
          email: ProfileModel.email,
          date_birth: '01.01.1970',
          fullName: ProfileModel.full_name,
          phone: ProfileModel.phone
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // console.log(values)
        }}
      >
        {(
          { values, errors, touched, handleChange, handleBlur, handleSubmit } //TO DO
        ) => (
          <Form onSubmit={handleSubmit}>
            <div className={s.input_container}>
              <div className={s.input}>
                <CustomInput
                  style={{ backgroundColor: '#e9f4ff', color: '#4e5154' }}
                  type="text"
                  label="ФИО"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur} //TO DO
                  readOnly={true}
                />
              </div>

              <div className={s.input}>
                <CustomInput
                  style={{ backgroundColor: '#e9f4ff', color: '#4e5154' }}
                  type="text"
                  label="Дата рождения"
                  name="phone"
                  value={values.date_birth || ''}
                  onChange={handleChange}
                  onBlur={handleBlur} //TO DO
                  readOnly={true}
                />
              </div>

              <div className={s.input}>
                <CustomInput
                  style={{ backgroundColor: '#e9f4ff', color: '#4e5154' }}
                  type="text"
                  label="Номер телефона"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur} //TO DO
                  readOnly={true}
                />
              </div>

              <div className={s.input}>
                <CustomInput
                  style={{ backgroundColor: '#e9f4ff', color: '#4e5154' }}
                  placeholder="example@mail.com"
                  type="email"
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors} //TO DO
                  readOnly={true}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ProfileInfo
