import { Fragment } from 'react'
import { Navigation } from '@/navigation/*'

const Layout = (props) => {
  const { children } = props
  return (
    <Fragment>
      <Navigation />
      {children}
    </Fragment>
  )
}

export default Layout
