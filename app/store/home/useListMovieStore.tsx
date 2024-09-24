import { create } from 'zustand'

interface Movie {
  id: number
  title: string
  poster_path: string
}

interface Fetch {
  loading: boolean
  error: boolean
}

interface ListMovieStore {
  movies: Movie[]
  fetchStatus: Fetch
  setMovies: (movies: Movie[]) => void
  setFetchStatus: (fetchStatus: Fetch) => void
}

const useListMovieStore = create<ListMovieStore>((set) => ({
  movies: [],
  fetchStatus: { loading: true, error: false },
  setMovies: (movies: Movie[]) => set({ movies }),
  setFetchStatus: (fetchStatus: Fetch) => set({ fetchStatus }),
}))

export default useListMovieStore
