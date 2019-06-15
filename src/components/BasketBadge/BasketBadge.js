import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Icon } from 'antd';
import styles from './BasketBadge.less';

const BasketBadge = ({ count } = 2) => (
  <div className={styles.basketContainer}>
    <Icon type="shopping-cart"/>
    <Badge
      count={count}
      style={{ backgroundColor: '#52c41a' }}
    />
  </div>
);

BasketBadge.propTypes = {
  count: PropTypes.string,
};

export { BasketBadge };
