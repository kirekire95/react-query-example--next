import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { API_URL, POSTS } from '~/constants'
import type { Post } from '~/types'

async function fetchPosts(page: number, signal: AbortSignal | undefined) {
  const response = await fetch(`${API_URL}?_page=${page}&_limit=5`, {
    method: 'GET',
    signal
  })
  const data = (await response.json()) as Post[]
  return data
}

export function usePostsQuery(page: number) {
  return useQuery(
    [POSTS, page],
    ({ signal }) => {
      return fetchPosts(page, signal)
    },
    {
      keepPreviousData: true,
      retry: 5,
      retryDelay: attempt => {
        return Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000)
      },
      onError: () => {
        return toast.error("Couldn't fetch posts")
      }
    }
  )
}
