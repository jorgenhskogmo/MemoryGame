import { createBrowserRouter } from 'react-router-dom'
import { Home, Game, ErrorPage } from 'src/pages'
import { Layout } from 'src/components'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: 'game', element: <Game /> }
      ]
    }
  ],
  {
    basename: import.meta.env.VITE_BASE_URL
  }
)

export default router
