import { Fragment } from 'react';
import { Navigation } from '@/navigation/*';
import Footer from './footer';
import styles from '@/styles/main.module.css';
import Head from 'next/head';

const Layout = (props) => {
	const { children } = props;
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"></meta>
			</Head>
			<Fragment>
				<Navigation />
				<div className={styles.main}>{children}</div>
				<Footer />
			</Fragment>
		</>
	);
};

export default Layout;
