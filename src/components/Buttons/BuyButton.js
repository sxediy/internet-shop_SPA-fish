import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styles from './BuyButton.less';

const BuyButton = ({ funcClick, buttonName = 'В корзину' }) => (
  <Button
    className={styles.buyButton}
    type="primary"
    block
    onClick={funcClick}
  >
    <span className={styles.titleBuyButton}>{buttonName}</span>
  </Button>
);

BuyButton.propTypes = {
  funcClick: PropTypes.func,
  buttonName: PropTypes.string,
};


export { BuyButton };
