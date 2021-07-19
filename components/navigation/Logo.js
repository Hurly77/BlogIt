import Link from 'next/link';
import styles from '@/styles/logo.module.css';

const Logo = () => {
	return (
		<div className={styles.logo}>
			<Link href="/">
				<a> BlogIt</a>
			</Link>
		</div>
	);
};

export default Logo;
