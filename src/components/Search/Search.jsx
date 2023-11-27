import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/searchSlice';
import styles from './Search.module.scss';

const Search = () => {
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const inputClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        className={styles.input}
        value={searchValue}
        onChange={(event) => {
          dispatch(setSearchValue(event.target.value));
          console.log(searchValue);
        }}
        placeholder="Введите наименование..."
      />
      <button className={styles.clear} onClick={inputClear}>
        X
      </button>
    </div>
  );
};

export default Search;
