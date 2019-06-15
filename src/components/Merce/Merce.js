import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
} from 'antd';

import { BuyButton } from 'components/BuyButton/BuyButton';

import styles from './Merce.less';


const Merce = ({ product, funcClick }) => (
  <div className={styles.merceContainer}>
    <Card
      hoverable
      title={product.product}
    >
      <p>{product.description}</p>
      <p>{product.price}</p>
      <BuyButton funcClick={funcClick}/>
    </Card>
  </div>
);

Merce.propTypes = {
  product: PropTypes.object,
  funcClick: PropTypes.func,
};


export { Merce };
