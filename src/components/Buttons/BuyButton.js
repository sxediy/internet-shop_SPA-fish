import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
// import styles from './BuyButton.less';

const BuyButton = ({ funcClick }) => (
  <Button
    type="primary"
    block
    onClick={funcClick}
  >
    <p>В корзину</p>
  </Button>
);

BuyButton.propTypes = {
  funcClick: PropTypes.func,
};


export { BuyButton };
