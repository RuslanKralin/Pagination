import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'

import styles from './Styles.module.scss'
import axios from 'axios'
import { Photo } from './ui/Photo'

interface IPhoto {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

const URL: string = 'https://jsonplaceholder.typicode.com/photos'

function InfinityScroll() {
  const [photos, setPhotos] = useState<IPhoto[]>([])
  const [fetching, setFetching] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    if (fetching) {
      const fetchData = async () => {
        try {
          const responce = await axios.get(URL, {
            params: {
              _limit: 10,
              _page: page
            }
          })
          setPhotos([...photos, ...responce.data])
          setPage(page + 1)
        } catch (err) {
          console.error(err)
        } finally {
          setFetching(false)
        }
      }

      fetchData()
    }
  }, [fetching])

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true)
    }
    console.log(e.target.documentElement.scrollHeight)
    console.log(e.target.documentElement.scrollTop)
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      {photos &&
        photos.map((i: any) => (
          <Photo
            key={i.id + i.thumbnailUrl}
            albumId={4}
            id={i.id}
            thumbnailUrl={i.thumbnailUrl}
            title={i.title}
            url="asd"
          />
        ))}
    </div>
  )
}

export default observer(InfinityScroll)
