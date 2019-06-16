import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GET_PRODUCTS } from 'store/actionTypes';
import {
  Row,
  Col,
  Pagination,
} from 'antd';
import { Merce } from 'components/Merce/Merce';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { EmptyComponent } from 'components/EmptyComponent/EmptyComponent';
import styles from './Products.less';

const Products = ({ getProducts, putProductToBasket, products }) => {
  const pageSize = 12;
  const [currentPage, setNewCurrentPage] = useState(1);
  const from = pageSize * (currentPage - 1);
  const to = pageSize * currentPage;

  const productsOnCurrentPage = products.slice(from, to);
  if (productsOnCurrentPage.length === 0 && currentPage > 1) {
    setNewCurrentPage(currentPage - 1);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const renderProducts = () => (
    <Fragment>
      <PageTitle title='Страница с товарами' />
      <div className={styles.productsContainer}>
        <Row gutter={8}>
          {productsOnCurrentPage.map(product => (
            < Col span={8} key={product.id}>
              <Merce
                product={product}
                funcClick={() => putProductToBasket(product)}
              />
            </Col>
          ))
          }
        </Row>
      </div>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={products.length}
        hideOnSinglePage
        onChange={(newCurrentPage) => setNewCurrentPage(newCurrentPage)}
      />
    </Fragment>
  );

  return (
    <div className={styles.pageContainer}>
      {products.length > 0 ? renderProducts() : <EmptyComponent /> }
    </div>
  );
};

Products.propTypes = {
  getProducts: PropTypes.func,
  putProductToBasket: PropTypes.func,
  products: PropTypes.array,
};


const mapStateToProps = ({ products }) => (
  {
    products,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    getProducts: () => dispatch({ type: GET_PRODUCTS }),
    putProductToBasket: (product) => dispatch({ type: 'PUT_PRODUCT_TO_BASKET', payload: product })
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Products);
