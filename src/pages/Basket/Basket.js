import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import { DELETE_PRODUCT_IN_BASKET } from 'store/actionTypes';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { EmptyComponent } from 'components/EmptyComponent/EmptyComponent';

import styles from './Basket.less';

const { Column } = Table;

const Basket = ({ basket, changeBasket }) => {
  const renderBasket = () => (
    <Fragment>
      <PageTitle title='Корзина' />
      <div className={styles.basketContainer}>
        <Table dataSource={basket} pagination={false}>
          <Column title="Наименование" dataIndex="product" key="product" />
          <Column title="Количество" dataIndex="count" key="count" />
          <Column title="Сумма" dataIndex="price" key="price" />
          <Column
            title="Action"
            key="action"
            render={(product) => (
              <div onClick={() => changeBasket(product)}>
                 Delete
              </div>
            )}
          />
        </Table>
      </div>
    </Fragment>
  );


  return (
    <div className={styles.pageContainer}>
      {basket.length > 0 ? renderBasket() : <EmptyComponent /> }
    </div>
  );
};

Basket.propTypes = {
  basket: PropTypes.array,
  changeBasket: PropTypes.func,
};


const mapStateToProps = ({ basket }) => (
  {
    basket
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    changeBasket: (product) => dispatch({ type: DELETE_PRODUCT_IN_BASKET, payload: product })
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Basket);
