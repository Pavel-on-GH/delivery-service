import styles from './styles.module.scss';
import sadImg from '../../assets/img/CryingEmoji.png';

const NotFound = () => {
  return (
    <div className={styles.root}>
      <img src={sadImg} alt="sad-emoji"></img>
      <h1>Что-то пошло не так...</h1>
      <p>К сожалению, запрашиваемая страница в данный момент недоступна.</p>
    </div>
  );
};

export default NotFound;
