import { observer } from 'mobx-react-lite'
import { Bounce, Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Routes from './Routes'

function App() {
  // console.log(authorization.isAuthorized)

  return (
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
      <Routes />
    </div>
  )
}

export default observer(App)
