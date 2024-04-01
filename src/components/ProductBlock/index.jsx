import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/slices/basketSlice';

const ProductBlock = ({ id, title, price, imageUrl }) => {
  const dispatch = useDispatch();
  const buttonAddProduct = () => {
    const product = {
      id,
      title,
      price,
      imageUrl,
    };
    dispatch(addProduct(product));
  };

  return (
    <div className="product-block-wrapper">
      <div className="product-block">
        <img className="product-block__image" src={imageUrl} alt={`Изображение: ${title}`} />
        <h4 className="product-block__title">{title}</h4>
        <div className="product-block__price">От {price} ₽</div>

        <div className="product-block__bottom">
          <button onClick={buttonAddProduct} className="button button--outline button--add">
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;
