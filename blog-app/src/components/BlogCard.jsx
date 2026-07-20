import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <div className="rounded-xl border border-gray-300 p-5 shadow-md h-45 w-80">
      {post.tags?.map((tag, index) => (
        <span key={tag} className="mr-5">
          #{tag}
        </span>
      ))}

      <h2>{post.title}</h2>

      <p className="line-clamp-2">{post.body}</p>
      <Link to={`/post/${post.id}`}>Read More →</Link>
    </div>
  );
}

export default BlogCard;
