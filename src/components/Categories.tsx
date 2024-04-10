import { useSelector, useDispatch } from 'react-redux';
import { setCategoryValue, selectFilter } from '../exports/sliceExports';

export const Categories = () => {
  const { categoryValue } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const listOfCategories: string[] = [
    'Все',
    'Пиццы',
    'Суши и роллы',
    'Закуски',
    'Десерты',
    'Напитки',
  ];

  return (
    <div className="categories">
      <ul>
        {listOfCategories.map((category, i) => (
          <li
            key={category}
            onClick={() => dispatch(setCategoryValue(i))}
            className={categoryValue === i ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
