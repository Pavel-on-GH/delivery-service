import { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import ProductBlock from '../components/ProductBlock';
import Sort from '../components/Sort';
import Skeleton from '../components/ProductBlock/Skeleton';

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryValue, setCategoryValue] = useState(0);
  const [sortValue, setSortValue] = useState({
    name: '... выбрать',
    property: 'rating',
  });

  useEffect(() => {
    const sortOrder = `sortBy=${sortValue.property.replace('-', '')}&order=${
      sortValue.property.includes('-') ? 'asc' : 'desc'
    }`;
    const requestForProducts = 'https://64f1d3700e1e60602d2453ea.mockapi.io/items';

    setLoading(true);
    fetch(
      categoryValue
        ? `${requestForProducts}?category=${categoryValue}&${sortOrder}`
        : `${requestForProducts}?${sortOrder}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
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
          <Categories
            storageCategory={categoryValue}
            onClickCategory={(i) => {
              setCategoryValue(i);
            }}
          />
          {<Sort storageSort={sortValue} onClickSort={(i) => setSortValue(i)} />}
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
