import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BasketBadge } from 'components/BasketBadge/BasketBadge';
import styles from './NavigationBar.less';


const NavigationBar = (props) => (
  <header className={styles.navBar}>
    {props.routes.map(route => (
      <NavLink
        exact={route.isExact}
        activeClassName={styles.active}
        key={route.path}
        to={route.path}>{route.name}
      </NavLink>
    ))}
    <NavLink to={'/basket'}>
      <BasketBadge count={ props.basket.reduce((ac, cur) => cur.count + ac, 0) }/>
    </NavLink>
  </header>
);

NavigationBar.propTypes = {
  routes: PropTypes.array,
  basket: PropTypes.array,
};


const mapStateToProps = ({ basket }) => (
  {
    basket,
  }
);

// const mapDispatchToProps = (dispatch) => (
//   {
//     // getProducts: () => dispatch({ type: GET_PRODUCTS }),
//     // putProductToBasket: (product) => dispatch({ type: 'PUT_PRODUCT_TO_BASKET', payload: product })
//   }
// );


export default connect(mapStateToProps)(NavigationBar);
