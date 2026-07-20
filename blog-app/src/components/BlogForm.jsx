import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogForm() {
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!blog.title.trim() || !blog.content.trim()) {
      alert("Please fill in both the title and content.");
      return;
    }

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
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Give your thoughts a name..."
        value={blog.title}
        onChange={(e) =>
          setBlog({
            ...blog,
            title: e.target.value,
          })
        }
      />

      <textarea
        placeholder="Start writing here.Use the whitespace to find your flow..... "
        value={blog.content}
        onChange={(e) =>
          setBlog({
            ...blog,
            content: e.target.value,
          })
        }
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default BlogForm;
