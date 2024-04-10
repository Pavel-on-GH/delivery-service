import EmptyBasketImg from '../assets/img/EmptyBasket.png';

export const EmptyBasket = () => {
  return (
    <div className="cart cart--empty">
      <div>
        <img src={EmptyBasketImg} alt="Изображение: Пустая корзина" />
      </div>
      <h2>{`К сожалению, в данный момент корзина пуста... Конечно, в ваших силах это изменить.`}</h2>
    </div>
  );
};
