'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Card } from '../../atoms/Card'
import { CardLoading } from '../../atoms/CardLoading'

interface Movie {
  id: number
  title: string
  poster_path: string
}
interface Fetch {
  loading: boolean
  error: boolean
}

export const ListMovie = ({ title, url }: { title: string; url: string }) => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [fetchStatus, setFetchStatus] = useState<Fetch>({
    loading: true,
    error: false,
  })

  useEffect(() => {
    setFetchStatus({
      loading: true,
      error: false,
    })
    const fetchNowPlayingMovies = async () => {
      try {
        const res = await fetch(`/api/list_movie?category=${url}?page=1`)
        const data = await res.json()
        console.log('data results : ', data.results)
        setMovies(data.results)
        setFetchStatus({
          loading: false,
          error: false,
        })
      } catch (error) {
        setFetchStatus({
          loading: false,
          error: true,
        })
        console.error('Failed to fetch movies', error)
      }
    }
    fetchNowPlayingMovies()
  }, [])
  return (
    <div className="mt-4">
      <button className="flex justify-between items-center w-full">
        <p className="text-xl font-medium">{title}</p>
        <Image
          src={'/assets/arrow.svg'}
          alt="arrow icon"
          width={24}
          height={24}
        />
      </button>
      {!fetchStatus.loading && fetchStatus.error && (
        <p className="text-center text-red-600">Gagal Memuat Data</p>
      )}
      <div className="flex w-full overflow-x-auto gap-2 mt-1">
        {fetchStatus.loading && !fetchStatus.error && (
          <>
            {Array(6)
              .fill(0)
              .map((_, idx) => (
                <CardLoading key={`${idx}-${idx}`} />
              ))}
          </>
        )}
        {!fetchStatus.loading &&
          !fetchStatus.error &&
          movies.length > 0 &&
          movies.map((e, i) => {
            return (
              <Card
                url={'https://image.tmdb.org/t/p/original///' + e.poster_path}
                key={`${i}-${i}`}
                title={e.title}
              />
            )
          })}
      </div>
    </div>
  )
}
