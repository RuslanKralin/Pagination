import { Form, Formik } from 'formik'

import { CustomInput } from 'shared/ui/CustomInput'

import s from './Style.module.scss'

function RecieverCard() {
  return (
    <div className={s.card_wrapper}>
      <h4 className={s.card_title}>ПОЛУЧАТЕЛЬ</h4>

      <Formik
        initialValues={{
          reciever: '',
          fill_in_by_payer: false,
          reciever_country: '',
          reciever_city: '',
          delivery: false,
          reciever_phone: '',
          reciever_contact_person: '',
          reciever_adress: ''
        }}
        // validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {(
          { values, errors, touched, handleChange, handleBlur, handleSubmit } //TO DO
        ) => (
          <Form onSubmit={handleSubmit}>
            <div style={{ width: '100%' }}>
              <div style={{ marginBottom: '1rem' }}>
                <CustomInput
                  placeholder="Введите данные получателя"
                  type="text"
                  label="Получатель"
                  name="reciever"
                  value={values.reciever}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  star={true}
                />
              </div>

              <div className={s.checkbox_input} style={{ marginBottom: '1rem' }}>
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="fill_in_by_payer"
                  checked={values.fill_in_by_payer}
                />
                <label>Заполнить по плательщику</label>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <CustomInput
                  placeholder="Введите страну назначения"
                  type="text"
                  label="Страна назначения"
                  name="reciever_country"
                  value={values.reciever_country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  star={true}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <CustomInput
                  placeholder="Введите город назначения"
                  type="text"
                  label="Город назначения"
                  name="reciever_city"
                  value={values.reciever_city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  star={true}
                />
              </div>

              <div className={s.checkbox_input} style={{ marginBottom: '1rem' }}>
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="delivery"
                  checked={values.delivery}
                />
                <label>Доставить до двери получателя</label>
              </div>
              {values.delivery && (
                <div style={{ marginBottom: '1rem' }}>
                  <CustomInput
                    placeholder="Укажите адрес доставки"
                    type="text"
                    label="Адрес доставки"
                    name="reciever_adress"
                    value={values.reciever_adress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    star={true}
                  />
                </div>
              )}

              <div style={{ marginBottom: '1rem' }}>
                <CustomInput
                  placeholder="Введите номер телефона"
                  type="text"
                  label="Телефон"
                  name="reciever_phone"
                  value={values.reciever_phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  star={true}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <CustomInput
                  placeholder="Введите ФИО контактного лица"
                  type="text"
                  label="Контактное лицо"
                  name="reciever_contact_person"
                  value={values.reciever_contact_person}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  star={true}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RecieverCard
