import { useDispatch } from 'react-redux';
import { addProduct } from '../../exports/sliceExports';
import { Link } from 'react-router-dom';

export type ProductBlockType = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  count: number;
};

export const ProductBlock = ({ id, title, price, imageUrl, description }: ProductBlockType) => {
  const dispatch = useDispatch();
  const buttonAddProduct = () => {
    const product = {
      id,
      title,
      price,
      imageUrl,
      description,
      count: 0,
    };
    dispatch(addProduct(product));
  };

  return (
    <div className="product-block-wrapper">
      <div className="product-block">
        <Link to={`product/${id}`}>
          <img className="product-block__image" src={imageUrl} alt={`Изображение: ${title}`} />
        </Link>
        <h4 className="product-block__title">{title}</h4>
        <div className="product-block__price">От {price} ₽</div>

        <div className="product-block__bottom">
          <button onClick={buttonAddProduct} className="button button--add">
            <span>В корзину </span>
          </button>
        </div>
      </div>
    </div>
  );
};
