import useFetch from "../../hooks/useFetch";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const POSTS_URL = "/.netlify/functions/jsonplaceholder";

export default function JsonPlaceholderPosts() {
  const { data: posts, loading, error } = useFetch<Post[]>(POSTS_URL);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        JSONPlaceholder Posts
      </h2>

      {loading && <p className="text-gray-700 dark:text-gray-200">Loading posts...</p>}

      {error && <p className="text-red-600 dark:text-red-400">Error: {error}</p>}

      {!loading && !error && posts && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-zinc-900 shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 capitalize">
                {post.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
