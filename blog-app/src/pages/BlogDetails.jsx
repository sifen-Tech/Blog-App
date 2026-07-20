import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { bookmarksAtom } from "../atoms/bookmarkAtoms";
import { Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);
  const isBookmarked = bookmarks.some((item) => item.id === post?.id);
  const toggleBookmark = () => {
    if (isBookmarked) {
      setBookmarks(bookmarks.filter((item) => item.id !== post.id));
    } else {
      setBookmarks([...bookmarks, post]);
    }
  };

  useEffect(() => {
    const localBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    const localPost = localBlogs.find((blog) => blog.id === Number(id));

    if (localPost) {
      setPost(localPost);
      setLoading(false);
    } else {
      fetch(`https://dummyjson.com/posts/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch");
          return res.json();
        })
        .then((data) => {
          setPost(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }

    fetch(`https://dummyjson.com/posts/${id}/comments`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch comments");
        return res.json();
      })
      .then((data) => {
        setComments(data.comments);
      });
  }, [id]);
  if (loading) {
    return <p>Loading post...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <>
      <button onClick={() => navigate("/")}>← Back to Home</button>
      <div>
        <div>
          {post?.tags?.map((tag) => (
            <span key={tag} className="mr-5">
              #{tag}
            </span>
          ))}
        </div>

        <h1>{post.title}</h1>
        <p>{post.body}</p>

        <h2>Comments</h2>

        {comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.user.username}</h3>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
      <div>
        <button onClick={toggleBookmark}>
          <Bookmark size={28} fill={isBookmarked ? "currentColor" : "none"} />
        </button>
      </div>
    </>
  );
}

export default BlogDetail;
