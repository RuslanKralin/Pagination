import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import axios from 'axios'
import { toast } from 'react-toastify'

import styles from './Styles.module.scss'
import { Country } from './ui/Country'
import { ButtonGroup } from './ui/ButtonGroup'

const URL: string = 'https://restcountries.com/v3.1/all'

interface Icountry {
  name: { common: string }
  flags: { svg: string }
  capital: string[]
  maps: { googleMaps: string }
  continents: string[]
}

function PaginationCountry() {
  const [countries, setCountries] = useState<Icountry[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [countriesPerPage, setCountriesPerPage] = useState<number>(10)

  let pageButtons: number = Math.ceil(countries.length / countriesPerPage)

  const lastCountriesIndex = currentPage * countriesPerPage

  const firstCountriesIndex = lastCountriesIndex - countriesPerPage

  const countriesForPage = countries.slice(firstCountriesIndex, lastCountriesIndex)

  const fetchCountries = async () => {
    try {
      const responce = await axios.get(URL)
      setCountries(responce.data)
      console.log(responce.data)
    } catch (error: any) {
      toast.error(error)
    } finally {
    }
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <div className={styles.wrapper}>
      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <p>По скольько выводить на экран:</p>

        <select
          defaultValue={countriesPerPage.toString()}
          style={{ width: '4rem', height: '100%', padding: '0.5rem' }}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setCountriesPerPage(Number(e.target.value))
          }
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <ButtonGroup pageButtons={pageButtons} setCurrentPage={setCurrentPage} />
      <div className={styles.content}>
        {countriesForPage &&
          countriesForPage.map((i) => (
            <Country
              name={i.name}
              capital={i.capital}
              flags={i.flags}
              maps={i.maps}
              continents={i.continents}
            />
          ))}
      </div>
    </div>
  )
}

export default observer(PaginationCountry)
