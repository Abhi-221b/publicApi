import useFetch from '../../hooks/useFetch'

type joke = {
  id: string
  joke: string
  status: number
}

const POSTS_URL = '/.netlify/functions/jokes'

export default function JsonPlaceholderPosts () {
  const { data: joke, loading, error } = useFetch<joke>(POSTS_URL)

  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
        Random dad joke:
      </h2>

      {loading && (
        <p className='text-gray-700 dark:text-gray-200'>Loading posts...</p>
      )}

      {error && (
        <p className='text-red-600 dark:text-red-400'>Error: {error}</p>
      )}

      {!loading && !error && joke && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <article className='bg-white dark:bg-zinc-900 shadow-md rounded-lg p-6'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2 capitalize'>
              {joke.joke}
            </h3>
          </article>
        </div>
      )}
    </section>
  )
}
