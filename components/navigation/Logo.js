import Link from 'next/link'
import styles from '@/styles/logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a><Link href="/">BlogIt</Link></a>
    </div>);
};

export default Logo;
