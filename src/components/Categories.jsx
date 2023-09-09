const Categories = ({ storageCategory, onClickCategory }) => {
  const listOfCategories = ['Все', 'Пиццы', 'Суши и роллы', 'Закуски', 'Десерты', 'Напитки'];

  return (
    <div className="categories">
      <ul>
        {listOfCategories.map((category, i) => (
          <li
            key={category}
            onClick={() => onClickCategory(i)}
            className={storageCategory === i ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
