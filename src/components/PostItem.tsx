import { TrashIcon } from '@heroicons/react/24/solid'

import type { Post } from '~/types'

interface PostItemProps {
  data: Post
  handleDeletePost: (id: number) => void
}

export const PostItem = (props: PostItemProps) => {
  const { data, handleDeletePost } = props
  return (
    <div className="bg-brand-500 p-4 rounded-md text-white">
      <h2 className="text-xl pt-0">{data.title}</h2>
      <p className="text-md">{data.body}</p>
      <button
        type="button"
        onClick={() => {
          return handleDeletePost(data.id)
        }}
      >
        <TrashIcon className="h-6 w-6" />
      </button>
    </div>
  )
}
