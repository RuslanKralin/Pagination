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
<<<<<<< HEAD
=======
import { CreateTransportOrder } from 'pages/CreateTransportOrder'
import { TransportOrderInfo } from 'pages/OrderInfo/TransportOrderInfo'
>>>>>>> ab69c3c2921c17c9528a9f7cdb3d8a96427deecd

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
<<<<<<< HEAD
        <Route path={ROUTES.DEFAULT} element={<InfinityScroll />} />
        <Route path={ROUTES.PAGINATION_COUNTRY} element={<PaginationCountry />} />
        <Route path={ROUTES.PAGINATION_CITIES} element={<PaginationCities />} />
        <Route path={ROUTES.LIB_PAGINATE} element={<LibPaginate />} />
=======
        <Route path={ROUTES.DEFAULT} element={<Profile />} />
        <Route path={ROUTES.TRANSPORT_ORDERS} element={<TransportOrders />} />
        <Route path={ROUTES.MAIL_ORDERS} element={<MailOrders />} />
        <Route path={ROUTES.CREATE_TRANSPORT_ORDER} element={<CreateTransportOrder />} />
        <Route path={ROUTES.TRANSPORT_ORDER_INFO} element={<TransportOrderInfo />} />
>>>>>>> ab69c3c2921c17c9528a9f7cdb3d8a96427deecd
      </Route>
    </>
  )
)

function routes() {
  return <RouterProvider router={router} />
}

export default observer(routes)
