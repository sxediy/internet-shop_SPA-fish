import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styles from './BuyButton.less';

const BuyButton = ({ funcClick }) => (
  <Button
    className={styles.buyButton}
    type="primary"
    block
    onClick={funcClick}
  >
    <span className={styles.titleBuyButton}>В корзину</span>
  </Button>
);

BuyButton.propTypes = {
  funcClick: PropTypes.func,
};


export { BuyButton };
