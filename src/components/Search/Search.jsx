import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/searchSlice';
import styles from './Search.module.scss';

const Search = () => {
  const { searchValue } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const inputClear = () => {
    dispatch(setSearchValue(''));
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
        }}
        placeholder="Поиск..."
      />
      {searchValue && (
        <button className={styles.clear} onClick={inputClear}>
          X
        </button>
      )}
    </div>
  );
};

export default Search;
