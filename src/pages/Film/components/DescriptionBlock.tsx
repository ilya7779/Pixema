import styles from './DescriptionBlock.module.css';


  export const DescriptionBlock = ({title, content}: {title: string, content: string | number}) => {
  return (
    <div className={styles.rightSide__descriptionBlock}>
      <div className={styles.descriptionBlock__title}>{title}</div>
      <div className={styles.descriptionBlock__content}>{content}</div>
    </div>
  );
};