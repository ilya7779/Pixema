import React, {FC} from 'react';
import styles from './AppLayout.module.css';

export const AppLayout: FC = () => {
  return (
    <div className={styles.app__wrapper}>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
};
