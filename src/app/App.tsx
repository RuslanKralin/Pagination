import { observer } from 'mobx-react-lite'
import { Bounce, Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Auth } from 'pages'
import { useRootStore, RootStoreProvider } from 'stores/Root'

import Routes from './Routes'

function App() {
  const { authorization } = useRootStore()

  // console.log(authorization.isAuthorized)

  return (
    <RootStoreProvider>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          // transition: {Bounce}
        />
        {authorization.isAuthorized ? <Routes /> : <Auth />}
      </div>
    </RootStoreProvider>
  )
}

export default observer(App)
