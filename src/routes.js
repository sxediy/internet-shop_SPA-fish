import Products from './pages/Products/Products';
import Basket from './pages/Basket/Basket';
import Order from './pages/Order/Order';


export const routes = [
  {
    isNavBar: true,
    isExact: true,
    path: '/products',
    name: 'Страница с товарами',
    component: Products,
    isPrivate: false,
  },
  {
    isNavBar: true,
    path: '/basket',
    name: 'Корзина',
    component: Basket,
    isPrivate: false,
  },
  {
    isNavBar: true,
    path: '/order',
    name: 'Оформление заказа',
    component: Order,
    isPrivate: false,
  }
];
