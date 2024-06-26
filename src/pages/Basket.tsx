import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearBasket, selectBascket } from '../exports/sliceExports';
import { BasketProduct, EmptyBasket } from '../exports/componentsExport';

const Basket = () => {
  const dispatch = useDispatch();
  const { products, totalPrice } = useSelector(selectBascket);
  const clearConfirm = () => {
    if (window.confirm('Вы действительно желаете полностью очистить корзину?')) {
      dispatch(clearBasket());
      localStorage.clear();
    }
  };

  if (!totalPrice) {
    return <EmptyBasket />;
  }

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
              Товары: <b>{products.reduce((sum, item) => sum + item.count, 0)}</b>
            </span>
            <span>
              Сумма заказа: <b>{totalPrice} ₽</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link to="/">
              <button className="button basket-btn">Вернуться</button>
            </Link>
            <button className="button basket-btn">Оплатить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
