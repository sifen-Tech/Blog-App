import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { Bookmark } from "lucide-react";
import { bookmarksAtom } from "../atoms/bookmarkAtoms";

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const postResponse = await fetch(`https://dummyjson.com/posts/${id}`);

        if (!postResponse.ok) {
          throw new Error("Failed to fetch post");
        }

        const postData = await postResponse.json();
        setPost(postData);

        const commentResponse = await fetch(
          `https://dummyjson.com/comments/post/${id}`,
        );

        if (!commentResponse.ok) {
          throw new Error("Failed to fetch comments");
        }

        const commentData = await commentResponse.json();

        setComments(commentData.comments);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  function handleBookmark() {
    if (!post) return;

    const alreadySaved = bookmarks.some((item) => item.id === post.id);

    if (alreadySaved) {
      const updatedBookmarks = bookmarks.filter((item) => item.id !== post.id);

      setBookmarks(updatedBookmarks);
    } else {
      setBookmarks([...bookmarks, post]);
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const isBookmarked = bookmarks.some((item) => item.id === post.id);

  return (
    <div className="p-6">
      <button onClick={() => navigate("/")} className="mb-4">
        Back
      </button>

      <h1>{post.title}</h1>

      <p>{post.body}</p>

      <p>Tags: {post.tags.join(", ")}</p>

      <button onClick={handleBookmark} className="mt-4">
        <Bookmark size={28} fill={isBookmarked ? "currentColor" : "none"} />
      </button>

      <h2>Comments</h2>

      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.user.username}</h3>

          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
