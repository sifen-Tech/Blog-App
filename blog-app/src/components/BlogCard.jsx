import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <div>
      {post.tags?.map((tag, index) => (
        <span key={tag} className="mr-5">
          #{tag}
        </span>
      ))}

      <h2>{post.title}</h2>

      <p>{post.body}</p>
      <Link to={`/post/${post.id}`}>Read More →</Link>
    </div>
  );
}

export default BlogCard;
