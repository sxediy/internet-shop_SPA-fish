import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PageHeader, message } from 'antd';
// import { PageTitle } from 'components/PageTitle/PageTitle';
import { EmptyComponent } from 'components/EmptyComponent/EmptyComponent';
import { CLEAR_DATA } from 'store/actionTypes';
import OrderForm from './OrderForm';
import styles from './Order.less';


const Order = ({ clearData, order }) => {
  const onSubmit = () => {
    message.success('Списибо за покупку!', 5);
    clearData();
  };

  const renderOrder = () => (
    <Fragment>
      {/* <PageTitle title='Оформление заказа' /> */}
      <div className={styles.orderContainer}>
        <OrderForm onSubmit={onSubmit}/>
      </div>
    </Fragment>
  );

  return (
    <div className={styles.pageContainer}>
      {Object.keys(order).length > 0 ? renderOrder()
        : <div className={styles.goToProducts}>
          <Link to={'/products'}>
            <PageHeader
              title="Назад к странице с товарами"
              onBack={() => null}
            />
          </Link>
          <EmptyComponent />
        </div>
      }
    </div>
  );
};

Order.propTypes = {
  clearData: PropTypes.func,
  order: PropTypes.object,
};


const mapStateToProps = ({ order }) => (
  {
    order
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    clearData: () => dispatch({ type: CLEAR_DATA })
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Order);
