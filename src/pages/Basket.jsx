import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearBasket } from '../redux/slices/basketSlice';
import BasketProduct from './BasketProduct';

const Basket = () => {
  const dispatch = useDispatch();
  const { products, totalPrice } = useSelector((state) => state.basket);
  const clearConfirm = () => {
    if (window.confirm('Вы действительно желаете полностью очистить корзину?')) {
      dispatch(clearBasket());
    }
  };

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">Корзина</h2>
          <div onClick={clearConfirm} className="cart__clear">
            <span>Очистить корзину</span>
          </div>
        </div>

        <div className="content__items">
          {products.map((obj) => (
            <BasketProduct key={obj.id} {...obj} />
          ))}
        </div>

        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего наименований: <b>{products.length}</b>
            </span>
            <span>
              Сумма заказа: <b>{totalPrice} ₽</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link to="/" className="button button--outline button--add go-back-btn">
              <span>Вернуться</span>
            </Link>
            <div className="button pay-btn">
              <span>Оплатить</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
