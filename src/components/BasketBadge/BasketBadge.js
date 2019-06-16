import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Icon } from 'antd';
import styles from './BasketBadge.less';

const BasketBadge = ({ count }) => (
  <div className={styles.basketContainer}>
    <Icon type="shopping-cart"/>
    <Badge
      count={count}
      style={{ backgroundColor: '#84aff4' }}
    />
  </div>
);

BasketBadge.propTypes = {
  count: PropTypes.number,
};

export { BasketBadge };
