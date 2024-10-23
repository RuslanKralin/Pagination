import * as Yup from 'yup'

export const emailValidation = () => Yup.string().email().required('Не правильный email')

export const passwordValidation = () => Yup.string().min(8).required('Мало символов')

export const confirmPassword = () =>
  Yup.string().oneOf([Yup.ref('password')], 'Пароли не совпадают')

export const nameValidation = () =>
  Yup.string().test(
    'empty-or-3-characters-check',
    'Мало символов',
    (string) => !string || string.length >= 3
  )

export const phoneValidation = () =>
  Yup.string().test(
    'empty-or-8-characters-check',
    'Мало символов',
    (string) => !string || string.length >= 8
  )
