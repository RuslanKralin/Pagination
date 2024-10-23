import { createContext, useContext } from 'react'

import AuthorizationModel from 'models/Authorization'
import User from 'models/User'

export class RootStore {
  readonly authorization: AuthorizationModel
  readonly user: User

  constructor() {
    this.authorization = new AuthorizationModel(this)
    this.user = new User(this)
  }
}

const rootStore = new RootStore()

const rootStoreContext = createContext<RootStore>(rootStore)

export const RootStoreProvider = ({ children }: { children: JSX.Element }) => (
  <rootStoreContext.Provider value={rootStore}>{children}</rootStoreContext.Provider>
)
export const useRootStore = () => useContext(rootStoreContext)

export default rootStore
