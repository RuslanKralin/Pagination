import { observer } from 'mobx-react-lite'
import { Outlet } from 'react-router-dom'

// import { Header } from 'widgets/Header'//TO DO
import { NavBar } from 'widgets/NavBar'

const Layout = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <NavBar />
        </div>

        <div
          style={{
            paddingTop: '2rem',
            backgroundColor: '#f7f7f7',
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}
          //TO DO
        >
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default observer(Layout)
