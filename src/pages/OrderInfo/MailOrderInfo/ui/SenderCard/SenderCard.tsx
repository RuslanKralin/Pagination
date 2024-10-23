import { Form, Formik } from 'formik'

import { CustomInput } from 'shared/ui/CustomInput'

import s from './Style.module.scss'

function SenderCard() {
  return (
    <div className={s.card_wrapper}>
      <h4 className={s.card_title}>ОТПРАВИТЕЛЬ</h4>

      <Formik
        initialValues={{
          sender: '',
          fill_in_by_payer: false,
          sender_country: '',
          sender_city: '',
          delivery: false,
          sender_phone: '',
          sender_contact_person: '',
          sender_adress: '',
          extra_info: '',
          rule_1: false,
          rule_2: false
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
                  placeholder="Введите данные отправителя"
                  type="text"
                  label="Отправитель"
                  name="sender"
                  value={values.sender}
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
                  placeholder="Введите страну отправления"
                  type="text"
                  label="Страна отправления"
                  name="sender_country"
                  value={values.sender_country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  star={true}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <CustomInput
                  placeholder="Введите город отправления"
                  type="text"
                  label="Город отправления"
                  name="sender_city"
                  value={values.sender_city}
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
                <label>Забрать от двери отправителя</label>
              </div>
              {values.delivery && (
                <div style={{ marginBottom: '1rem' }}>
                  <CustomInput
                    placeholder="Укажите адрес подачи автомобиля"
                    type="text"
                    label="Адрес подачи автомобиля"
                    name="sender_adress"
                    value={values.sender_adress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    // star={true}
                  />
                </div>
              )}

              <div style={{ marginBottom: '1rem' }}>
                <CustomInput
                  placeholder="Введите номер телефона"
                  type="text"
                  label="Телефон"
                  name="sender_phone"
                  value={values.sender_phone}
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
                  name="sender_contact_person"
                  value={values.sender_contact_person}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  star={true}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label className={s.label}>Дополнительная информация</label>
                <textarea className={s.text_area} placeholder="Введите дополнительную информацию" />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <p>
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name="rule_1"
                    checked={values.rule_1}
                    className={s.checkbox_rule}
                  />
                  <label className={s.label_rule}>
                    Я подтверждаю, что условия данного поручения экспедитору,{' '}
                    <a href="#">
                      не противоречат требованиям нормативных актов Республики Беларусь и
                      международных соглашений в области траспортно-экспедиционной деятельности
                    </a>{' '}
                    и согласен считать принятием данной оферты фактическую передачу груза
                    представителю "Транспортной компании ТАТ"
                  </label>
                </p>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <p>
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name="rule_2"
                    checked={values.rule_2}
                    className={s.checkbox_rule}
                  />
                  <label className={s.label_rule}>
                    Лицо, заполнившее любую из форм заявки или форм обратной связи на Интернет-сайте
                    https://www.tat-minsk.by/, подтверждает, что полностью ознакомлено и согласно с{' '}
                    <a href="#">условиями Согласия</a> и{' '}
                    <a href="#">Политикой конфиденциальности персональных данных.</a> Общества с
                    ограниченной ответственностью «ТэкТат», УНП 191604067 (223021, Минский район,
                    Щомыслицкий с/с, 23/4-3, район д. Богатырёво).
                  </label>
                </p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SenderCard
