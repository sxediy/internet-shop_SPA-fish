import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PageHeader, message } from 'antd';
// import { PageTitle } from 'components/PageTitle/PageTitle';
import { EmptyComponent } from 'components/EmptyComponent/EmptyComponent';
import { CLEAR_ORDER, CLEAR_BASKET, CLEAR_PRODUCTS } from 'store/actionTypes';
import OrderForm from './OrderForm';
import styles from './Order.less';


const Order = ({
  clearOrder,
  clearBasket,
  clearProducts,
  order
}) => {
  useEffect(() => clearOrder, []);

  const onSubmit = (submitDATA) => {
    message.success('Списибо за покупку!', 5);
    clearOrder();
    clearBasket();
    clearProducts();
    console.log('Данные на сервер', { ...order, submitDATA });
  };

  const renderOrder = () => (
    <Fragment>
      {/* <PageTitle title='Оформление заказа' /> */}
      <div className={styles.orderContainer}>
        <OrderForm onSubmit={(submitDATA) => onSubmit(submitDATA)}/>
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
  clearOrder: PropTypes.func,
  clearBasket: PropTypes.func,
  clearProducts: PropTypes.func,
  order: PropTypes.object,
};


const mapStateToProps = ({ order }) => (
  {
    order
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    clearOrder: () => dispatch({ type: CLEAR_ORDER }),
    clearBasket: () => dispatch({ type: CLEAR_BASKET }),
    clearProducts: () => dispatch({ type: CLEAR_PRODUCTS })
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Order);
