import { Outlet } from 'react-router-dom'
import { Modals } from 'src/components'

function Layout() {
  return (
    <>
      <Outlet />
      <Modals />
    </>
  )
}

export default Layout
