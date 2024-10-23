import React from 'react'
import s from './Styles.module.scss'
import { FormikErrors, FormikTouched, useFormikContext } from 'formik'

type PropsType = {
  placeholder?: string
  type: 'text' | 'password' | 'email' | 'number' | 'checkbox' | 'radio' | 'date'
  label: string
  name: string
  value: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
  errors?: FormikErrors<{
    email: string
    password: string
    payer: string
    reciever: string
    sender: string
  }>
  touched?: FormikTouched<{ email: string; password: string }>
  readOnly?: boolean
  style?: React.CSSProperties
  star?: boolean
  readonly?: boolean
}

function CustomInput(props: PropsType) {
  const { errors } = useFormikContext<any>()

  return (
    <>
      <label className={s.label}>
        <div style={{ display: 'flex', gap: '0.2rem' }}>
          {props.label}
          {props.star && <p className={s.star}>*</p>}
        </div>
        {errors[props.name] && <p className={s.error}>{`${errors[props.name]}`}</p>}
      </label>
      <input
        style={props.style}
        className={s.inpyt}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        name={props.name}
        readOnly={props.readOnly}
      />
    </>
  )
}

export default CustomInput
