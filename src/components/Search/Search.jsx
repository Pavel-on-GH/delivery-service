import styles from './Search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Введите наименование..."
      />
      <button
        className={styles.clear}
        onClick={() => {
          setSearchValue('');
        }}>
        X
      </button>
    </div>
  );
};

export default Search;
