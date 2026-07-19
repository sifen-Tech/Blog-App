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
        setPosts(data.posts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading && <p>Loading quote...</p>}
      {error && <p>Something went wrong: {error}</p>}
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <BlogCard post={post} />
        </Link>
      ))}
    </>
  );
}
export default Home;
