import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AsyncPaginate, LoadOptions } from 'react-select-async-paginate'
import { GroupBase, OptionsOrGroups } from 'react-select'

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
  const [value, setValue] = useState<OptionType | null>(null)

  // async function getCities(name?: string) {
  //   try {
  //     const response = await axios.get(URL, {
  //       params: {
  //         name: name,
  //         page: page,
  //         page_size: 20
  //       }
  //     })
  //     setCities((prevCities) => [...prevCities, ...response.data.results])
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  const loadOptions: LoadOptions<OptionType, GroupBase<OptionType>, any> = async (
    search: string,
    prevOptions: OptionsOrGroups<OptionType, any>,
    { page }: { page: number }
  ) => {
    const response = await axios.get(URL, {
      params: {
        name: search,
        page: page,
        page_size: 20
      }
    })
    const hasMore = !!response.data.next

    return {
      options: response.data.results.map((city: ICity) => ({
        value: city.name,
        label: city.name
      })),
      hasMore,
      additional: {
        page: page + 1
      }
    }
  }

  return (
    <div>
      <h1>react-select-async-paginate</h1>
      <AsyncPaginate
        debounceTimeout={1000}
        value={value}
        loadOptions={loadOptions}
        menuPlacement={'auto'}
        onChange={(selectedOption) => setValue(selectedOption)}
        additional={{ page: 1 }}
        // getOptionLabel={(e) => e.name}
        // getOptionValue={(e) => e.id}
      />
    </div>
  )
}

export default LibPaginate
