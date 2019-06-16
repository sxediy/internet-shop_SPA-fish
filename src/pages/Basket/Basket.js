import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Table,
  Icon,
  Button,
  Progress
} from 'antd';

import { DELETE_PRODUCT_FROM_BASKET, CHANGE_PRODUCT_IN_BASKET } from 'store/actionTypes';
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

  const renderFooter = () => {
    const summaryPrice = basket.reduce((accum, current) => accum + current.price * current.count, 0);
    return (
      <div className={styles.basketFooter}>
        <h1>Итого:</h1>
        <h1>{`${summaryPrice} р.`}</h1>
      </div>
    );
  };


  const renderBasket = () => (
    <Fragment>
      <div className={styles.basketContainer}>
        <Table
          title={() => <h2>Корзина покупок</h2>}
          dataSource={basket}
          pagination={false}
          rowKey={(product) => product.id}
          footer={renderFooter}
        >
          <Column title="Наименование" key="product" dataIndex="product" width="200px"/>
          <Column title="Описание" key="description" dataIndex="description" width="600px"/>
          <Column align="center" title="Количество" key="count" render={(product) => renderCount(product)}/>
          <Column align="center" title="Сумма" key="price" render={({ price, count }) => price * count} />
          <Column align="center" key="action" render={(product) => renderDeleteIcon(product)} />
        </Table>
        <div className={styles.basketProgress}>
          <Progress percent={100} size="small" strokeColor="#84aff4" status="success" />
        </div>
        <Button
          type="ghost"
          shape="round"
          size="large"
          onClick={() => {}}
        >
          <h3>Checkout</h3>
        </Button>
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
