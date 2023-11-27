import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import axios from 'axios';

import Categories from '../components/Categories';
import ProductBlock from '../components/ProductBlock';
import Sort from '../components/Sort';
import Skeleton from '../components/ProductBlock/Skeleton';

const Home = () => {
  const { categoryValue, sortValue } = useSelector((state) => state.filter);
  const { searchValue } = useSelector((state) => state.search);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const requestForProducts = 'https://64f1d3700e1e60602d2453ea.mockapi.io/items';
    const sortOrder = `sortBy=${sortValue.property.replace('-', '')}&order=${
      sortValue.property.includes('-') ? 'asc' : 'desc'
    }`;
    setLoading(true);

    axios
      .get(
        categoryValue
          ? `${requestForProducts}?category=${categoryValue}&${sortOrder}`
          : `${requestForProducts}?${sortOrder}`,
      )
      .then((arr) => {
        setItems(arr.data);
        setLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryValue, sortValue]);

  const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  const filterProducts = items.filter((arr) => {
    if (arr.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    return false;
  });

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">{categoryValue === 0 ? 'Все товары' : ''}</h2>
        <div className="content__items">
          {loading
            ? skeleton
            : filterProducts.map((arr) => <ProductBlock key={arr.imageUrl} {...arr} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
