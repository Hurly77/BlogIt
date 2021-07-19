import React from 'react';
import styles from '@/styles/footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>
				Enzwel<span>©</span>
				<br />
				Visit us by clicking{' '}
				<a href="https://enzwel.com">here</a>
			</p>
		</footer>
	);
};

export default Footer;
