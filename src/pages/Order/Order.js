import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { EmptyComponent } from 'components/EmptyComponent/EmptyComponent';
import { SUBMIT_DATA } from 'store/actionTypes';

import styles from './Order.less';

const Order = ({ submitData, order }) => {
  console.log(submitData, order);
  return (
    <div className={styles.pageContainer}>
      <PageTitle title='Оформление заказа'/>
      <EmptyComponent />
    </div>
  );
};

Order.propTypes = {
  submitData: PropTypes.func,
  order: PropTypes.object,
};


const mapStateToProps = ({ order }) => (
  {
    order: order.some_property
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    submitData: () => dispatch({ type: SUBMIT_DATA })
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Order);
