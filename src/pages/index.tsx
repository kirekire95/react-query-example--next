/* eslint-disable no-nested-ternary */
import type { ChangeEvent } from 'react'
import { useEffect, useState } from 'react'

import Fuse from 'fuse.js'
import { Toaster } from 'react-hot-toast'

import { Pagination } from '~/components/Pagination'
import { PostItem } from '~/components/PostItem'
import { usePostsQuery } from '~/hooks/usePosts'
import type { Post } from '~/types'

export default function Home() {
  const [page, setPage] = useState(1)
  const [posts, setPosts] = useState<Post[] | undefined>([])
  const [searchQuery, setSearchQuery] = useState('')

  const { data, status, isFetching, isPreviousData } = usePostsQuery(page)

  const handleDeletePost = async (id: number) => {
    setPosts(prevPosts => {
      return prevPosts?.filter(post => {
        return post.id !== id
      })
    })
  }

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSearchQuery(value)
  }

  useEffect(() => {
    if (data) {
      const fuse = new Fuse(data, {
        keys: ['title'],
        includeScore: true,
        includeMatches: true,
        isCaseSensitive: false
      })

      const searchResults = fuse.search(searchQuery)

      const postResults = searchQuery
        ? searchResults.map(result => {
            return result.item
          })
        : data

      setPosts(postResults)
    }
  }, [data, searchQuery])

  const nextPage = () => {
    setPage(prev => {
      return prev + 1
    })
  }

  const previousPage = () => {
    setPage(prev => {
      return prev - 1
    })
  }

  return (
    <>
      <div className="px-8">
        <h1 className="text-center">Post Results {posts?.length}</h1>
        <form>
          <input
            className="primary-input mb-4"
            type="search"
            name="search"
            onChange={handleSearch}
            value={searchQuery}
            placeholder="Search..."
          />
        </form>
        {status === 'loading' ? (
          <div>Loading...</div>
        ) : status === 'error' ? (
          <div>Error...</div>
        ) : (
          <section className="grid gap-4">
            {posts?.map(item => {
              return <PostItem key={item.id} data={item} handleDeletePost={handleDeletePost} />
            })}
          </section>
        )}
        <Pagination
          page={page}
          data={data}
          isPreviousData={isPreviousData}
          isFetching={isFetching}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}
