import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories } from '../components/Categories';
import { ProductBlock } from '../components/ProductBlock';
import { Sort } from '../components/Sort';
import { Skeleton } from '../components/ProductBlock/Skeleton';
import { NotFound } from '../pages/NotFound/index';
import { fetchProducts } from '../redux/slices/productsSlice';
import { selectFilter } from '../redux/slices/filterSlice';
import { selectSearch } from '../redux/slices/searchSlice';

export const Home = () => {
  const { categoryValue, sortValue } = useSelector(selectFilter);
  const { searchValue } = useSelector(selectSearch);
  const { products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    async function asyncProducts() {
      dispatch(fetchProducts({ categoryValue, sortValue }));
    }

    window.scrollTo(0, 0);
    asyncProducts();
  }, [categoryValue, sortValue, dispatch]);

  const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  const filterProducts = products
    .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((arr) => <ProductBlock key={arr.imageUrl} {...arr} />);

  return (
    <div className="container">
      {status === 'error' ? (
        <NotFound />
      ) : (
        <>
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">{categoryValue === 0 ? 'Все товары' : ''}</h2>
          <div className="content__items">{status === 'loading' ? skeleton : filterProducts}</div>
        </>
      )}
    </div>
  );
};
