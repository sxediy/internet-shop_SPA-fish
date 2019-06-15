import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REQUEST_DATA } from 'store/actionTypes';

import styles from './Order.less';

const Order = ({ func, order }) => {
  console.log(func, order);
  return (
    <div className={styles.pageContainer}>
     null
    </div>
  );
};

Order.propTypes = {
  func: PropTypes.func,
  order: PropTypes.object,
};


const mapStateToProps = ({ order }) => (
  {
    order: order.some_property
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    func: () => dispatch({ type: REQUEST_DATA })
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Order);
