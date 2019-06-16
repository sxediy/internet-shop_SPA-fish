/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table, Icon } from 'antd';

import { DELETE_PRODUCT_FROM_BASKET, CHANGE_PRODUCT_IN_BASKET } from 'store/actionTypes';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { EmptyComponent } from 'components/EmptyComponent/EmptyComponent';

import styles from './Basket.less';

const { Column } = Table;

const Basket = ({ basket, deleteProduct, changeProduct }) => {
  const renderDeleteIcon = (product) => (
    <div onClick={() => deleteProduct(product)}>
      <Icon type="delete" />
    </div>
  );

  const renderCount = (product) => (
    <div className={styles.countContainer}>
      <div className={styles.countIconMinus} onClick={() => changeProduct({ ...product, count: product.count - 1 })}>
        <Icon type="minus" />
      </div>
      <h3 className={styles.count}>{product.count}</h3>
      <div className={styles.countIconPlus} onClick={() => changeProduct({ ...product, count: product.count + 1 })}>
        <Icon type="plus" />
      </div>
    </div>
  );


  const renderBasket = () => (
    <Fragment>
      <PageTitle title='Корзина' />
      <div className={styles.basketContainer}>
        <Table dataSource={basket} pagination={false} rowKey={(product) => product.id}>
          <Column title="Наименование" key="product" dataIndex="product" />
          <Column title="Описание" key="description" dataIndex="description"/>
          <Column align="center" title="Количество" key="count" render={(product) => renderCount(product)}/>
          <Column align="center" title="Сумма" key="price" render={({ price, count }) => price * count} />
          <Column align="center" key="action" render={(product) => renderDeleteIcon(product)} />
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
  deleteProduct: PropTypes.func,
  changeProduct: PropTypes.func,
};


const mapStateToProps = ({ basket }) => (
  {
    basket
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    deleteProduct: (product) => dispatch({ type: DELETE_PRODUCT_FROM_BASKET, payload: product }),
    changeProduct: (product) => dispatch({ type: CHANGE_PRODUCT_IN_BASKET, payload: product })
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Basket);
