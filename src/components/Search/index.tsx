import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue, selectSearch } from '../../redux/slices/searchSlice';
import styles from './Search.module.scss';

export const Search = () => {
  const { searchValue } = useSelector(selectSearch);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const inputClear = () => {
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
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
