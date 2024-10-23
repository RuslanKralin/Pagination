import { observer } from 'mobx-react-lite'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import { MailOrders, Profile, TransportOrders } from 'pages'
import { ROUTES } from 'shared/const'

import { Layout } from './Layout'
import { CreateTransportOrder } from 'pages/CreateTransportOrder'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path={ROUTES.DEFAULT} element={<Profile />} />
        <Route path={ROUTES.TRANSPORT_ORDERS} element={<TransportOrders />} />
        <Route path={ROUTES.MAIL_ORDERS} element={<MailOrders />} />
        <Route path={ROUTES.CREATE_TRANSPORT_ORDER} element={<CreateTransportOrder />} />
      </Route>
    </>
  )
)

function routes() {
  return <RouterProvider router={router} />
}

export default observer(routes)
