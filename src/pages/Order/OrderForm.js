import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { createTextMask } from 'redux-form-input-masks';
import classNames from 'classnames';

import { SubmitButton } from 'components/Buttons/SubmitButton';
import styles from './Order.less';

const myCustomMaskDefinitions = {
  9: {
    regExp: /[9]/,
  },
  0: {
    regExp: /[0-9]/
  }
};

const phoneMask = createTextMask({
  pattern: '(900) 000-0000',
  maskDefinitions: myCustomMaskDefinitions,
});


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div className={styles.field}>
    {label ? <div className={styles.label}>
      <label>{label}</label>
    </div> : null}
    <div className={styles.inputContainer}>
      <input
        className= {classNames(
          { [styles.inputForm]: type !== 'tel' },
          { [styles.inputFormPhone]: type === 'tel' }
        )}
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
        {/* <Field name="phone" component={renderField} type="number" /> */}
        <Field
          label='+7'
          name="phone"
          component={renderField}
          type="tel" {...phoneMask}
          className={styles.phoneInput}
        />
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
    errors.name = 'Введите имя из 4-х или более символов';
  } else if (values.name.length < 4) {
    errors.name = 'Введите имя из 4-х или более символов';
  }
  if (!values.email) {
    errors.email = 'Введите корректный формат email адреса';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Введите корректный формат email адреса';
  }
  if (!values.phone) {
    errors.phone = 'Введите 10 цифр формата 9XXXXXXXXX';
  } else if (!/^[9]{1}[0-9]{9}$/i.test(values.phone)) {
    errors.phone = 'Введите 10 цифр формата 9XXXXXXXXX';
  }
  return errors;
};

const createReduxForm = reduxForm({ form: 'order', validate });

export default createReduxForm(OrderForm);
