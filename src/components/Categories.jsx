import { useSelector, useDispatch } from 'react-redux';
import { setCategoryValue } from '../redux/slices/filterSlice';

const Categories = () => {
  const categoryValue = useSelector((state) => state.filter.categoryValue);
  const dispatch = useDispatch();

  const listOfCategories = ['Все', 'Пиццы', 'Суши и роллы', 'Закуски', 'Десерты', 'Напитки'];

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

export default Categories;
