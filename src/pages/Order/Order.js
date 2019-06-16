import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { EmptyComponent } from 'components/EmptyComponent/EmptyComponent';
import { SUBMIT_DATA } from 'store/actionTypes';
import OrderForm from './OrderForm';

import styles from './Order.less';

const Order = ({ submitData, order }) => {
  const renderOrder = () => (
    <Fragment>
      <PageTitle title='Оформление заказа' />
      <div className={styles.orderContainer}>
        <OrderForm onSubmit={submitData}/>
      </div>
    </Fragment>
  );

  console.log(submitData, order);
  return (
    <div className={styles.pageContainer}>
      {Object.keys(order).length > 0 ? renderOrder() : <EmptyComponent /> }
    </div>
  );
};

Order.propTypes = {
  submitData: PropTypes.func,
  order: PropTypes.object,
};


const mapStateToProps = ({ order }) => (
  {
    order
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    submitData: () => dispatch({ type: SUBMIT_DATA })
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Order);
