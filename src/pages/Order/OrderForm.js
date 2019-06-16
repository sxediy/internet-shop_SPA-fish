import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
// import { SubmitButton } from 'components/Buttons/SubmitButton';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>))}
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
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">Name</label>
      <Field name="name" component={renderField} type="text" />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <Field name="email" component={renderField} type="email" />
    </div>
    <div>
      <label htmlFor="phone">Phone</label>
      <Field name="phone" component={renderField} type="text" />
    </div>
    {/* <SubmitButton /> */}
    <button
      type="submit"
      disabled={invalid}
    >
        Подтвердить заказ
    </button>
  </form>
);


OrderForm.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
};

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 4) {
    errors.name = 'Имя должно быть более четырех символов';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Некорректный формат email адреса';
  }
  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/^\+[7]{1}[0-9]{10}$/i.test(values.phone)) {
    errors.phone = 'Первые два символа российского номера телефона +7, далее 9 цифр - получается всего 11 символов';
  }
  return errors;
};

const createReduxForm = reduxForm({ form: 'order', validate });

export default createReduxForm(OrderForm);
