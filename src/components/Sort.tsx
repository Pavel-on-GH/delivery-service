import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortValue, selectFilter } from '../exports/sliceExports';

type sortType = {
  name: string;
  property: string;
};

const sortArray: sortType[] = [
  { name: 'Алфавиту (От А до Я)', property: '-title' },
  { name: 'Алфавиту (от Я до А)', property: 'title' },
  { name: 'Цене (по возрастанию)', property: '-price' },
  { name: 'Цене (по убыванию)', property: 'price' },
];

export const Sort = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const { sortValue } = useSelector(selectFilter);
  const sortRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const closePopup = (obj: sortType) => {
    dispatch(setSortValue(obj));
    setOpenPopup(!openPopup);
  };

  useEffect(() => {
    const clickTracking = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpenPopup(false);
      }
    };
    document.body.addEventListener('click', clickTracking);
    return () => document.body.removeEventListener('click', clickTracking);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <b>Фильтрация по: </b>
        <span onClick={() => setOpenPopup(!openPopup)}>{sortValue.name}</span>
      </div>

      {openPopup && (
        <div className="sort__popup">
          <ul>
            {sortArray.map((obj, i) => (
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
