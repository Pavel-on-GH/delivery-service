import styles from './styles.module.scss';

const NotFound = () => {
  return (
    <div className={styles.root}>
      <img
        src="https://easydrawingguides.com/wp-content/uploads/2018/10/Crying-Emoji-05.png"
        alt="sad-emoji"></img>
      <h1>Что-то пошло не так...</h1>
      <p>К сожалению, запрашиваемая страница в данный момент недоступна.</p>
    </div>
  );
};

export default NotFound;
