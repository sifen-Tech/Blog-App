import { Link } from "react-router-dom";
import Bookmarks from "../pages/Bookmarks.jsx";

function BlogCard({ post }) {
  return (
    <div>
      <h2>{post.tags.join(",")}</h2>
      <h2>{post.title}</h2>
      <p className="line-clamp-2">{post.body}</p>
      <Bookmarks post={post} />
    </div>
  );
}

export default BlogCard;
