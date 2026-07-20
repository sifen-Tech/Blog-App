import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard.jsx";
import { Link } from "react-router-dom";

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

      <div className="grid grid-cols-3 gap-x-8 gap-y-6 px-20 py-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default Home;
