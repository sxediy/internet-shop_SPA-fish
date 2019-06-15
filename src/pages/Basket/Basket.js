import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REQUEST_DATA } from 'store/actionTypes';

import styles from './Basket.less';

const Basket = ({ func, basket }) => {
  console.log(func, basket);

  return (
    <div className={styles.pageContainer}>
      null
    </div>
  );
};

Basket.propTypes = {
  func: PropTypes.func,
  basket: PropTypes.object,
};


const mapStateToProps = ({ basket }) => (
  {
    basket: basket.some_property
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    func: () => dispatch({ type: REQUEST_DATA })
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Basket);
