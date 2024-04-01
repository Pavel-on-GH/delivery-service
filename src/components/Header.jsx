import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import deliveryLogo from '../assets/img/delivery-logo.svg';
import Search from './Search/Search';
import basket from '../assets/img/basket.png';

const Header = () => {
  const { products, totalPrice } = useSelector((state) => state.basket);
  const countSum = products.reduce((sum, item) => sum + item.count, 0);

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
      {console.log(products)}
    </div>
  );
};

export default Header;
