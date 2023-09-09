const ProductBlock = ({ title, price, imageUrl }) => {
  return (
    <div className="product-block-wrapper">
      <div className="product-block">
        <img className="product-block__image" src={imageUrl} alt="product" />
        <h4 className="product-block__title">{title}</h4>
        <div className="product-block__price">От {price} ₽</div>

        <div className="product-block__bottom">
          <button className="button button--outline button--add">
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;
