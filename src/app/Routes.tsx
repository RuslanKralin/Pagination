import { observer } from 'mobx-react-lite'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import { InfinityScroll, LibPaginate, PaginationCities, PaginationCountry } from 'pages'
import { ROUTES } from 'shared/const'

import { Layout } from './Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path={ROUTES.DEFAULT} element={<InfinityScroll />} />
        <Route path={ROUTES.PAGINATION_COUNTRY} element={<PaginationCountry />} />
        <Route path={ROUTES.PAGINATION_CITIES} element={<PaginationCities />} />
        <Route path={ROUTES.LIB_PAGINATE} element={<LibPaginate />} />
      </Route>
    </>
  )
)

function routes() {
  return <RouterProvider router={router} />
}

export default observer(routes)
