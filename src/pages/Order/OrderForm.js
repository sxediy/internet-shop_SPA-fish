import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
// import { SubmitButton } from 'components/Buttons/SubmitButton';

const OrderForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">Name</label>
      <Field name="name" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <Field name="email" component="input" type="email" />
    </div>
    <div>
      <label htmlFor="phone">Phone</label>
      <Field name="phone" component="input" type="text" />
    </div>
    {/* <SubmitButton /> */}
    <button type="submit">Подтвердить заказ</button>
  </form>
);


OrderForm.propTypes = {
  handleSubmit: PropTypes.func,
};

const createReduxForm = reduxForm({ form: 'order' });

export default createReduxForm(OrderForm);
