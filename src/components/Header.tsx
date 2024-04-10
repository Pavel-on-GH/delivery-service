import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Search } from './Search/index';
import deliveryLogo from '../assets/img/delivery-logo.svg';
import basket from '../assets/img/basket.png';
import { selectBascket } from '../redux/slices/basketSlice';
import { useEffect } from 'react';

export const Header = () => {
  const { products, totalPrice } = useSelector(selectBascket);
  const countSum = products.reduce((sum, item) => sum + item.count, 0);

  useEffect(() => {
    const jsonProducts = JSON.stringify(products);
    localStorage.setItem('Basket', jsonProducts);
    const jsonPrice = JSON.stringify(totalPrice);
    localStorage.setItem('TotalPrice', jsonPrice);
  }, [products, totalPrice]);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="64" src={deliveryLogo} alt="Logo" />
            <div className="header__description">
              <h1>Delivery Fast</h1>
              <p>Быстро, надёжно, вкусно!</p>
              <p>Доставка по всей Москве и области.</p>
            </div>
          </div>
        </Link>
        <Search />

        <div className="header__cart">
          <Link to="/basket" className="button button--cart">
            {<img width={24} src={basket} alt="basket" />}
            <span>{countSum}</span>
            <div className="button__delimiter"></div>
            <span>{totalPrice} ₽</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
