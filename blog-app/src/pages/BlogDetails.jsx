import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { bookmarksAtom } from "../atoms/bookmarkAtoms";
import { Bookmark } from "lucide-react";
import mountainBg from "../images/mountain.png";

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          if (!res.ok) {
            throw new Error("Failed to fetch post");
          }

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
        if (!res.ok) {
          throw new Error("Failed to fetch comments");
        }

        return res.json();
      })
      .then((data) => {
        setComments(data.comments || []);
      })
      .catch(() => {
        setComments([]);
      });
  }, [id]);

  if (loading) {
    return (
      <div
        className="min-h-screen pt-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mountainBg})` }}
      >
        <div className="min-h-screen bg-black/50 flex items-center justify-center">
          <p className="text-white text-xl">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="min-h-screen pt-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mountainBg})` }}
      >
        <div className="min-h-screen bg-black/50 flex items-center justify-center">
          <p className="text-red-400 text-xl">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div
        className="min-h-screen pt-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mountainBg})` }}
      >
        <div className="min-h-screen bg-black/50 flex items-center justify-center">
          <p className="text-white text-xl">Post not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen pt-7 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${mountainBg})` }}
    >
      <div className="min-h-screen bg-black/50 p-10">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate("/")}
            className="mb-6 text-gray-300 hover:text-white transition"
          >
            ← Back to Home
          </button>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white shadow-xl">
            <div className="flex flex-wrap gap-3 mb-5">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/20 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-start gap-5 mb-6">
              <h1 className="text-4xl font-bold">{post.title}</h1>

              <button
                onClick={toggleBookmark}
                className="text-white hover:text-blue-400 transition"
              >
                <Bookmark
                  size={32}
                  fill={isBookmarked ? "currentColor" : "none"}
                />
              </button>
            </div>

            <p className="text-gray-200 leading-8 text-lg">{post.body}</p>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Comments</h2>

            <div className="space-y-5">
              {comments.length === 0 ? (
                <p className="text-gray-300">No comments available.</p>
              ) : (
                comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="border-b border-white/20 pb-4"
                  >
                    <h3 className="font-semibold">{comment.user.username}</h3>

                    <p className="text-gray-300">{comment.body}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
