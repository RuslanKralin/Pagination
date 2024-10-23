import { makeAutoObservable } from 'mobx'
import Loading from 'models/Loading'
import { toast } from 'react-toastify'
import { API } from 'services'

class ProfileModel {
  full_name: string = ''
  date_birth: null | string = null
  phone: string = ''
  email: string = ''

  LoadingModel: Loading
  //TO DO loading: LoadingModel

  constructor() {
    makeAutoObservable(this)
    this.LoadingModel = new Loading()
  }

  async get() {
    try {
      this.LoadingModel.begin()

      const data = await API.profile.getInfo()

      this.full_name = data.full_name
      this.date_birth = data.date_birth
      this.phone = data.phone
      this.email = data.email

      this.LoadingModel.end()
    } catch (err: any) {
      toast.error(err)
    }
  }
}

const model = new ProfileModel()

export default model
