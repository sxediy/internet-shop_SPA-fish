import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'antd';
// import styles from './CheckoutButton.less';

const CheckoutButton = ({ funcClick, path }) => (
  <Button
    type="ghost"
    shape="round"
    size="large"
    onClick={funcClick}
  >
    <Link to={path}><h3>Checkout</h3></Link>
  </Button>
);

CheckoutButton.propTypes = {
  funcClick: PropTypes.func,
  path: PropTypes.string,
};

export { CheckoutButton };
