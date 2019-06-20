import Products from './pages/Products/Products';
import Basket from './pages/Basket/Basket';
import Order from './pages/Order/Order';


// eslint-disable-next-line no-unused-vars
export const routes = (props) => [
  {
    isNavBar: true,
    isExact: true,
    path: '/products',
    name: 'Страница с товарами',
    component: Products,
    isPrivate: false,
  },
  {
    isNavBar: false,
    path: '/basket',
    name: 'Корзина',
    component: Basket,
    isPrivate: false,
  },
  {
    isNavBar: false,
    path: '/order',
    name: 'Оформление заказа',
    component: Order,
    isPrivate: false,
  }
];
