import React from 'react';
import styles from '@/styles/navigation.module.css';
import { Logo, NavLink } from './index.js';

const links = [
	{ url: '/', text: 'Home' },
	{ url: '/journal', text: 'Journal' },
];

const Navigation = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<nav>
				<ul>
					{links.map((link, idx) => (
						<li key={idx}>
							<NavLink url={link.url} text={link.text} />
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
