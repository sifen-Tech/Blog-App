import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <div className="w-[350px] h-[200px] border border-gray-300 rounded-xl p-10 bg-white shadow-sm hover:shadow-md transition">
      {post.tags?.map((tag, index) => (
        <span
          key={index}
          className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded"
        >
          #{tag}
        </span>
      ))}

      <h1 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h1>

      <p className="text-gray-700 line-clamp-3 mt-auto pt-50">{post.body}</p>
      <Link
        to={`/post/${post.id}`}
        className="inline-block mt-4 px-5 py-2 rounded-full bg-slate-900 text-white font-medium transition-all duration-300 hover:bg-slate-800 hover:-translate-y-1 hover:shadow-lg"
      >
        Read More →
      </Link>
    </div>
  );
}

export default BlogCard;
