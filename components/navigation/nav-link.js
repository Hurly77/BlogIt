import React from 'react'
import Link from 'next/link'

const NavLink = (props) => {
  const { url, text } = props
  return (
    <React.Fragment>
      <Link href={url}>
        <a>{text}</a>
      </Link>
    </React.Fragment>
  )
}

export default NavLink
