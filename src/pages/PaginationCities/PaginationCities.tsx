import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'

import styles from './Styles.module.scss'
import axios from 'axios'

import Select from 'react-select'

const URL: string = 'https://api.tktat.by/api/v1/country/townlist/?name=&'

interface ICity {
  name: string
  country_id: string
}

function PaginationCities() {
  const [cities, setCities] = useState<ICity[]>([])
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(true)

  async function getCities() {
    try {
      const response = await axios.get(URL, {
        params: {
          page: page,
          page_size: 20
        }
      })
      setCities(response.data.results)
      setPage((prev) => prev + 1)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (loading) {
      getCities()
    }
  }, [loading])

  const options = cities.map((city: ICity) => ({
    value: city.name,
    label: city.name
  }))

  const [selectedOption, setSelectedOption] = useState(null)

  const handleSelectChange = (selectedOption: any) => {
    setSelectedOption(selectedOption)
  }

  return (
    <div className={styles.wrapper}>
      {' '}
      <div style={{ width: '24rem' }}>
        <Select
          options={options}
          value={selectedOption}
          onChange={handleSelectChange}
          placeholder="Выберите значение"
          // styles={{width: '10rem'}}
        />
      </div>
    </div>
  )
}

export default observer(PaginationCities)
