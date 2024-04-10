import { useDispatch } from 'react-redux';
import { removeProduct, dicrement, increment } from '../exports/sliceExports';

export type BasketProductPropsType = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
};

export const BasketProduct = ({ id, title, price, imageUrl, count }: BasketProductPropsType) => {
  const basketProps = { id, title, price, imageUrl, count };
  const dispatch = useDispatch();
  const dicrementCount = () => {
    dispatch(dicrement(basketProps));
  };
  const incrementCount = () => {
    dispatch(increment(basketProps));
  };
  const removeConfirm = () => {
    if (window.confirm('Вы действительно желаете удалить товар из корзины?')) {
      dispatch(removeProduct(basketProps));
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="product-block__image" src={imageUrl} alt={`Картинка: ${imageUrl}`} />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
      </div>
      <div className="cart__item-count">
        <div
          onClick={incrementCount}
          className="button button--outline button--circle cart__item-count-minus">
          -
        </div>
        {count}
        <div
          onClick={dicrementCount}
          className="button button--outline button--circle cart__item-count-plus">
          +
        </div>
      </div>
      <div className="cart__item-price">
        <b>{price * count} ₽</b>
      </div>
      <div className="cart__item-remove">
        <div onClick={removeConfirm} className="button button--outline button--circle">
          X
        </div>
      </div>
    </div>
  );
};
