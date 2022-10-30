import type { Post } from '~/types'

import { LoadingSpinner } from './LoadingSpinner'

interface PaginationProps {
  page: number
  data: Post[] | undefined
  isPreviousData: boolean
  isFetching: boolean
  nextPage: () => void
  previousPage: () => void
}

export const Pagination = (props: PaginationProps) => {
  const { page, data, isPreviousData, isFetching, nextPage, previousPage } = props
  return (
    <section className="py-4">
      <div className="text-center py-4">
        <h3>Current Page: {page}</h3>
      </div>
      <nav className="flex gap-x-4">
        <button
          className="primary-button"
          type="button"
          onClick={() => {
            console.log('Previous Page', page)

            return previousPage()
          }}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <button
          className="primary-button"
          type="button"
          onClick={() => {
            console.log('Next Page', page)
            return nextPage()
          }}
          disabled={!data?.length}
        >
          Next Page
        </button>
      </nav>
      {isFetching && (
        <div className="flex justify-center items-center py-8">
          <LoadingSpinner />
        </div>
      )}
    </section>
  )
}
