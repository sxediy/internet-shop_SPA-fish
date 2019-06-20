import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
} from 'antd';
import classNames from 'classnames';

import { BuyButton } from 'components/Buttons/BuyButton';

import styles from './Merce.less';


const Merce = (props) => (
  <div className={classNames(
    [styles.merceContainer],
    { [styles.activeMerceContainer]: props.product.isChosen }
  )}>
    <Card
      hoverable
      title={props.product.product}
    >
      <p>{props.product.description}</p>
      <p>{props.product.price}</p>
      <BuyButton {...props}/>
    </Card>
  </div>
);

Merce.propTypes = {
  product: PropTypes.object,
};


export { Merce };
