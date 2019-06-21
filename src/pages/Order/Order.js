import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { timeIsExpireInMinutes } from 'services/validateTime';
import { PageHeader, message } from 'antd';
import { EmptyComponent } from 'components/EmptyComponent/EmptyComponent';
import { CLEAR_ORDER, RESET_STATE } from 'store/actionTypes';
import OrderForm from './OrderForm';
import styles from './Order.less';


const Order = ({
  clearOrder,
  resetState,
  order,
  timeOfLoadData,
}) => {
  useEffect(() => clearOrder, []);

  const onSubmit = (submitDATA) => {
    resetState();
    if (!timeIsExpireInMinutes(timeOfLoadData)) {
      message.success('Списибо за покупку!', 5);
      return console.log('Данные на сервер', { ...order, submitDATA });
    }
    return message.warning('Данные устарели!', 5);
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
  resetState: PropTypes.func,
  order: PropTypes.object,
  timeOfLoadData: PropTypes.string,
};


const mapStateToProps = ({ order, products: { timeOfLoadData } }) => (
  {
    order,
    timeOfLoadData,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    clearOrder: () => dispatch({ type: CLEAR_ORDER }),
    resetState: () => dispatch({ type: RESET_STATE }),
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Order);
