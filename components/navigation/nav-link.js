import React from 'react';
import Link from 'next/link';

const NavLink = (props) => {
	const { url, text } = props;
	return (
		<>
			<Link href={url}>
				<a>{text}</a>
			</Link>
		</>
	);
};

export default NavLink;
