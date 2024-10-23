import React from 'react'
import s from './Style.module.scss'
import { CustomInput } from 'shared/ui/CustomInput'
import { Form, Formik } from 'formik'

function PayerCard() {
  return (
    <div className={s.card_wrapper}>
      <h4 className={s.card_title}>Заказчик</h4>

      <Formik
        initialValues={{
          payer: '',

          payment_form_cash: false,
          payment_form_card: true,
          payment_city: '',
          email: '',
          payer_phone: '',
          payer_contact_person: '',
          payer_ID: '',
          cargo_name: '',
          oversized: false,
          scattering: false,
          fragile: false,
          heavyweight: false,
          dangerous: false,
          pallet: false,
          places: '',
          weight: '',
          volume: '',
          date: ''
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
                  placeholder="Наименование заказчика"
                  type="text"
                  label="Заказчик"
                  name="payer"
                  value={values.payer}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  star={true}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <div className={s.payment_form_title}>
                  <p>Форма оплаты</p>
                  <p className={s.star}>*</p>
                </div>
                <div className={s.radio_input_wrapper}>
                  <div className={s.radio_input}>
                    <input
                      onChange={handleChange}
                      type="radio"
                      name="payment_form"
                      checked={values.payment_form_cash}
                    />
                    <label>Наличный расчёт</label>
                  </div>
                  <div className={s.radio_input}>
                    <input
                      onChange={handleChange}
                      type="radio"
                      name="payment_form"
                      checked={values.payment_form_card}
                    />
                    <label>Безналичный расчёт</label>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <CustomInput
                  placeholder="Минск(BY)"
                  type="text"
                  label="Город оплаты"
                  name="payment_city"
                  value={values.payment_city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  star={true}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <CustomInput
                  placeholder="Укажите Email"
                  type="email"
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  star={true}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <CustomInput
                  placeholder="Введите номер телефона"
                  type="text"
                  label="Телефон"
                  name="payer_phone"
                  value={values.payer_phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  star={true}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <CustomInput
                  placeholder="Введите данные контактного лица"
                  type="text"
                  label="Контактное лицо"
                  name="payer_contact_person"
                  value={values.payer_contact_person}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  star={true}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <CustomInput
                  placeholder="Введите ИНН/УНП плательщика"
                  type="text"
                  label="ИНН/УНП"
                  name="payer_ID"
                  value={values.payer_ID}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  star={true}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <CustomInput
                  placeholder="Укажите наименование груза"
                  type="text"
                  label="Наименование груза"
                  name="cargo_name"
                  value={values.cargo_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  star={true}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div className={s.payment_form_title}>
                  <p>Дополнительные параметры груза</p>
                  <p className={s.star}>*</p>
                </div>
                <div className={s.extra_box_wrapper}>
                  <div className={s.extra_radio_input_wrapper}>
                    <div className={s.radio_input}>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="scatteringh"
                        checked={values.scattering}
                      />
                      <label>Россыпь</label>
                    </div>
                    <div className={s.radio_input}>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="pallet"
                        checked={values.scattering}
                      />
                      <label>Паллет</label>
                    </div>
                  </div>
                  <div className={s.extra_checkbox_group}>
                    <div className={s.checkbox_input}>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="oversized"
                        checked={values.oversized}
                      />
                      <label>Негабарит</label>
                    </div>
                    <div className={s.checkbox_input}>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="fragile"
                        checked={values.fragile}
                      />
                      <label>Хрупкий</label>
                    </div>
                    <div className={s.checkbox_input}>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="heavyweight"
                        checked={values.heavyweight}
                      />
                      <label>Тяжеловес</label>
                    </div>
                    <div className={s.checkbox_input}>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="dangerous"
                        checked={values.dangerous}
                      />
                      <label>Опасный</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className={s.cargo_parametrs_date}>
                <div className={s.cargo_parametrs_left}>
                  {' '}
                  <div style={{ marginBottom: '1rem' }}>
                    <CustomInput
                      style={{ width: '11rem' }}
                      type="text"
                      label="Вес груза, кг"
                      name="weight"
                      value={values.weight}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors}
                      star={false}
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <CustomInput
                      style={{ width: '11rem' }}
                      type="text"
                      label="Объем груза, м3"
                      name="volume"
                      value={values.volume}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors}
                      star={false}
                    />
                  </div>
                </div>
                <div className={s.cargo_parametrs_right}>
                  <div style={{ marginBottom: '1rem' }}>
                    <CustomInput
                      style={{ width: '11rem' }}
                      type="text"
                      label="Кол-во грузовых мест"
                      name="places"
                      value={values.places}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors}
                      star={false}
                    />
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <CustomInput
                      style={{ width: '11rem' }}
                      type="date"
                      label="Дата забора"
                      name="date"
                      value={values.date}
                      placeholder="Введите дату"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default PayerCard
