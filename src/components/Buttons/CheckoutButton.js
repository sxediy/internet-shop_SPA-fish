import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
// import styles from './CheckoutButton.less';

const CheckoutButton = ({ funcClick }) => (
  <Button
    type="ghost"
    shape="round"
    size="large"
    onClick={funcClick}
  >
    <h3>Checkout</h3>
  </Button>
);

CheckoutButton.propTypes = {
  funcClick: PropTypes.func,
};

export { CheckoutButton };
