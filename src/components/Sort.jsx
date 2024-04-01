import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortValue } from '../redux/slices/filterSlice';

const sortTypes = [
  { name: 'Алфавиту (От А до Я)', property: '-title' },
  { name: 'Алфавиту (от Я до А)', property: 'title' },
  { name: 'Цене (по возрастанию)', property: '-price' },
  { name: 'Цене (по убыванию)', property: 'price' },
];

const Sort = () => {
  const sortRef = useRef();
  const sortValue = useSelector((state) => state.filter.sortValue);
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const closePopup = (i) => {
    dispatch(setSortValue(i));
    setOpenPopup(!openPopup);
  };

  useEffect(() => {
    const clickTracking = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setOpenPopup(false);
      }
    };
    document.body.addEventListener('click', clickTracking);
    return () => document.body.removeEventListener('click', clickTracking);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <b>Сортировка по: </b>
        <span onClick={() => setOpenPopup(!openPopup)}>{sortValue.name}</span>
      </div>

      {openPopup && (
        <div className="sort__popup">
          <ul>
            {sortTypes.map((obj, i) => (
              <li
                key={i}
                onClick={() => closePopup(obj)}
                className={sortValue.property === obj.property ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
