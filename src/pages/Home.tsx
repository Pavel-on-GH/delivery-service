import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Categories, ProductBlock, Sort, Skeleton } from '../exports/componentsExport';
import { selectFilter, selectSearch, selectProduct, fetchProducts } from '../exports/sliceExports';
import { useAppDispatch } from '../redux/store';
import NotFound from './NotFound/index';

const Home = () => {
  const { categoryValue, sortValue } = useSelector(selectFilter);
  const { searchValue } = useSelector(selectSearch);
  const { products, status } = useSelector(selectProduct);
  const dispatch = useAppDispatch();

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

export default Home;
