import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard.jsx";
import { Link } from "react-router-dom";
import mountainBg from "../images/mountain.png";
import { Plus } from "lucide-react";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=10")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        const localBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

        const allPosts = [...localBlogs, ...data.posts];
        setPosts(allPosts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <p>Loading posts...</p>}
      {error && <p>Something went wrong: {error}</p>}
      <Link to="/create">
        <button>Create New Post</button>
      </Link>

      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat pt-5"
        style={{ backgroundImage: `url(${mountainBg})` }}
      >
        <div className="bg-black/50 min-h-screen p-10">
          <div className="flex justify-end mb-10">
            <Link to="/create">
              <button
                className="
      flex items-center gap-2
      rounded-xl
      bg-blue-600
      px-5
      py-3
      font-semibold
      text-white
      shadow-lg
      transition
      hover:-translate-y-1
      hover:bg-blue-700
      hover:shadow-xl
    "
              >
                <Plus size={20} />
                Create New Post
              </button>
            </Link>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Discover Stories That Inspire
          </h1>

          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            Explore articles, ideas, and perspectives from around the world.
          </p>

          <BlogCard posts={posts} />
        </div>
      </div>
    </>
  );
}

export default Home;
