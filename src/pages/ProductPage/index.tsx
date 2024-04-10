import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.scss';

type ProductInfoType = {
  title: string;
  price: number;
  description: string;
  id: string;
  imageUrl: string;
};

export const ProductPage = () => {
  const [productInfo, setProductInfo] = useState<ProductInfoType>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProductInfo() {
      try {
        const { data } = await axios.get(`https://64f1d3700e1e60602d2453ea.mockapi.io/items/${id}`);
        setProductInfo(data);
        // console.log(data);
      } catch (error) {
        alert(`Ошибка при получении... Тип ошибки: "${error}"`);
        navigate('/');
      }
    }
    fetchProductInfo();
  }, [id, navigate]);

  if (!productInfo) {
    return <div className={styles.root}>{'Загрузка'}</div>;
  }

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h1>{productInfo.title}</h1>
      </div>
      <div className={styles.image}>
        <img width={300} src={productInfo.imageUrl} alt={`Изображение: ${productInfo.title}`} />
      </div>
      <div className={styles.gap}></div>
      <br />
      <div className={styles.description}>
        <h2>{`Цена: ${productInfo.price} ₽`}</h2>
        <p>Код товара: {`98765${productInfo.id ? productInfo.id : ''}`}</p>
        <p>
          {productInfo.description
            ? productInfo.description
            : 'Тут должно было быть описание, но что-то пошло не так... Приносим свои искренние извинения, ошибка будет исправлена в ближайшее время.'}
        </p>
      </div>
    </div>
  );
};
