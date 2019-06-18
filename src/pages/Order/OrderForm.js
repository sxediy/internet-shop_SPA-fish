import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { SubmitButton } from 'components/Buttons/SubmitButton';
import styles from './Order.less';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        className= {styles.inputForm}
        {...input}
        placeholder={label}
        type={type}
      />
      {touched && ((
        error && <span className={styles.errorText}>{error}</span>
      ))}
    </div>
  </div>
);

renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

const OrderForm = ({ handleSubmit, invalid }) => (
  <form className={styles.formContainer} onSubmit={handleSubmit}>
    <div className={styles.allFieldsContainer}>
      <div className={styles.fieldContainer}>
        <label htmlFor="name">Ваше имя</label>
        <Field name="name" component={renderField} type="text" />
      </div>
      <div className={styles.fieldContainer}>
        <label htmlFor="email">Email</label>
        <Field name="email" component={renderField} type="email" />
      </div>
      <div className={styles.fieldContainer}>
        <label htmlFor="phone">Мобильный телефон</label>
        <Field name="phone" component={renderField} type="number" />
      </div>
    </div>
    <div className={styles.buttonContainer}>
      <SubmitButton disabled={invalid} clickFunc={handleSubmit}/>
    </div>
  </form>
);


OrderForm.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
};

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Обязательно для заполнения';
  } else if (values.name.length < 4) {
    errors.name = 'Введите имя из 4-х или более символов';
  }
  if (!values.email) {
    errors.email = 'Обязательно для заполнения';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Введите корректный формат email адреса';
  }
  if (!values.phone) {
    errors.phone = 'Обязательно для заполнения';
  } else if (!/^[7]{1}[9]{1}[0-9]{9}$/i.test(values.phone)) {
    errors.phone = 'Введите 11 цифр номера телефона формата 79XXXXXXXXX';
  }
  return errors;
};

const createReduxForm = reduxForm({ form: 'order', validate });

export default createReduxForm(OrderForm);
