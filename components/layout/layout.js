import { Fragment } from 'react';
import { Navigation } from '@/navigation/*';
import Footer from './footer';
import styles from '@/styles/main.module.css'

const Layout = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <Navigation />
      <div className={styles.main}>{children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
