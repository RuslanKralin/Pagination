import axios from 'axios'
import { useEffect, useState } from 'react'
import type { GroupBase, OptionsOrGroups } from 'react-select'

import { AsyncPaginate } from 'react-select-async-paginate'

const URL: string = 'https://api.tktat.by/api/v1/country/townlist/'

type OptionType = {
  value: string
  label: string
}

interface ICity {
  name: string
  country_id: string
}

function LibPaginate() {
  const [cities, setCities] = useState<ICity[]>([])
  const [page, setPage] = useState<number>(1)
  const [value, onChange] = useState<OptionType | null>(null)

  async function getCities() {
    try {
      const response = await axios.get(URL, {
        params: {
          name: value,
          page: page,
          page_size: 20
        }
      })
      setCities([...cities, ...response.data.results])
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getCities()
  }, [])

  const options = cities.map((city: ICity) => ({
    value: city.name,
    label: city.name
  }))

  console.log(options)
  console.log(page)

  const loadOptions = async (
    search: string,
    prevOptions: OptionsOrGroups<OptionType, GroupBase<OptionType>>
  ) => {
    await getCities()
    setPage((prev) => prev + 1)

    let filteredOptions: OptionType[]

    if (!search) {
      filteredOptions = options
    } else {
      const searchLower = search.toLowerCase()

      filteredOptions = options.filter(({ label }) => label.toLowerCase().includes(searchLower))
    }

    const hasMore = true
    const slicedOptions = filteredOptions.slice(prevOptions.length, prevOptions.length + 10)

    return {
      options: slicedOptions,
      hasMore
    }
  }

  console.log(value)
  return (
    <div>
      <h1>react-select-async-paginate</h1>
      <AsyncPaginate
        value={value}
        loadOptions={loadOptions}
        menuPlacement={'auto'}
        onChange={(e) => onChange(e)}
        additional={{ page: 1 }}
        // getOptionLabel={(e) => e.name}
        // getOptionValue={(e) => e.id}
      />
    </div>
  )
}

export default LibPaginate
