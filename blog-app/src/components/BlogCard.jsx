import { Link } from "react-router-dom";

function BlogCard({ posts = [] }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6  ">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-2xl
    bg-white/90
    backdrop-blur-md
    border
    border-white/30
    p-6
    shadow-xl
    transition
    duration-300
    hover:-translate-y-2
    hover:shadow-2xl
   "
          >
            {post.tags?.map((tag, index) => (
              <span
                key={tag}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
              >
                #{tag}
              </span>
            ))}
            <h2 className="text-xl font-bold text-gray-900 line-clamp-2">
              {post.title}
            </h2>
            <p className="mt-3 text-gray-700 line-clamp-3">{post.body}</p>
            <Link to={`/post/${post.id}`}>Read More →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogCard;
