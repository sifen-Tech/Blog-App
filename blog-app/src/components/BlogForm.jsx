import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogForm() {
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });

  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!blog.title.trim() || !blog.content.trim()) {
      setFormError("Please fill in both the title and content.");
      return;
    }

    setFormError("");

    const newBlog = {
      id: Date.now(),
      title: blog.title,
      body: blog.content,
      tags: [],
    };

    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    const updatedBlogs = [...existingBlogs, newBlog];

    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    setBlog({
      title: "",
      content: "",
    });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6">
      {formError && (
        <p className="mb-4 text-red-600 font-medium">{formError}</p>
      )}

      <input
        type="text"
        placeholder="Give your thoughts a name..."
        value={blog.title}
        onChange={(e) => {
          setBlog({
            ...blog,
            title: e.target.value,
          });
          setFormError("");
        }}
        className="w-full border rounded-md p-3 mb-4"
      />

      <textarea
        placeholder="Start writing here. Use the whitespace to find your flow..."
        value={blog.content}
        onChange={(e) => {
          setBlog({
            ...blog,
            content: e.target.value,
          });
          setFormError("");
        }}
        rows={10}
        className="w-full border rounded-md p-3 mb-4"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default BlogForm;
